import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useGetDataFromSearch from "../../hooks/useGetDataFromSearch";
import WrapperDashboard from "../../components/WrapperDashboard/WrapperDashboard";
function Search() {
  const { id } = useParams();
  const { data: dataFromSearch, isSuccess } = useGetDataFromSearch(id);

  useEffect(() => {}, [isSuccess, id]);

  return <WrapperDashboard data={dataFromSearch && dataFromSearch} />;
}

export default Search;
