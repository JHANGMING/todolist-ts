
import { Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import LogIn from "./components/Login";
import SignIn from "./components/SignIn";
import NotFound from "./components/NotFound";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Todo from "./pages/Todo";
function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<LogIn />}/>
        <Route path="sign" element={<SignIn />}/>
      </Route>
      <Route element={<ProtectedRoutes />}>
        <Route path="todo" element={<Todo />}/>
      </Route>
      <Route path="*" element={<NotFound/>}/>
  </Routes>
    </>
  )
}

export default App
