import { Link } from "react-router-dom"
import { useQuery } from "@tanstack/react-query";
import { fetchComponent } from "../services/services";
import type { ComponentProp } from "../services/util";




export const Footer = ({locale}:ComponentProp) => {

    const {data, isLoading} = useQuery({
        queryKey: ['footer'],
        queryFn: async () => {
            return await fetchComponent("footer", locale);
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