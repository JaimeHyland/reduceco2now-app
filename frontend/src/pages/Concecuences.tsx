import { useQuery } from "@tanstack/react-query"
import { Header } from "../components/Header"
import { fetchComponent } from "../services/services"
import { Loader } from "../components/Loader";

type Props = {
    locale:string
}

export const Concecuences = ({locale}:Props) => {
    const {data, isLoading} = useQuery({
        queryKey: ["consecuences-header"],
        queryFn: async() => fetchComponent("static-headers/gom24u4p9b70ukym4h9yct6m", locale)
    });
    return(
        <>
        {isLoading? <Loader>Loading header...</Loader>: <Header title={data.title} subtitle={data.subtitle} />}
        <section className="section">
        <div className="container">
            <h2>The Entire Story in One Chart</h2>
            <h3 className="keeling-title">THE KEELING CURVE</h3>
            <div className="stat-card">
                <div className="stat-value">432</div>
                <div className="stat-label">MAY 2026 RECORD (PPM)</div>
            </div>
            <p className="center-text">We are adding roughly <strong>2.5 to 3 ppm every year</strong>.</p>
            <p className="center-text">CO₂ is rising every year. The increase is accelerating.</p>
        </div>
    </section>

    <section className="section dark">
        <div className="container">
            <h2>Global Temperature Record</h2>
            <p className="center-text">As CO₂ rises, Global Temperature rises</p>
            <p className="center-text">CO₂ is rising — Warming increases</p>
            <div className="highlight-box">
                The 10 warmest years ever recorded have all occurred in the last decade.
            </div>
        </div>
    </section>

    <section className="section">
        <div className="container">
            <h2>Observed Impacts Today</h2>
            <div className="impacts-grid">
                <div className="impact">Heat waves</div>
                <div className="impact">Wildfires</div>
                <div className="impact">Flooding</div>
                <div className="impact">Glacier loss</div>
                <div className="impact">Sea level rise</div>
                <div className="impact">Coral Reef dying</div>
            </div>
            <p className="center-text">Climate Change is already measurable</p>
        </div>
    </section>

    <section className="section dark">
        <div className="container">
            <h2>Ice Core Records</h2>
            <p>For 800,000 Years CO₂ stayed between 180 and 300 ppm.</p>
            <p>Natural cycles: Glacial and warm periods shifted over millennia.</p>
            <div className="highlight-box">
                Today: 432 ppm — rising ever faster.
            </div>
        </div>
    </section>

    <section className="section">
        <div className="container">
            <h2>The Source is Well Known</h2>
            <div className="sources">
                <div className="source">Fossil Fuel Emissions</div>
                <div className="source">Industrialization</div>
                <div className="source">Population</div>
                <div className="source">Fossil Fuel Use</div>
            </div>
            <div className="emission-stats">
                <div className="emission-stat">
                    <div className="value">~5</div>
                    <div className="label">1940s (Billion tonnes CO₂/year)</div>
                </div>
                <div className="arrow">→</div>
                <div className="emission-stat">
                    <div className="value">38+</div>
                    <div className="label">Today (Billion tonnes CO₂/year)</div>
                </div>
            </div>
        </div>
    </section>

    <section className="section dark">
        <div className="container">
            <h2>MASS BALANCE</h2>
            <p className="center-text">Human Emissions fully explain the Increase</p>
            <div className="balance-grid">
                <div className="balance-item">
                    <div className="big">~40</div>
                    <div>Humanity emits (billion tonnes)</div>
                </div>
                <div className="balance-item">
                    <div className="big">~20</div>
                    <div>Atmosphere gains (billion tonnes)</div>
                </div>
                <div className="balance-item">
                    <div className="big">~20</div>
                    <div>Absorbed by oceans, forests & soil</div>
                </div>
            </div>
            <p className="center-text">Human emissions are more than sufficient to explain the entire increase.</p>
        </div>
    </section>

    <section className="section">
        <div className="container">
            <h2>Energy Imbalance</h2>
            <p className="center-text">Earth Is Currently gaining Energy faster than it can radiate back to space</p>
            <h3>The Earth's Energy Budget</h3>
            <ul className="list">
                <li>Every second, Earth receives energy from the Sun.</li>
                <li>Normally, the planet radiates the same amount of energy back into space.</li>
                <li>Increasing greenhouse gas concentrations reduce the amount of heat that escapes.</li>
                <li>As a result, more energy enters the climate system than leaves it.</li>
                <li>That excess energy accumulates in the atmosphere, oceans, land, and ice.</li>
            </ul>
            <div className="highlight-box">
                Rising Temperature is the Consequence.<br />
                The Energy Imbalance is the Cause.<br />
                The climate warms until incoming and outgoing energy are balanced again.
            </div>
        </div>
    </section>

    <section className="section dark">
        <div className="container">
            <h2>CO₂ is a LONG-TERM Commitment</h2>
            <p className="center-text">Climate Change is not like turning a heater on and off</p>
            <div className="two-col">
                <div>
                    <h4>CO₂ emitted today:</h4>
                    <ul className="list">
                        <li>Remains partly for centuries</li>
                        <li>Some fraction remains for millennia</li>
                    </ul>
                </div>
                <div>
                    <h4>Even after emissions stop:</h4>
                    <ul className="list">
                        <li>Temperatures stabilize only slowly</li>
                        <li>Oceans keep adjusting</li>
                        <li>Sea Level continues rising</li>
                    </ul>
                </div>
            </div>
            <p className="center-text">Much of the warming persists for centuries even if global emissions are stopped.</p>
        </div>
    </section>

    <section className="section">
        <div className="container">
            <h2>Global Average vs. Human Experience</h2>
            <p className="center-text">Humans do not live in the Global Average</p>
            <div className="earth-split">
                <div className="split-item">
                    <h4>People:</h4>
                    <p>Experience Land Temperature</p>
                    <div className="big-stat">Land areas warm about twice as fast as the global average!</div>
                </div>
                <div className="split-item">
                    <h4>Earth:</h4>
                    <p>70% Ocean • 30% Land</p>
                </div>
            </div>
        </div>
    </section>

    <section className="section dark">
        <div className="container">
            <h2>The Probability Problem</h2>
            <p className="center-text">Climate Predictions are based on 50% Confidence Level</p>
            <div className="highlight-box">
                The 1.5°C and 2°C Targets are based on 50% Probability!<br />
                To be 90% sure the Temperature is nearly Double
            </div>
            <p className="center-text">Pilots do not accept a 50% chance of landing safely.</p>
        </div>
    </section>

    <section className="section">
        <div className="container">
            <h2>Instead of Simulations, Let's Look Back</h2>
            <p className="center-text">Earth's history shows what climates were associated with different CO₂ levels</p>
            <div className="timeline">
                <div className="timeline-item">
                    <div className="year">2100</div>
                    <div className="detail">~700 ppm • Comparable to 30 million years ago</div>
                </div>
                <div className="timeline-item">
                    <div className="year">Today</div>
                    <div className="detail">432 ppm • Last existed &gt;13 million years ago</div>
                </div>
                <div className="timeline-item">
                    <div className="year">66 MYA</div>
                    <div className="detail">Dinosaur extinction</div>
                </div>
            </div>
        </div>
    </section>

    <section className="section dark">
        <div className="container">
            <h2>A Warmer World Means Greater Risks</h2>
            <div className="risks">
                <div className="risk-card">
                    <h3>Mass Migration</h3>
                    <p>Rising sea levels, droughts, crop failures could force hundreds of millions of people to leave their country.</p>
                </div>
                <div className="risk-card">
                    <h3>Competition for Water</h3>
                    <p>Many regions already face water shortages. Tension between countries and regions may increase.</p>
                </div>
                <div className="risk-card">
                    <h3>Economic Disruption</h3>
                    <p>Infrastructure, agriculture, financial systems and supply chain will face increasing pressure from more frequent extreme weather events.</p>
                </div>
            </div>
            <div className="highlight-box">
                Climate Change is not primarily an environmental issue.<br/>
                It is a human, economic, security and humanitarian issue.
            </div>
            <p className="center-text">The question is not whether climate change will affect society.<br/>The question is how much change we are willing to accept.</p>
        </div>
    </section>

    <section className="section">
        <div className="container">
            <h2>So What?</h2>
            <div className="so-what">
                Humanity will survive. The world our Children inherit will be very different.
            </div>
        </div>
    </section>

    <section className="section dark">
        <div className="container">
            <h2>Why Good Intentions Are Not Enough</h2>
            <p className="center-text">Climate Change is a Global Systems Problem</p>
            <p>Many actions are beneficial. But climate change is driven by global carbon flows measured in tens of billions of tonnes per year.</p>
            <p>Solutions must be evaluated by their impact on the global carbon balance.</p>
            <div className="highlight-box">
                A solution that feels good is not necessarily a solution that scales.<br/>
                Even though alternative energy is installed rapidly we constantly find more ways to consume it.
            </div>
            <div className="stat-big">40 Billion Tonnes CO₂ per year and rising — Very little visible effect</div>
        </div>
    </section>
        </>
    )
}