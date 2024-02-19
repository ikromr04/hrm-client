import { ReactNode } from 'react'

function EllipsisIcon({
  width = 16,
  height = 16,
}: {
  width?: number
  height?: number
}): ReactNode {
  return (
    <svg
      viewBox="0 0 448 512"
      width={width}
      height={height}
    >
      <path
        fill="currentColor"
        d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z" />
    </svg>
  )
}

export default EllipsisIcon
