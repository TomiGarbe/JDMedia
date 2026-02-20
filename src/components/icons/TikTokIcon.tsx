type TikTokIconProps = {
  className?: string
}

const TikTokIcon = ({ className = 'h-7 w-7' }: TikTokIconProps) => {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none">
      <path
        d="M12.94 1.61V15.78A2.83 2.83 0 0 1 10.11 18.61A2.83 2.83 0 0 1 7.28 15.78A2.84 2.84 0 0 1 10.11 12.94V9.17A6.61 6.61 0 0 0 3.5 15.78A6.61 6.61 0 0 0 10.11 22.39A6.61 6.61 0 0 0 16.72 15.78V9.17L16.92 9.27A8.08 8.08 0 0 0 20.5 10.11V6.33L20.39 6.3A4.84 4.84 0 0 1 16.72 1.6H12.94Z"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default TikTokIcon
