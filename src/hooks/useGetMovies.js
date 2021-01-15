import { useQuery } from "react-query";
import Axios from "axios";

const getTrailersById = async (key) => {
  const axiosInstance = Axios.create({
    baseURL: "https://api.rawg.io/api/",
  });
  const { data } = await axiosInstance.get(`games/${key?.queryKey[1]}/movies`);
  return data;
};

export default function useGetTrailersById(id) {
  return useQuery(["trailersById", id], getTrailersById);
}
