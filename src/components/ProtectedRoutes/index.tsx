import { useDispatch } from "react-redux";
import { useApiCheckoutQuery } from "../../redux/api/authApi";
import { Loading } from "../Loading";
import { Navigate, Outlet } from "react-router-dom";
import { Toastfire } from "../../utils/SweetAlert";
import { setUserData } from "../../redux/slice/authSlice";
import { useEffect } from "react";

const ProtectedRoutes=()=>{
  const dispatch=useDispatch();
  const cookieToken=(document.cookie
  .split("; ")
  .find((row) => row.startsWith("token="))
  ?.split("=")[1]);
  const {data, isLoading, isSuccess, isError}=useApiCheckoutQuery(cookieToken)
  useEffect(() => {
    if (data && data.nickname) {
      const { nickname } = data;
      Toastfire({ icon: "success", title: `歡迎 ${nickname}` });
      dispatch(setUserData({ nickname, cookieToken }));
    }
  }, [data, dispatch, cookieToken]);
  
  return(
    <>
    {isLoading && <Loading />}
    {isSuccess && <Outlet/>}
    {isError && <Navigate to={"/"} />}
    </>
  )
}
export default ProtectedRoutes;