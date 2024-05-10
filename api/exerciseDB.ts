import axios from "axios";
import { rapidApikey } from "../constants";

const baseUrl = "https://exercisedb.p.rapidapi.com";

const apiCall = async (url: string, params?: string) => {
  try {
    const options = {
      methode: "GET",
      url,
      params,
      headers: {
        "X-RapidAPI-Key": rapidApikey,
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
      },
    };
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    throw new Error("error fetching the data");
  }
};

export const fetchExercisesByBodyPart = async (bodyPart: any) => {
  let data = await apiCall(baseUrl + `/exercises/bodyPart/${bodyPart}`);
  return data;
};
