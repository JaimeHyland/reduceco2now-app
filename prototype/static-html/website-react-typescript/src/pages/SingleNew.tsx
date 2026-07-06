import { useParams } from "react-router-dom"

export const SingleNew = () => {
    const {id} = useParams();
    return (
        <>
        {id}
        </>
    )
}