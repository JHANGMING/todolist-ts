
import { Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import LogIn from "./components/Login";
import SignIn from "./components/SignIn";
import NotFound from "./components/NotFound";
function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<LogIn />}/>
        <Route path="sign" element={<SignIn />}/>
      </Route>
      <Route path="*" element={<NotFound/>}/>
  </Routes>
    </>
  )
}

export default App
