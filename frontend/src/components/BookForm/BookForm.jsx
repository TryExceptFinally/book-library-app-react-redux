import { useState } from 'react'
import './BookForm.css'

const BookForm = () => {
    const [formData, setFormData] = useState({
        title: '',
        author: '',
    })

    const handleSubmit = (e) => {
        const { title, author } = formData
        e.preventDefault()
        if (title && author) {
            setFormData({ title: '', author: '' })
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
            </form>
        </div>
    )
}

export default BookForm
