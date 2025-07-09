const API_URL = "https://pokemon-api-ecru-eta.vercel.app";

export const request = async (startIdx, type, sortBy, searchWord) => {
  try {
    let url = `${API_URL}`;
    if (type && type !== "All") {
      url += `${type}?start=${startIdx}`;
    
    } else {
      url += `?start=${startIdx}`;
    }
    if (sortBy) {
      url += `&sort=${sortBy}`;
    }
    if (searchWord) {
      url += `&search=${searchWord}`;
    }

    const response = await fetch(url);
    if (response) {
      let data = await response.json();
      return data.data;
    }
  } catch (err) {
    console.log(err);
  }
};
