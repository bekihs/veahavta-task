export const PageHeader = ({ children }: { children: string }) => {
  return (
    <>
      <style jsx global>
        {`
          h1.text-xl {
            font-style: normal;
            font-weight: 700;
            max-width: 50%;
            font-size: 82px;
            line-height: 107px;
            text-align: center;
            margin: 0 auto;
          }
        `}
      </style>
      <h1 className="font-bold text-xl">{children}</h1>
    </>
  )
}
