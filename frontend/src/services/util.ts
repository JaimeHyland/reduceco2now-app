const SUPORTEDLOCALES = ["es", "en", "fr", "it", "de"] as const;
export type ComponentProp = {
    locale: "en" | "es"
}

export type Card = {
    id:number,
    title:string,
    content:string
}

export type Language = {
    id:number,
    code:string,
    name:string
}
