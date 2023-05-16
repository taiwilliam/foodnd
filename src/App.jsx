import React, { memo } from 'react'
import { useRoutes } from "react-router-dom"
import routes from '@/router'

import BaseHeader from "@/components/Layouts/Headers/BaseHeader"
import BaseFooter from "@/components/Layouts/Footers/BaseFooter"
import BaseAlert from '@/components/Alert/BaseAlert'

const App = memo(() => {
  return (
    <div>
      <BaseHeader/>
      <div className="content">
        { useRoutes(routes) }
      </div>
      <BaseFooter/>
      <BaseAlert/>
    </div>
  )
})

export default App