import { axiosInstance } from "@/plugins/axiosPlugin";

export const getUsers = async () => {
  return axiosInstance.get("/users");
};
