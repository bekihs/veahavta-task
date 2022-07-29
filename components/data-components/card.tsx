import { ReactChild } from 'react'

export const Card = ({
  children,
  className = '',
}: {
  children: ReactChild
  className: string
}) => {
  return (
    <>
      <style jsx global>
        {`
          .card {
            background: #ffffff;
            box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
            border-radius: 31px;
          }
        `}
      </style>
      <div className={'card ' + className}> {children}</div>
    </>
  )
}
