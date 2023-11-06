import axios, {AxiosResponse} from "axios"

import {baseURl} from "../constants";


export type IRes<T>= Promise<AxiosResponse<T>>


const axiosService = axios.create({baseURL:baseURl})

axiosService.interceptors.request.use(req =>{
    const access = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMmE5MTc4NmExZTE4NjYwMjlkYWIzM2U4M2ZkMTlmNSIsInN1YiI6IjY0YzE2OTNmZGY4NmE4MDBlNzgwMjQ3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.q62hnBj-HMibQwj2KGacdHyqIgc6FWSajOjaJW16Bw4'
    req.headers.Authorization=`Bearer ${access} `
    return req
})


export {
    axiosService
}




