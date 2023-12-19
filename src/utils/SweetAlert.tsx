import Swal,{ SweetAlertIcon } from "sweetalert2"

export const Swalfire=({ icon, title, text, status, timer }: SwalConfig)=>{
  Swal.fire({
      icon,
      title,
      text,
      showConfirmButton: status,
      timer,
  });
}

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 1000,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer);
    toast.addEventListener('mouseleave', Swal.resumeTimer);
  }
});

export const Toastfire=({icon,title}:ToastConfig)=>{
  Toast.fire({
    icon,
    title
  })
}

interface SwalConfig{
  icon:SweetAlertIcon;
  title:string;
  text:string;
  status:boolean;
  timer:number;
}
interface ToastConfig{
  icon:SweetAlertIcon;
  title:string;
}