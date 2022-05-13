import { useState } from "react"


export const useForms = (initialState) => {
    const [form, setForm] = useState(initialState)

    const onChange = (event) => {
        const {name, value} = event.target
        setForm({...form, [name]: value})
    }

    const clean = () => {
        setForm(initialState)
    }

    return [form, onChange, clean]
}