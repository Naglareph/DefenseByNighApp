import axios from "axios";

export function getProfile() {
  const url =
    "https://api.backendless.com/E55416DD-FE03-C5B2-FFAD-8D09FF26CB00/C9173F67-095A-499D-FF0B-5CD4E3402700/data/profile/C49700C7-DA3C-97E5-FF29-F24890966C00?loadRelations=characters.disciplines%2Ccharacters.skills";

  return {
    type: "GET_PROFILE",
    payload: axios.get(url)
  };
}
