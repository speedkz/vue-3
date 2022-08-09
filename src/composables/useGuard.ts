import { routes } from "@/router";
import store from "@/store";

export enum Guard {
  AUTH = "auth",
  NOT_AUTH = "not_auth",
  RESET_PASSWORD = "RESET_PASSWORD",
}
export function useGuard(guard: Guard) {
  const isLoged = store.state.persistUser.user.token;
  switch (guard) {
    case Guard.NOT_AUTH:
      if (!isLoged) {
        return null;
      }
      return { name: routes.home.name };
    case Guard.AUTH:
      if (isLoged) {
        return null;
      }
      return { name: routes.login.name };
    default:
      return { name: routes.login.name };
  }
}
