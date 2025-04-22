 export function CheckmarkListItem ({ children }: { children: React.ReactNode }) {
  return (
    <li className='flex items-center space-x-2'>
      <svg className='w-5 h-5 flex-shrink-0 text-green-500' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
      </svg>
      <span>{children}</span>
    </li>
  )
}