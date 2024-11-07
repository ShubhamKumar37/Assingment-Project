import React from 'react'

const HighLightText = ({children, className}) => {
  return (
    <span className={`md:w-[120px] md:h-[77px] w-[91px] h-[64px] border-[12px] ${className} text-black`}>
        {children}
    </span>
  )
}

export default HighLightText