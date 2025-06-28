import axios from "axios";

const API_KEY = "50916359-7c7a99fa8a6a82229a5bc5a39";

const apiUrl = `https://pixabay.com/api/?key=${API_KEY}`;

const formatUrl = (params: any) => {
  let url = `${apiUrl}&per_page=25&safesearch=true&editors_choice=true`;
  if (!params) return url;
  const paramKeys = Object.keys(params);
  paramKeys.forEach((key) => {
    const value = key === "q" ? encodeURIComponent(params[key]) : params[key];
    url += `&${key}=${value}`;
  });

  console.log("Final URL =>", url);
  return url;
};

export const apiCall = async (params: any) => {
  try {
    const response = await axios.get(formatUrl(params));
    const { data } = response;
    return { success: true, data };
  } catch (error: any) {
    console.error("API call failed, error:", error.message);
    return { success: false, msg: error.message };
  }
};
