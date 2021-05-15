import { useState, useEffect } from "react";
import JsonApi from "../api/jsonplaceholder";
const useResource = (resource) => {
  const [resourceList, setResourceList] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await JsonApi.get(resource);
      setResourceList(response.data);
      console.log(response);
    }
    fetchData();
  }, [resource]);

  return resourceList;
};

export default useResource;
