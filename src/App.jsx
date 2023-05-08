import React, { PureComponent } from 'react'
import Home from '@/views/Home'

export class App extends PureComponent {
  render() {
    return (
      <div>
        <div className="red">header</div>
        <div className="content">
          <Home/>

        </div>
        <div className="">footer</div>
      </div>
    )
  }
}

export default App