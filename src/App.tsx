
import { Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import LogIn from "./components/Login";
function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<LogIn />}/>
      </Route>
  </Routes>
    </>
  )
}

export default App
