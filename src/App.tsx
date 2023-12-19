
import { Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import LogIn from "./components/Login";
import SignIn from "./components/SignIn";
function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<LogIn />}/>
        <Route path="sign" element={<SignIn />}/>
      </Route>
  </Routes>
    </>
  )
}

export default App
