import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import PropDetails from "./propertyDetails/PROPERTYdEATAIL"
import { ProductProvider } from "./data/ProductContext"
import SmoothScrolling from "./Pages/smoothscroll"
function App() {
  return (
    <ProductProvider >
      <SmoothScrolling>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/DetailsProperty/:id" element= {< PropDetails/>}/>
      </Routes>
    </Router>
    </SmoothScrolling>
    </ProductProvider>
  )
}
export default App
