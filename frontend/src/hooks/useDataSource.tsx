import axios from "axios";

const useDataSource = async (url: string) => {
  await axios
    .get(url)
    .then((response) => {
      return response;
    })
    .catch((error) => console.log(error));
};

export default useDataSource;
