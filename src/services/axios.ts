import Toast from "@/composables/useToast";
import i18n from "@/plugins/i18n";
import { NETWORK_ERROR_CODE } from "@/utils/constants";
import axios from "axios";

const { t } = i18n.global;

axios.defaults.baseURL = import.meta.env.VITE_API_URL;
axios.defaults.timeout = 15000;

axios.interceptors.response.use(
  (response) => response.data,
  (e) => {
    if (axios.isAxiosError(e)) {
      const message = (e.response as any)?.data?.message;
      Toast.error(message);
    } else {
      // Check if its a network error
      if (e.code === NETWORK_ERROR_CODE) {
        Toast.error(t("ERROR_MESSAGES.ERROR_OCCURED"));
      } else {
        Toast.error(e.message);
      }
    }
  }
);
