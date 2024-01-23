import axios from 'axios';
export const postAxiosApi = async (endPoint, data) => {
  const config = {
    method: 'post',
    url: endPoint,
    headers: { 'Content-Type': 'application/json' },
    data: data
  };
  try {
    const response = await axios(config);
    return response.data;
  } catch (e) {
    console.log((e) => e.message);
    throw e;
  }
};
