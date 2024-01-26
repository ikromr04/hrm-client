type ChevronLeftIconProps = {
  width?: number
  height?: number
}

function ChevronLeftIcon({
  width = 16,
  height = 16,
}: ChevronLeftIconProps): JSX.Element {
  return (
    <svg
      viewBox="0 0 320 512"
      width={width}
      height={height}
    >
      <path
        fill="currentColor"
        d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
      />
    </svg>
  )
}

export default ChevronLeftIcon
