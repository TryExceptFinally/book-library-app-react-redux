import { ToastContainer, toast } from 'react-toastify'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { clearError, selectErrorMessage } from '../../redux/slices/errorSlice'
import 'react-toastify/dist/ReactToastify.css'

const Error = () => {
    const errorMessage = useSelector(selectErrorMessage)
    const dispatch = useDispatch()

    useEffect(() => {
        if (errorMessage) {
            toast.error(errorMessage)
            dispatch(clearError())
        }
    }, [errorMessage, dispatch])

    return <ToastContainer position="top-right" autoClose={2000} />
}

export default Error
