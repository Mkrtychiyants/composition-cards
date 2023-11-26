import React from 'react'


interface IWidgetProps {
  children: React.ReactNode
}


export const CardWidget = ({children}:IWidgetProps) => {

  return (
    <div className="container">
      {children}      
    </div>
   
  )
}
