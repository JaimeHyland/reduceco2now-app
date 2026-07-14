import { useQuery } from "@tanstack/react-query";
import { NavLink } from "react-router-dom";
import { fetchComponent } from "../services/services";
import { Loader } from "./Loader";

type Props = {
    locale: string
}

export function NavBarOption({ locale }: Props) {
    const {data, isLoading} = useQuery({
        queryKey: ['nav-bar-option'],
        queryFn: async() => fetchComponent("nav-bar", locale)
    })
    if(isLoading){
        return <Loader>Loading options...</Loader>
    }
    return (
        <ul className="nav-links">
            <li>
                <NavLink to={`/${data.locale}`}>{data.Home.Text}</NavLink>
            </li>
            <li>
                <NavLink to={`/${data.locale}/levers`}>{data.Levers.Text}</NavLink>
            </li>
            <li>
                <NavLink to={`/${data.locale}/consecuences`}>{data.Concecuences.Text}</NavLink>
            </li>
            <li>
                <NavLink to={`/${data.locale}/news`}>{data.News.Text}</NavLink>
            </li>
        </ul>
    )
}