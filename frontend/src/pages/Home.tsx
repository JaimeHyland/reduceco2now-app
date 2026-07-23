import { useQuery } from "@tanstack/react-query"
import { AboutUs } from "../components/AboutUs"
import { FocusAreas } from "../components/FocusAreas"
import { Header } from "../components/Header"
import { Vision } from "../components/Vision"
import { WhatWeDo } from "../components/WhatWeDo"
import { fetchComponent } from "../services/services"
import { Loader } from "../components/Loader"

type Props = {
    locale:string
}

export const Home = ({locale}:Props) => {
    const {data, isLoading} = useQuery({
        queryKey: ['home-header'],
        queryFn: async() => fetchComponent("static-headers/a8ipeah0z8qacucwnkoa2l4d", locale)
    })
    return (
        <>
        {isLoading? <Loader>Loading header...</Loader> : <Header title={data.title} subtitle={data.subtitle} button={data.button} />}
        <AboutUs locale={locale} />
        <WhatWeDo locale={locale} />
        <FocusAreas locale={locale} />
        <Vision locale={locale} />
        </>
    )
}

