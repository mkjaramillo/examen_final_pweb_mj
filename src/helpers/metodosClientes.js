import axios from "axios";
export const mostrarVuelo=async(origen,destino,fecha)=>{
    return await mostrarVueloAxios(origen,destino,fecha)
} 
export const vueloDisponible=async(numero)=>{
    return await vueloDisponibleAxios(numero)
} 
const mostrarVueloAxios=async(origen,destino,fecha)=>{
    const data = axios.get(`http://localhost:8085/APIAereopuerto/V1/vuelos?origen=${origen}&destino=${destino}&fecha=${fecha}`)
    console.log(data)
    return data
}
const vueloDisponibleAxios=async(numero)=>{
    const data = axios.get(`http://localhost:8085/APIAereopuerto/V1/vuelos/disponibles/${numero}`)
    console.log(data)
    return data
}