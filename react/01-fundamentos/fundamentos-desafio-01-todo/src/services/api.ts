import axios from "axios";

export const api = axios.create({
    baseURL: "https://api-todo-ten.vercel.app/"
})