type Beer = {
    first_brewed: string,
    attenuation_level: number,
    method: {
        mash_temp: [{
            duration: number,
            temp: {
                unit: string,
                value: number }
        }],
        fermentation: {
            temp: {
                unit: string,
                value: number } },
        twist: string | null },
    target_og: number,
    image_url: string,
    boil_volume: { unit: string, value: number },
    ebc: number,
    description: string,
    target_fg: number,
    srm: number,
    volume: { unit: string, value: number },
    contributed_by: string,
    abv: number,
    food_pairing: string[],
    name: string,
    ph: number,
    tagline: string,
    ingredients: {
        malt: [{
            amount: {unit: string, value: number},
            name: string,
            attribute?: string}, {
            add?: string
        }],
        hops?: [{
            amount: {unit: string, value: number},
            name: string,
            attribute?: string}, {
            add?: string
        }],
        yeast?: string
    }
    id: number,
    ibu: number,
    brewers_tips: string
}

type Action = {
    type: string,
    payload: any
}

export type {
    Beer, Action
}