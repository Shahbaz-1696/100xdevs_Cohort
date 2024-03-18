import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home, Profile, ColorChanger, ParaGenerator, GithubCard, Login, BirthdayWish } from "./pages";



function App() {

  return (
   <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/color-changer" element={<ColorChanger />} />
        <Route path="/para-generator" element={<ParaGenerator />} />
        <Route path="/github-card" element={<GithubCard />} />
        <Route path="login-otp" element={<Login />} />
        <Route path="/birthday-wish" element={<BirthdayWish />} />
      </Routes>
    </BrowserRouter>
   </div>
  )
}

export default App
