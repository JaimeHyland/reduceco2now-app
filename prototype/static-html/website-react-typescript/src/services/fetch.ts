import axios from "axios"

const API:string = import.meta.env.VITE_API_BASE as string;

export const fetchComponent = async(path:string) => {
    const res = await axios.get(`${API}/${path}`, {
        params: {
            populate: '*'
        }
    });
    return res.data.data;
}