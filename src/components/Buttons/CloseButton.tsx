type Props = {
  close: () => void
  label?: string
}
export const CloseButton = ({ close, label = "X" }: Props) => {
  return (
    <button type="button" onClick={close}>
      {label}
    </button>
  )
}
