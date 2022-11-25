import axios from "../api/axios";

const useRefreshToken = () => {
  const refresh = async () => {
    const { data } = await axios.post("/auth/refreshToken", {
      refreshToken: localStorage.getItem("refreshToken") as string,
    });
    // @ts-ignore
    localStorage.setItem("accessToken", data.accessToken);
    localStorage.setItem("refreshToken", data.refreshToken);
    return data.accessToken;
  };
  return refresh;
};

export default useRefreshToken;
