import { Link } from "react-router-dom"

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
    return (
        <header className="hero">
            <div className="container">
                <h1>{title}</h1>
                <p className="hero-subtitle">{subtitle}</p>
                {
                    button && <Link to={button.path} className="btn">{button.text}</Link>
                }
            </div>
        </header>
    )
}