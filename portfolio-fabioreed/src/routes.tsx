import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import { UserProvider } from "./providers/UserContext"
import Projects from "./pages/Projects"
import AboutMe from "./pages/AboutMe"

export const MyRoutes = () => {
  return (
    <UserProvider>
      <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/projects' element={<Projects />} />
          <Route path='/about' element={ <AboutMe /> } />
      </Routes>
    </UserProvider>
  )
}