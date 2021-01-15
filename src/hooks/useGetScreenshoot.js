import { useQuery } from "react-query";
import Axios from "axios";

const getScreenshoot = async (key) => {
  const axiosInstance = Axios.create({
    baseURL: "https://api.rawg.io/api/",
  });

  const { data } = await axiosInstance.get(
    `games/${key?.queryKey[1]}/screenshots`
  );
  return data;
};

export default function useGetScreenshoot(id) {
  return useQuery(["screenShoot", id], getScreenshoot);
}
