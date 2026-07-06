import { Link } from "react-router-dom"

type Props = {
    title: string
    subtitle:string
    learnMore?:string
}

export const Header = ({title, subtitle, learnMore}:Props) => {
    return (
        <header className="hero">
            <div className="container">
                <h1>{title}</h1>
                <p className="hero-subtitle">{subtitle}</p>
                {
                    learnMore && <Link to={learnMore} className="btn">Learn More</Link>
                }
            </div>
        </header>
    )
}