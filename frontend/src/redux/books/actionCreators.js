import * as at from './actionTypes'
import { v4 as uuidv4 } from 'uuid'

export const addBook = (newBook) => {
    return {
        type: at.ADD_BOOK,
        payload: { id: uuidv4(), isFavorite: false, ...newBook },
    }
}

export const deleteBook = (id) => {
    return {
        type: at.DELETE_BOOK,
        payload: id,
    }
}

export const toggleFavoriteBook = (id) => {
    return {
        type: at.TOGGLE_FAVORITE,
        payload: id,
    }
}
