import axios from 'axios'

const http = axios.create({
    baseURL: "https://api-madeibras.up.railway.app" || "http://localhost:7327"
})

http.interceptors.request.use(function (config) {
    try{
        const token = sessionStorage.getItem('token')
        if(token && config.headers){
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    }catch(err){
        return Promise.reject(err)
    }
})

export default http