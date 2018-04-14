import fetch from "isomorphic-fetch";
import { USERS_ENDPOINT } from "../../constants/endpoints";

const init = async () => {
  const data = await fetch(USERS_ENDPOINT)
    .then(response => response.json())
    .then(pages => receivePages(pages));
  console.log("OfficeDev ::: onInit ::: data ", data);
  return {
    type: "OFFICE_DEV/INIT",
    data: data || {}
  };
};

export { init };
