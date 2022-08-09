import { createServer } from "miragejs";

export default function () {
  createServer({
    routes() {
      this.urlPrefix = import.meta.env.VITE_API_URL;
      this.get(`/api/v1/accounts/tmsauth`, () => ({
        items: {
          userName: "tz",
          roleRight: null,
          accessRight: null,
          token: "abc",
        },
      }));
    },
  });
}
