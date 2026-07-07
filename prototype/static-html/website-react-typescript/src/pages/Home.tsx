import { useQuery } from "@tanstack/react-query"
import { AboutUs } from "../components/AboutUs"
import { FocusAreas } from "../components/FocusAreas"
import { Header } from "../components/Header"
import { Vision } from "../components/Vision"
import { WhatWeDo } from "../components/WhatWeDo"
import { fetchComponent } from "../services/services"
import { Loader } from "../components/Loader"

export const Home = () => {
    const {data, isLoading} = useQuery({
        queryKey: ['home-header'],
        queryFn: async() => fetchComponent("static-headers/hvofye4twqau617utub2y67t")
    })
    return (
        <>
        {isLoading? <Loader>Loading header...</Loader> : <Header title={data.title} subtitle={data.subtitle} button={data.button} />}
        <AboutUs />
        <WhatWeDo />
        <FocusAreas />
        <Vision />
        </>
    )
}

