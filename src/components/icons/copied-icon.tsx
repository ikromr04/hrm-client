type CopiedIconProps = {
  width?: number
  height?: number
}

function CopiedIcon({
  width = 16,
  height = 16,
}: CopiedIconProps): JSX.Element {
  return (
    <svg
      viewBox="0 0 448 512"
      width={width}
      height={height}
    >
      <path
        d="M208 0H332.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128h80v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z"
        fill="currentColor" />
    </svg>
  )
}

export default CopiedIcon
