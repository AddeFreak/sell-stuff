import { useEffect, useState } from 'react'

export default function useForm(initialState = {}) {
    const [formData, setFormData] = useState(initialState)
 const initialValues = Object.values(initialState).join('')
   useEffect(() => {
        setFormData(initialState)
    }, [initialValues]) 
   

    const handleInputChange = (e) => {
        let { value, name, type } = e.target
        if (type === 'number') {
            value = parseInt(value)
        }
        if (type === 'file') {
            value = e.target.files[0]
        }
        setFormData({ ...formData, [name]: value })
    }
    
    const resetForm = () => {
        setFormData(initialState)
    }
    return { formData, handleInputChange, resetForm}
}
