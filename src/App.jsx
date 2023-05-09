import React, { memo } from 'react'
import { useRoutes } from "react-router-dom"
import routes from '@/router'

import Header from "@/layouts/header"
import Footer from "@/layouts/footer"

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