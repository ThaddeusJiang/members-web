import axios from "axios";

export const getTodos: () => Promise<Todo[]> = async () => {
  const res = await axios.get("/todos");
  return res?.data;
};
