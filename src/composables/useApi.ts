import axios, { AxiosError, Method } from "axios";
import Toast from "@/composables/useToast";
import { HTTP_CODE, NETWORK_ERROR_CODE } from "@/utils/constants";
import { isRef, ref, unref, watchEffect } from "vue";
import i18n from "@/plugins/i18n";

const { t } = i18n.global;

axios.defaults.baseURL = import.meta.env.VITE_API_URL;
axios.defaults.timeout = 15000;

type ApiResponse<T> = {
  code: string;
  message: string;
  items: T | undefined;
};
const defaultHeader = {
  "Content-Type": "application/json",
};

export function useApi<T>(config: {
  url: string;
  method: Method;
  body?: any;
  params?: any;
  headers?: any;
}) {
  const { url, method, body, params, headers = defaultHeader } = config;
  const data = ref();
  const error = ref();

  async function doApi() {
    data.value = null;
    error.value = null;

    const urlValue = unref(url);

    try {
      switch (method) {
        case "GET": {
          const res = await axios.get<ApiResponse<T>>(urlValue, {
            params,
            headers,
          });
          data.value = res;
          break;
        }
        case "POST": {
          const res = await axios.post<ApiResponse<T>>(urlValue, body, {
            params,
            headers,
          });
          data.value = res;
          break;
        }
        case "PATCH": {
          const res = await axios.patch<ApiResponse<T>>(urlValue, body, {
            params,
            headers,
          });
          data.value = res;
          break;
        }
        default:
          break;
      }
    } catch (e: any | AxiosError) {
      if (axios.isAxiosError(e)) {
        const message = (e.response as any)?.data?.message;
        if (message) {
          error.value = message;
        } else {
          error.value = true;
          Toast.error(t("ERROR_MESSAGES.ERROR_OCCURED"));
        }
        if (e.response?.status === HTTP_CODE.BAD_REQUEST) {
          return;
        }

        // Internal server error response
        if (e.response?.status === HTTP_CODE.INTERNAL_SERVER_ERROR) {
          Toast.error(error.value);
        }
        if (e.code === NETWORK_ERROR_CODE) {
          Toast.error(t("ERROR_MESSAGES.ERROR_OCCURED"));
        }
      } else {
        error.value = e.message;
        // Check if its a network error
        if (e.code === NETWORK_ERROR_CODE) {
          Toast.error(t("ERROR_MESSAGES.ERROR_OCCURED"));
        } else {
          Toast.error(e.message);
        }
      }
    }
  }

  if (isRef(url)) {
    watchEffect(doApi);
  } else {
    doApi();
  }

  return { data, error, retry: doApi };
}

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
