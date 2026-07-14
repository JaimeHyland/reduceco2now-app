import { useQuery } from "@tanstack/react-query"
import { AboutUs } from "../components/AboutUs"
import { FocusAreas } from "../components/FocusAreas"
import { Header } from "../components/Header"
import { Vision } from "../components/Vision"
import { WhatWeDo } from "../components/WhatWeDo"
import { fetchComponent } from "../services/services"
import { Loader } from "../components/Loader"
import { useLocation } from "react-router-dom"

type Props = {
    locale:string
}

export const Home = ({locale}:Props) => {
    const {data, isLoading} = useQuery({
        queryKey: ['home-header'],
        queryFn: async() => fetchComponent("static-headers/hvofye4twqau617utub2y67t", locale)
    })
    const location = useLocation();
    return (
        <>
        {isLoading? <Loader>Loading header...</Loader> : <Header title={data.title} subtitle={data.subtitle} button={data.button} />}
        <AboutUs locale={location.pathname.split("/")[1]} />
        <WhatWeDo />
        <FocusAreas />
        <Vision locale={location.pathname.split("/")[1]} />
        </>
    )
}

