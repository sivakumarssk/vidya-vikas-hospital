import api from "./api";

export const loginAdmin =
  async (formData) => {

    const response =
      await api.post(
        "/auth/login",
        formData
      );

    return response.data;
};