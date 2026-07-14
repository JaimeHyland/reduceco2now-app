import { Link, useLocation } from "react-router-dom"

type Button = {
    text: string
    path: string
}

type Props = {
    title: string
    subtitle:string
    button?:Button
}

export const Header = ({title, subtitle, button}:Props) => {
    const location = useLocation()
    const lang = location.pathname.split("/")[1];
    return (
        <header className="hero">
            <div className="container">
                <h1>{title}</h1>
                <p className="hero-subtitle">{subtitle}</p>
                {
                    button && <Link to={`/${lang}/${button.path}`} className="btn">{button.text}</Link>
                }
            </div>
        </header>
    )
}