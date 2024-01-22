import * as at from './actionTypes'

export const addBook = (newBook) => {
    return {
        type: at.ADD_BOOK,
        payload: newBook,
    }
}

export const deleteBook = (id) => {
    return {
        type: at.DELETE_BOOK,
        payload: id,
    }
}
