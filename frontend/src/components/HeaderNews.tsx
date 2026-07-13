type Props = {
    title: string,
    poster: string
}



export const HeaderNews = ({ title, poster }: Props) => {
    const style: React.CSSProperties = {
        background: `linear-gradient(135deg, rgba(5, 5, 5, 0.94) 0%, rgba(15, 23, 42, 0.92) 50%, rgba(2, 44, 34, 0.94) 100%), url('${poster}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        color: "white",
        textAlign: "center",
        padding: "160px 24px 120px",
        position: "relative",
        overflow: "hidden"
    }
    return (
        <header className="hero" style={style}>
            <div className="container">
                <h1>{title}</h1>
            </div>
        </header>
    )
}