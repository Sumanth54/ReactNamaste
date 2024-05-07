import { useEffect, useState } from "react";
import { Res_ID_API } from "./constants";

const useRestatuantfetch = (resid) => {
  const [menuData, setMenuData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(Res_ID_API + resid);
    const json = await data.json();
    setMenuData(json.data);
  };

  return menuData;
};

export default useRestatuantfetch;
