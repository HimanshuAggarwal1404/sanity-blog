import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Homepage from "./pages/Homepage"
import Blog from "./pages/Blog"
import SinglePost from "./pages/Singlepost"
import Error from "./pages/Error"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/"  Component={Homepage} exact/>
        <Route path="/blog/:slug" Component={SinglePost}/>
        <Route path="/blog" Component={Blog}/>
        <Route path="*" Component={Error}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App