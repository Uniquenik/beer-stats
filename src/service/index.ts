import axios from "axios";

export const API_URL = 'https://api.punkapi.com/v2/beers'

export const ENDPOINTS = {
    GET_BEERS: () => `${API_URL}`
}

export const $api = axios.create({
    headers: {
        //'Access-Control-Allow-Credentials': '*',
        // 'Access-Control-Allow-Headers': '*',
    },
    //withCredentials: true
});