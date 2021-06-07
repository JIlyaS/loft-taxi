import { toast } from 'react-toastify';

export const showToastError = (message) => {
  console.log(message);
  toast.error(message, {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
}