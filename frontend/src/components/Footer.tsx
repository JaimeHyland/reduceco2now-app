import { Link } from "react-router-dom"
import { useQuery } from "@tanstack/react-query";
import { fetchComponent } from "../services/services";




export const Footer = () => {

    const {data, isLoading} = useQuery({
        queryKey: ['footer'],
        queryFn: async () => {
            return await fetchComponent("footer");
        }
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