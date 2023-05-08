import React, { memo } from 'react'
import { useRoutes } from "react-router-dom"
import routes from '@/router'

import Header from "@/components/header"
import Footer from "@/components/footer"

const App = memo(() => {
  return (
    <div>
      <Header/>
      <div className="content">
        { useRoutes(routes) }
      </div>
      <Footer/>
    </div>
  )
})

export default App