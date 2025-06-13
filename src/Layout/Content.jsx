import { Fragment } from "react"
import { Route, Routes } from "react-router-dom"
import Home from "../Pages/Home"
import Clubs from "../Pages/Clubs"
import About from "../Pages/About"
import ClubDetail from "../Pages/ClubDetail"
import NotFound from "../Pages/NotFound"

const Content = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/clubs" element={<Clubs/>}/>
        <Route path="/clubs/:clubId" element={<ClubDetail />} />
        <Route path="/about" element={<About/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Fragment>
  )
}

export default Content