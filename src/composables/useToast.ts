import { useToast } from "vue-toastification";
import { POSITION } from "vue-toastification";

const toast = useToast();
const option = {
  position: POSITION.TOP_RIGHT,
  timeout: 5000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: true,
  closeButton: "button",
  icon: true,
  rtl: false,
};
const Toast = {
  success: (message: string) => toast.success(message, option),
  error: (message: string) => toast.error(message, option),
};
export default Toast;
