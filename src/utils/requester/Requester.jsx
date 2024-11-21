import { BASE_URL } from "@utils/Constants/Constants";
import axios from "axios";

export const requester = axios.create({
    baseURL: BASE_URL,
});
