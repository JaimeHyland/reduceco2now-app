import { AboutUs } from "../components/AboutUs"
import { FocusAreas } from "../components/FocusAreas"
import { Header } from "../components/Header"
import { Vision } from "../components/Vision"
import { WhatWeDo } from "../components/WhatWeDo"

export const Home = () => {
    return (
        <>
        <Header title="Together for a Better Planet" subtitle="Building a healthier, more sustainable future for generations to come" learnMore="/concecuences" />
        <AboutUs />
        <WhatWeDo />
        <FocusAreas />
        <Vision />
        </>
    )
}

