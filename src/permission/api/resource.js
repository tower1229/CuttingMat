import {
    instance
} from '@/api';

//
export const list = params => {
    return instance.get(`/resources`, {
        params
    })
}

export const add = params => {
    return instance.post(`/resources`, params)
}

export const edit = params => {
    return instance.put(`/resources`, params)
}

export const remove = params => {
    return instance.delete(`/resources`, {
        params
    })
}