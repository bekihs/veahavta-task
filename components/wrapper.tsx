import { ReactNode } from 'react'

export const Wrapper = ({ children }: { children: ReactNode }) => {
  return <div className="max-w-screen-md">{children}</div>
}

export function WrapperLarge({
  children,
  id,
  className = '',
}: {
  children: React.ReactNode
  className?: string
  id?: string
}) {
  return (
    <section
      id={id}
      className={`md:grid ${className} wrapper max-w-[100vw]  md:py-[6%] md:px-[12%]`}
    >
      {children}
    </section>
  )
}
