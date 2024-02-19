import { ReactNode } from 'react'

function SquareIcon({
  className,
  width = 16,
  height = 16,
}: {
  className?: string
  width?: number
  height?: number
}): ReactNode {
  return (
    <svg
      className={className}
      viewBox="0 0 448 512"
      height={height}
      width={width}
    >
      <path
        fill="currentColor"
        d="M384 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H384zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z" />
    </svg>
  )
}

export default SquareIcon
