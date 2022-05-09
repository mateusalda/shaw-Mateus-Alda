import { useNavigate } from "react-router-dom"
import { goBack, goToApplicationFormPage } from "../routes/coordinates"

const ListTripPage = () => {
    const navigate = useNavigate()
    return(
        <div>
            <h1>Trips List</h1>
            <button onClick={() => goBack(navigate)} >Voltar</button>
            <button onClick={() => goToApplicationFormPage(navigate)} >Inscrever-se</button>
        </div>
    )
}

export default ListTripPage