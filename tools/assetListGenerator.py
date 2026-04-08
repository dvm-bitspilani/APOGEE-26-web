import os
import json

assetListDir = '../src/utils/'
publicDir = '../public/'

os.chdir(os.path.dirname(os.path.abspath(__file__)))
os.system(f"node -e \"console.log(JSON.stringify(require('{os.path.join(assetListDir, "assetList.ts")}').default))\" > assetList.local.json")

with open('assetList.local.json', 'r') as f:
    assetList = json.load(f)

assetDetailList = {}
totalAssetTypeSize = {}

assetDetailList = {}
for assetType in assetList:
    _assetDetailList = []
    totalAssetOfTypeSize = 0

    for assetPath in assetList[assetType]:
        try:
            assetSize = os.path.getsize(os.path.join(publicDir, assetPath[1:]))
        except FileNotFoundError:
            print(f"File not found: {assetPath}")
            continue

        totalAssetOfTypeSize += assetSize
        _assetDetailList.append({
            'path': assetPath,
            'size': assetSize
        })
    assetDetailList[assetType] = _assetDetailList
    totalAssetTypeSize[assetType] = totalAssetOfTypeSize

assetDetailListJSON = json.dumps(assetDetailList, indent=2)

totalAssetSize = sum(totalAssetTypeSize.values())
ts_export_str = [f"export const total{assetType.capitalize()}Size = {size};" for assetType, size in totalAssetTypeSize.items()]
ts_content = f"export const assetDetailList = {assetDetailListJSON}; \nexport const totalAssetSize = {totalAssetSize}; \n{'\n'.join(ts_export_str)}"

with open(os.path.join(assetListDir, "assetDetailList.ts"), 'w') as f:
    f.write(ts_content)
print(f"Successfully wrote into file")