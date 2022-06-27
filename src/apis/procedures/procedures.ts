import axios from "axios";

export const getProcedures: () => Promise<Procedure[]> = async () => {
  const res = await axios.get("/procedures");
  return res?.data;
};
