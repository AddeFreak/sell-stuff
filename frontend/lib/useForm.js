import { useEffect, useState } from 'react'

export default function useForm(initialState = {}, onSubmit) {
    const [formData, setFormData] = useState(initialState)

    useEffect(() => {
        const stateValue = { initialState }
        setFormData(initialState)
    }, [initialState])
    const stateValue = { initialState }

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
    /*   const handleSubmit = (e) => {
      e.preventDefault()
      onSubmit.console.log(formData)
  } */
    const resetForm = () => {
        setFormData(initialState)
    }
    return { formData, handleInputChange, resetForm, stateValue }
}
