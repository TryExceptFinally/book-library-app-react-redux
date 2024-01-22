import * as at from './actionTypes'
import { v4 as uuidv4 } from 'uuid'

export const addBook = (newBook) => {
    return {
        type: at.ADD_BOOK,
        payload: { id: uuidv4(), ...newBook },
    }
}

export const deleteBook = (id) => {
    return {
        type: at.DELETE_BOOK,
        payload: id,
    }
}
