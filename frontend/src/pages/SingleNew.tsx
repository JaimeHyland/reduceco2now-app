import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom"
import { fetchComponent, SERVER } from "../services/services";
import { Loader } from "../components/Loader";
import { HeaderNews } from "../components/HeaderNews";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

type Props = {
    locale:string
}


export const SingleNew = ({locale}:Props) => {
    const {id} = useParams();
    const {data, isLoading} = useQuery({
        queryKey: ['single-news'],
        queryFn: async () => fetchComponent(`news-posts/${id}`, locale)
    });

    if(isLoading) {
        return <Loader>Loading...</Loader>
    }
    console.log(`${SERVER}${data.poster.formats.medium.url}`);
    return (
        <>
        <HeaderNews title={data.title} poster={`${SERVER}${data.poster.formats.medium.url}`} />
        <div className="container">
            <BlocksRenderer content={data.content} />
        </div>
        </>
    )
}

//crear un componente de react llamado header news que utilice el poster