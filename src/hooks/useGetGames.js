import { useQuery } from "react-query";
import Axios from "axios";

const getGames = async (key) => {
  const axiosInstance = Axios.create({
    baseURL: "https://api.rawg.io/api/",
  });
  const { data } = await axiosInstance.get(
    `games?ordering=${key?.queryKey[1]}`
  );
  return data;
};

export default function useGetGames(id) {
  console.log("value released", id);
  return useQuery(["games", id], getGames);
}
