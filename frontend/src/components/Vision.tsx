import { useQuery } from "@tanstack/react-query"
import { fetchComponent } from "../services/services"
import { Loader } from "./Loader"
import { BlocksRenderer } from "@strapi/blocks-react-renderer"

export const Vision = () => {
    const {data, isLoading} = useQuery({
        queryKey: ["visiton"],
        queryFn: async () => fetchComponent("vision")
    })
    if(isLoading){
        return <Loader>Loading section...</Loader>
    }
    return (
        <section className="section dark">
            <div className="container">
                <h2>{data.title}</h2>
                <div className="vision-box">
                    <BlocksRenderer content={data.content} />
                    <div className="vision-cta">
                        {data.callToAction}
                    </div>
                </div>
            </div>
        </section>
    )
}