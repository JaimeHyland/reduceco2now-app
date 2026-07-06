
type Props = {
    title : string,
    poster: string,
    alt: string
}

export const NewsCard = ({title, poster, alt}:Props) => {
    return (
        <div>
            <h3>{title}</h3>
            <figure>
                <img src={poster} alt={alt}  />
            </figure>
        </div>
    )
}