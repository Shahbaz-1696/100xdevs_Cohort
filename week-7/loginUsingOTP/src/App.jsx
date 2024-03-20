import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import GenerateOTP from "./components/GenerateOTP";
import WelcomePage from "./components/WelcomePage";


function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<GenerateOTP />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/welcome" element={<WelcomePage />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
