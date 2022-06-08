import { useNavigate } from "react-router-dom"
import { useForms } from "../hooks/useForms"
import { goBack } from "../routes/coordinates"


const ApplicationFormPage = () => {
    const navigate = useNavigate()
    const [form, onChange] = useForms({name: '', age: 0, applicationText: '', profession: '', country: '', trip: ''})

    const handleClick = (event) => {
        event.preventDefault()
    }

    return(
        <div>
            <h1>Application Form</h1>
            <form onSubmit={handleClick}>
                <input
                    name='name'
                    value={form.name}
                    onChange={onChange}
                    placeholder="Nome"
                    required
                />
                <input
                    name='age'
                    value={form.age}
                    onChange={onChange}
                    placeholder="Idade"
                    type='number'
                    required
                />
                <input
                    name='applicationText'
                    value={form.applicationText}
                    onChange={onChange}
                    placeholder="Texto de Aplicação"
                    required
                />
                <input
                    name='profession'
                    value={form.profession}
                    onChange={onChange}
                    placeholder="Profissão"
                    required
                />
                <input
                    name='country'
                    value={form.country}
                    onChange={onChange}
                    placeholder="País"
                    required
                />
                <input
                    name='trip'
                    value={form.trip}
                    onChange={onChange}
                    placeholder=""
                    required
                />
                <button>Enviar</button>
            </form>
            <button onClick={() => goBack(navigate)} >Voltar</button>
        </div>
    )
}

export default ApplicationFormPage