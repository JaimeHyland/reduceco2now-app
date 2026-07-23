import { useQuery } from "@tanstack/react-query"
import { Header } from "../components/Header"
import { fetchComponent } from "../services/services"
import { Loader } from "../components/Loader";
import { SystemView } from "../components/SystemView";
import type { ComponentProp } from "../services/util";



export const FourLevers = ({locale}:ComponentProp) => {
    const {data, isLoading} = useQuery({
        queryKey: ["levers-header"],
        queryFn: async() => fetchComponent("static-headers/rctglwfx8cyxprbnzhd07374", locale)
    });

    return (
        <>
            {isLoading? <Loader>Loading header...</Loader> : <Header button={data.button} title={data.title} subtitle={data.subtitle} />}
            <SystemView locale={locale} />
            <section className="section dark">
                <div className="container">
                    <div className="lever-card">
                        <div className="lever-number">1</div>
                        <h2>Increase Fossil Fuel Prices</h2>
                        <p className="lead">The fastest way to reduce demand is to change economics</p>
                        <ul className="list">
                            <li>Markets respond to prices.</li>
                            <li>Higher fossil fuel prices encourage: efficiency, innovation, substitution, electrification</li>
                        </ul>
                        <div className="highlight-stat">
                            When pollution is free, we get more pollution
                        </div>
                        <p className="status">Status: ongoing thanks to President Trump</p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="lever-card">
                        <div className="lever-number">2</div>
                        <h2>Return Carbon to the Ground</h2>
                        <p className="lead">We took carbon from the ground. We need to put Carbon back!</p>
                        <ul className="list">
                            <li>Fossil Fuels are ancient stored Biomass</li>
                            <li>Humanity extracted and burned this carbon</li>
                            <li>Long term climate stabilization requires large-scale carbon storage</li>
                            <li>The atmosphere cannot remain the world's carbon dump</li>
                        </ul>

                        <div className="sub-section">
                            <h3>Biomass Burial</h3>
                            <p>Dead Plants can become Carbon Storage</p>
                            <ul className="list">
                                <li>Biomass naturally captures atmospheric CO₂ through photosynthesis.</li>
                                <li>Preventing decomposition prevents most of that carbon from returning to the atmosphere</li>
                                <li>Photosynthesis is already available global carbon capture technology!</li>
                            </ul>
                            <p className="status">Status: needs to be done on global scale</p>
                        </div>

                        <div className="sub-section">
                            <h3>Biomass Burial for long term Storage</h3>
                            <p className="sub-lead">Very Simple - Low Tech</p>
                            <ul className="list">
                                <li>1t of dry wood contains ca. 0.5t Carbon equivalent to 1.8 t of CO₂</li>
                                <li>Wood Density Redwood 450 kg/m³ to Teak 1080 kg/m³ → 1t of CO₂ is ca. 1 cubic meter dry wood</li>
                                <li>800 million people earn less than 100€ per month</li>
                                <li>Carbon Credits are priced above &gt;50€ in the EUROPE</li>
                            </ul>
                            <p>Imagine unskilled workers in low income countries around the globe could bury dead wood and get paid for that!</p>
                            <div className="highlight-stat">Ebay for Carbon Credits</div>
                        </div>

                        <div className="sub-section">
                            <h3>Liquid Biomass Storage</h3>
                            <p>Leaves, grass and agricultural residues can also become carbon storage</p>
                            <ul className="list">
                                <li>Instead of allowing biomass to decompose, carbon-rich biological material can be stored in stable forms.</li>
                                <li>We just need to pump it back into the ground.</li>
                                <li>The technology is already available</li>
                            </ul>
                            <p>Nature captures carbon. We need systems that keep it captured.</p>
                            <p className="status">Status: needs to be done on global scale</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section dark">
                <div className="container">
                    <div className="lever-card">
                        <div className="lever-number">3</div>
                        <h2>Reforest the Planet</h2>
                        <p className="lead">Trees are Climate Infrastructure</p>
                        <p className="lead-2">Forest:</p>
                        <ul className="list">
                            <li>Capture Carbon</li>
                            <li>Cool local Climate</li>
                            <li>Improve water cycles</li>
                            <li>Protect Biodiversity</li>
                        </ul>
                        <div className="highlight-stat">
                            A forest is a carbon removal system powered by sunlight.
                        </div>
                        <p className="status">Status: started e.g. in China</p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="lever-card">
                        <div className="lever-number">4</div>
                        <h2>Food and Diet</h2>
                        <p className="lead">What we eat determines how much land humanity uses.</p>
                        <ul className="list">
                            <li>Food production uses roughly half of the worlds habitable land.</li>
                            <li>Diet choices influence: Land requirements, Methane Emissions, Deforestation pressure</li>
                        </ul>
                        <div className="highlight-stat">
                            The climate impact of food is largely a land-use problem
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}