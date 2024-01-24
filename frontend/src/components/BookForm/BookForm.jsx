import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { FaSpinner } from 'react-icons/fa'
import { addBook, fetchBook } from '../../redux/slices/booksSlice'
import { setError } from '../../redux/slices/errorSlice'
import createBookWithID from '../../utils/createBookWithID'
import booksData from '../../data/books.json'
import './BookForm.css'

const BookForm = () => {
    const [formData, setFormData] = useState({
        title: '',
        author: '',
    })

    const [isLoading, setIsLoading] = useState('')

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (formData.title && formData.author) {
            dispatch(addBook(createBookWithID(formData, 'manual')))
            setFormData({ title: '', author: '' })
        } else {
            dispatch(setError('You must fill title and author!'))
        }
    }

    const handleAddRandomBook = () => {
        const randomIndex = Math.floor(Math.random() * booksData.length)
        dispatch(addBook(createBookWithID(booksData[randomIndex], 'random')))
    }

    const handleAddRandomBookViaAPI = async () => {
        try {
            setIsLoading(true)
            await dispatch(
                fetchBook('http://localhost:4000/random-book-delayed')
            )
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="app-block book-form">
            <h2>Add a New Book</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        value={formData.title}
                        onChange={(e) =>
                            setFormData({ ...formData, title: e.target.value })
                        }
                    />
                </div>
                <div>
                    <label htmlFor="author">Author</label>
                    <input
                        type="text"
                        id="author"
                        value={formData.author}
                        onChange={(e) =>
                            setFormData({ ...formData, author: e.target.value })
                        }
                    />
                </div>
                <button type="submit">Add Book</button>
                <button type="button" onClick={handleAddRandomBook}>
                    Add Random
                </button>
                <button
                    type="button"
                    onClick={handleAddRandomBookViaAPI}
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <>
                            <span>Loading books...</span>
                            <FaSpinner className="spinner" />
                        </>
                    ) : (
                        'Add Random via API'
                    )}
                </button>
            </form>
        </div>
    )
}

export default BookForm
