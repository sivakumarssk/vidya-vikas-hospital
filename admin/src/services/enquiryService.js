import api from "./api";

export const getEnquiries =
  async () => {

    const response =
      await api.get(
        "/enquiries"
      );

    return response.data;
};