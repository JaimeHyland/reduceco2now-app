import axios from "axios"

export const API:string = import.meta.env.VITE_API_BASE+"/api" as string;
export const SERVER:string = import.meta.env.VITE_API_BASE as string;

export const fetchComponent = async(path:string, locale?:string) => {
    const res = await axios.get(`${API}/${path}`, {
        params: {
            populate: '*',
            locale
        }
    });
    return res.data.data;
}