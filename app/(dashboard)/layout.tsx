

import SideBar from "@/components/Sidebar"
import React from "react"

const layout = ({children}:{children:React.PropsWithChildren}) => {
  return (
    <main className="grid lg:grid-cols-5">
      {/* first-col hide on samll screen  */}
      <div className="hidden lg:block lg:col-span-1 lg:min-h-screen" >
          <SideBar />

      </div>
  

      {/* second-col hide drop on big screen  */}

      {children}
    
    </main>
  )
}

export default layout