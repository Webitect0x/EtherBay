import axios from "axios";
import Cookies from "js-cookie";

const GetDataSource = async (url: string) => {
  const res = await axios({
    headers: {
      Authorization: "Bearer " + Cookies.get("jwt-token"),
    },
    withCredentials: true,
    method: "get",
    url: url,
  });

  return res.data;
};

export default GetDataSource;
