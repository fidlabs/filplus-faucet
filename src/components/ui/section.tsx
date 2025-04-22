import { cn } from '@/lib/utils'

type SectionVariant = 'highlight' | 'cta'

type SectionProps = {
  children: React.ReactNode
  header: string 
  variant?: SectionVariant
  className?: string
}

export function Section ({ 
  children, 
  header, 
  variant, 
  className, 
  }: SectionProps) {
    
  const variantStyles = {
    highlight: 'bg-gray-50 rounded-xl p-8',
    cta: 'bg-blue-50 text-center rounded-xl p-8'
  }

  return (
    <section
      className={cn(
        'space-y-6 max-w-3xl ',
        variant && variantStyles[variant],
        className
      )}
    >
      <h2 className='text-2xl font-bold text-gray-900'>
      {header}
      </h2>
      {children}
    </section>
  )
}