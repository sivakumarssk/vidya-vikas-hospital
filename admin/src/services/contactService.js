import api from "./api";

export const getContacts =
  async () => {

    const response =
      await api.get(
        "/contact"
      );

    return response.data;
};