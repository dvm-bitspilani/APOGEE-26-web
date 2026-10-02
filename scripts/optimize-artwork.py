"""Recompress existing raster artwork and update only resolved local image paths."""
import json
import re
from pathlib import Path
from PIL import Image, ImageOps

root = Path.cwd()
mapping = {}
results = []
for folder in (root / "public", root / "src/assets"):
    for path in sorted(folder.rglob("*")):
        if path.suffix.lower() not in (".png", ".jpg", ".jpeg") or path.stat().st_size < 20_000:
            continue
        with Image.open(path) as image:
            image = ImageOps.exif_transpose(image)
            original_dimensions = list(image.size)
            max_dimension = 2400
            if any(part in path.parts for part in ("contacts", "speakers")) and not "Bg" in path.name:
                max_dimension = 1200
            image.thumbnail((max_dimension, max_dimension), Image.Resampling.LANCZOS)
            image = image.convert("RGBA" if "A" in image.getbands() else "RGB")
            output = path.with_suffix(".webp")
            image.save(output, "WEBP", quality=90, method=6)
            before = path.stat().st_size
            after = output.stat().st_size
            if after >= before:
                output.unlink()
                continue
            mapping[path.resolve()] = output.resolve()
            results.append({"path": str(path.relative_to(root)), "before": before, "after": after, "dimensions_before": original_dimensions, "dimensions_after": list(image.size)})

def rewrite(path):
    source = path.read_text()
    def replace(match):
        url = match.group(1)
        if url.startswith("http") or "${" in url:
            return match.group(0)
        target = root / url.lstrip("/") if url.startswith("/src/") else root / "public" / url.lstrip("/") if url.startswith("/") else path.parent / url
        if target.resolve() not in mapping:
            return match.group(0)
        return match.group(0).replace(url, str(Path(url).with_suffix(".webp")), 1)
    source = re.sub(r'''["'(]([^"'()]+?\.(?:png|jpg|jpeg))(?=["')])''', replace, source)
    path.write_text(source)

for folder in (root / "src", root / "public"):
    for path in folder.rglob("*"):
        if path.suffix in (".ts", ".tsx", ".scss", ".css", ".svg", ".json"):
            rewrite(path)
for original in mapping:
    original.unlink()
report = {"files": len(results), "before_bytes": sum(item["before"] for item in results), "after_bytes": sum(item["after"] for item in results), "assets": results}
(root / "restoration-evidence/artwork-optimization.json").write_text(json.dumps(report, indent=2) + "\n")
print(json.dumps({key: value for key, value in report.items() if key != "assets"}))
