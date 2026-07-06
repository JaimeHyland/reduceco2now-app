import { Link } from "react-router-dom"
import axios from "axios"
import { useQuery } from "@tanstack/react-query";

const API:string = import.meta.env.VITE_API_BASE as string;

const fetchComponent = async() => {
    const res = await axios.get(`${API}/footer`, {
        params: {
            populate: '*'
        }
    });
    return res.data.data;
}

export const Footer = () => {

    const {data, isLoading} = useQuery({
        queryKey: ['footer'],
        queryFn: fetchComponent
    });

    if(isLoading) {
        return <p>Loading footer...</p>
    }
    return (
        <footer>
            <div className="container">
                <p>{data.Title}</p>

                <p className="footer-links">
                    <Link to={data.LegalNotice.to}>{data.LegalNotice.Title}</Link>
                    <span aria-hidden="true"> | </span>
                    <Link to={data.PrivacyPolicy.to}>{data.PrivacyPolicy.Title}</Link>
                </p>
            </div>
        </footer>
    )
}