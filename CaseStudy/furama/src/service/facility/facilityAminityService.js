import request from '../http/http'
 const listAll = () => {
    return request.get('/aminity')
 }

 export const facilityAminityService = {
    listAll
 }