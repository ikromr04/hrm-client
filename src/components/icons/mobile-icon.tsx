import { ReactNode } from 'react'

function MobileIcon({
  width = 16,
  height = 16,
}: {
  width?: number
  height?: number
}): ReactNode {
  return (
    <svg
      viewBox="0 0 384 512"
      width={width}
      height={height}
    >
      <path
        fill="currentColor"
        d="M16 64C16 28.7 44.7 0 80 0H304c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V64zM224 448a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM304 64H80V384H304V64z" />
    </svg>
  )
}

export default MobileIcon
