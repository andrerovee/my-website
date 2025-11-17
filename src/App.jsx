import Hero from "./components/Hero";
import { Routes, Route } from "react-router-dom";
import Blog from "./pages/blog_home";


function App() {

  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  )
}

export default App;
