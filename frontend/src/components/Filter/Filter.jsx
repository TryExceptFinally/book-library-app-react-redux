import { useDispatch, useSelector } from 'react-redux'
import {
    setTitleFilter,
    setAuthorFilter,
    setOnlyFavoriteFilter,
    selectTitleFilter,
    selectAuthorFilter,
    selectOnlyFavoriteFilter,
    resetFilters,
} from '../../redux/slices/filterSlice'
import './Filter.css'

const Filter = () => {
    const dispatch = useDispatch()
    const titleFilter = useSelector(selectTitleFilter)
    const authorFilter = useSelector(selectAuthorFilter)
    const onlyFavoriteFilter = useSelector(selectOnlyFavoriteFilter)

    const handleTitleFilterChange = (title) => {
        dispatch(setTitleFilter(title))
    }

    const handleAuthorFilterChange = (author) => {
        dispatch(setAuthorFilter(author))
    }

    const handleOnlyFavoriteFilterChange = () => {
        dispatch(setOnlyFavoriteFilter())
    }

    const handleResetFilters = () => {
        dispatch(resetFilters())
    }

    return (
        <div className="app-block filter">
            <div className="filter-row">
                <div className="filter-group">
                    <input
                        type="text"
                        placeholder="Filter by title..."
                        value={titleFilter}
                        onChange={(e) =>
                            handleTitleFilterChange(e.target.value)
                        }
                    />
                </div>
                <div className="filter-group">
                    <input
                        type="text"
                        placeholder="Filter by author..."
                        value={authorFilter}
                        onChange={(e) =>
                            handleAuthorFilterChange(e.target.value)
                        }
                    />
                </div>
                <div className="filter-group">
                    <label>
                        <input
                            type="checkbox"
                            id="favorite"
                            checked={onlyFavoriteFilter}
                            onChange={handleOnlyFavoriteFilterChange}
                        />
                        Only Favorite
                    </label>
                </div>
                <button type="button" onClick={handleResetFilters}>
                    Reset filters
                </button>
            </div>
        </div>
    )
}

export default Filter
