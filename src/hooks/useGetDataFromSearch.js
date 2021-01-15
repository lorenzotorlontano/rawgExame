import { useQuery } from "react-query";
import Axios from "axios";

const getDataFromSearch = async (key) => {
  const axiosInstance = Axios.create({
    baseURL: "https://api.rawg.io/api/",
  });
  const { data } = await axiosInstance.get(`games?search=${key?.queryKey[1]}`);
  return data;
};

export default function useGetDataFromSearch(id) {
  return useQuery(["dataFromSearch", id], getDataFromSearch);
}
