import request from "../config/http";

export const findAll = () => {
    return request.get(`/bookTypes`)
}