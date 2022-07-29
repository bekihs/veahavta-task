import themePreval from '@/lib/theme.preval'

export const HomeButton = ({
  className,
  type,
  children,
  ...props
}: {
  className?: string
  type?: string
  children: string
}) => {
  return (
    <>
      <style jsx global>
        {`
          .home-button {
            background: ${themePreval.colors['header-blue']};
            border-radius: 51px;
            font-family: 'Assistant';
            font-style: normal;
            font-weight: 700;
            font-size: 28px;
            line-height: 37px;
            /* identical to box height */
            padding: 10px 30px;
            text-align: center;
          }
        `}
      </style>

      <button className={`home-button  ${className}`}>{children}</button>
    </>
  )
}
