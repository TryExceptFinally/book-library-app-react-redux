import { v4 as uuidv4 } from 'uuid'

const createBookWithID = (book) => {
    return {
        id: uuidv4(),
        isFavorite: false,
        ...book,
    }
}

export default createBookWithID
