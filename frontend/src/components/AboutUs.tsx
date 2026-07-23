import { useQuery } from "@tanstack/react-query";
import { fetchComponent } from "../services/services";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import type { ComponentProp } from "../services/util";


export const AboutUs = ({locale}:ComponentProp) => {
    const {data, isLoading} = useQuery({
        queryKey: ["aboutyus"],
        queryFn: async () => await fetchComponent("about-us", locale)
    });
    if(isLoading){
        return <p>Loading section...</p>
    }
    return (
        <section className="section">
            <div className="container">
                <h2>{data.title}</h2>
                <p className="intro-text">
                    {data.introText}
                </p>
                <BlocksRenderer content={data.content} />
            </div>
        </section>
    )
}