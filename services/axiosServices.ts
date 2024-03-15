import api from "../utils/api";

export async function fetchData(path: string) {
  try {
    const response = await api.get(path);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export async function postData(path: string, data: any) {
  try {
    const response = await api.post(path, data);
    return response.data;
  } catch (error) {
    console.error("Error posting data:", error);
    throw error;
  }
}
