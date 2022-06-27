import axios from "axios";

axios.defaults.baseURL =
  process.env.REST_API_BASE_URL ??
  "https://hr-api-dev.azurewebsites.net/api/crud";
