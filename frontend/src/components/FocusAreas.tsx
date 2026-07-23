import { useQuery } from "@tanstack/react-query"
import type { Card, ComponentProp } from "../services/util"
import { fetchComponent } from "../services/services"
import { Loader } from "./Loader";

export const FocusAreas = ({locale}:ComponentProp) => {
    const {data, isLoading} = useQuery({
        queryKey: ["focusAreas"],
        queryFn: async() => await fetchComponent('card-sets/y3fu5h2vlbvg9quyc90ub6qj', locale)
    });
    if(isLoading){
        return <Loader>Loading section...</Loader>
    }
    return (
        <section className="section">
            <div className="container">
                <h2>{data.title}</h2>
                <p className="intro-text">
                    {data.subtitle}
                </p>
                <div className="focus-grid">
                    {
                        data.cards.map((card:Card) => {
                            return (
                                <div key={card.id} className="focus-item">
                                    <h3>{card.title}</h3>
                                    <p>{card.content}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}