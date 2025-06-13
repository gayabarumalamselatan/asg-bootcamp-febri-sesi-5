import { Fragment } from 'react'
import Content from './Layout/Content'
import Navbar from './Layout/Navbar'
import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Fragment>
        <Navbar />
        <Content />
      </Fragment>
    </BrowserRouter>
  )  
}

export default App
