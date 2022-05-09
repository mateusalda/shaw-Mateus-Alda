import { useNavigate } from "react-router-dom"
import { goBack } from "../routes/coordinates"


const ApplicationFormPage = () => {
    const navigate = useNavigate()
    return(
        <div>
            <h1>Application Form</h1>
            <button onClick={() => goBack(navigate)} >Voltar</button>
            <button>Enviar</button>
        </div>
    )
}

export default ApplicationFormPage