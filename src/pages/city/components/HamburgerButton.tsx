type Props = {
  onClick: () => void
}

export default function HamburgerButton({ onClick }: Props) {
  return (
    <button
      onClick={onClick}
      style={{
        position: "fixed",
        top: 20,
        right: 20,
        fontSize: 26,
        background: "black",
        color: "white",
        padding: "10px 14px",
        cursor: "pointer",
        zIndex: 9999
      }}
    >
      ☰
    </button>
  )
}