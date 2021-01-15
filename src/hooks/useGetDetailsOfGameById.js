import { useQuery } from "react-query";
import Axios from "axios";

const getDetailsOfGameById = async (key) => {
  const axiosInstance = Axios.create({
    baseURL: "https://api.rawg.io/api/",
  });

  const { data } = await axiosInstance.get(`games/${key?.queryKey[1]}`);
  return data;
};

export default function useGetDetailsOfGameById(id) {
  return useQuery(["detailsOfGameById", id], getDetailsOfGameById);
}
