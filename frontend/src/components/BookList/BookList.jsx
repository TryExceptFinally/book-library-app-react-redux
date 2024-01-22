import { useSelector, useDispatch } from 'react-redux'
import { BsBookmarkStar, BsBookmarkStarFill } from 'react-icons/bs'
import {
    deleteBook,
    toggleFavoriteBook,
} from '../../redux/books/actionCreators'
import { selectTitleFilter } from '../../redux/slices/filterSlice'
import './BookList.css'

const BookList = () => {
    const books = useSelector((state) => state.books)
    const titleFilter = useSelector(selectTitleFilter)
    const dispatch = useDispatch()

    const handleDeleteBook = (id) => {
        dispatch(deleteBook(id))
    }

    const handleToggleFavoriteBook = (id) => {
        dispatch(toggleFavoriteBook(id))
    }

    const filteredBooks = books.filter((book) =>
        book.title.toLowerCase().includes(titleFilter.toLowerCase())
    )

    return (
        <div className="app-block book-list">
            <h2>Book List</h2>
            {books.length === 0 ? (
                <p>No books available</p>
            ) : (
                <ul>
                    {filteredBooks.map((book, i) => (
                        <li key={book.id}>
                            <div className="book-info">
                                {++i}. {book.title} by{' '}
                                <strong>{book.author}</strong>
                            </div>
                            <div className="book-actions">
                                <span
                                    onClick={() =>
                                        handleToggleFavoriteBook(book.id)
                                    }
                                >
                                    {book.isFavorite ? (
                                        <BsBookmarkStarFill className="star-icon" />
                                    ) : (
                                        <BsBookmarkStar className="star-icon" />
                                    )}
                                </span>
                                <button
                                    onClick={() => handleDeleteBook(book.id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default BookList
