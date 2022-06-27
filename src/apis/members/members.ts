import axios from "axios";

export const getMembers: () => Promise<Member[]> = async () => {
  const res = await axios.get("/members");
  return res?.data;
};
