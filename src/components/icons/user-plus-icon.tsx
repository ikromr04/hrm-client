type UserPlusIconProps = {
  width: number
  height: number
}

function UserPlusIcon({ width, height }: UserPlusIconProps): JSX.Element {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="8.5" cy={7} r={4} />
      <path d="M20 8v6M23 11h-6" />
    </svg>
  )
}

export default UserPlusIcon
