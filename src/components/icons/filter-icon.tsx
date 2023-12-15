type FilterIconProps = {
  width?: number
  height?: number
}

function FilterIcon({ 
  width = 16, 
  height = 16, 
}: FilterIconProps): JSX.Element {
  return (
    <svg 
      viewBox="0 0 24 24"
      width={width}
      height={height}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" />
    </svg>

  )
}

export default FilterIcon
