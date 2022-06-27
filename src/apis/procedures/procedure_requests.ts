import axios from "axios";

export const getProcedureRequests: () => Promise<
  ProcedureRequest[]
> = async () => {
  const res = await axios.get("/procedure_requests");
  return res?.data;
};
