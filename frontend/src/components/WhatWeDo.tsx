import { useQuery } from "@tanstack/react-query"
import { type Card, type ComponentProp } from "../services/util"
import { fetchComponent } from "../services/services"
import { Loader } from "./Loader";



export const WhatWeDo = ({locale}:ComponentProp) => {
    const {data, isLoading} = useQuery({
        queryKey: ["what-we-do"],
        queryFn: async() => await fetchComponent("card-sets/a6vdqc68yhjbkaqkyebe0rty", locale)
    });
    if(isLoading) {
        return <Loader>Loading section...</Loader>
    }
    return (
        <section className="section">
            <div className="container">
                <h2>{data.title}</h2>
                <p className="intro-text">
                    {data.subtitle}
                </p>
                <div className="grid-4">
                    {
                        data.cards.map((card:Card) => {
                            return (
                                <div key={card.id} className="feature-card">
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