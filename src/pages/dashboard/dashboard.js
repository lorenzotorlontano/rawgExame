import React, { useEffect, useState } from "react";
import WrapperDashboard from "../../components/WrapperDashboard/WrapperDashboard";
import useGetGames from "../../hooks/useGetGames";

function Dashboard() {
  const [value, setValue] = useState("");

  const { data: games, isSuccess } = useGetGames(value);

  useEffect(() => {}, [isSuccess, value]);

  return (
    <WrapperDashboard
      setValue={setValue}
      value={value}
      data={games}
      isSuccess={isSuccess}
    />
  );
}

export default Dashboard;
