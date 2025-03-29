import axios from "axios";
import { restaurants } from "../data";

const restaurantsUrl = restaurants;

export const customFetch = axios.create({
  baseURL: restaurantsUrl,
});
