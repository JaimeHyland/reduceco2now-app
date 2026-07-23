import {type ComponentProp } from "../services/util"
import en from "../locale/english/static/SystemsView/en.json";
import es from "../locale/spanish/static/SystemsView/es.json";

const i18n = {es, en} as const;
export const SystemView = ({locale}:ComponentProp) => {
    const lang = i18n[locale] ?? i18n["en"];
    return (
        <section className="section">
            <div className="container">
                <h2>{lang.systems_view}</h2>
                <div className="systems-box">
                    <p>{lang.atmospheric_co2_rises_because}<strong>{lang.reason_of_increment}</strong></p>
                    <p>{lang.two_fundamental_levers}</p>
                    <div className="two-levers">
                        <div className="lever-simple">
                            <span className="icon">↓</span>
                            {lang.lever1}
                        </div>
                        <div className="lever-simple">
                            <span className="icon">↑</span>
                            {lang.lever2}
                        </div>
                    </div>
                    <p className="center-text">{lang.conclusion}.</p>
                </div>
            </div>
        </section>
    )
}