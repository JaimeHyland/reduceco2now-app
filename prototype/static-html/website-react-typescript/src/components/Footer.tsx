import { Link } from "react-router-dom"

export const Footer = () => {
    return (
        <footer>
            <div className="container">
                <p>© 2026 ReduceCO2Now - Together for a Better Planet</p>

                <p className="footer-links">
                    <Link to="/">Legal notice</Link>
                    <span aria-hidden="true"> | </span>
                    <Link to="/">Privacy policy</Link>
                </p>
            </div>
        </footer>
    )
}