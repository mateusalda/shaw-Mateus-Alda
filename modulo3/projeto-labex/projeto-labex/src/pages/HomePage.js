import { useNavigate } from "react-router-dom"
import { goToAdminHomePage, goToTripsListPage } from "../routes/coordinates"

const HomePage = () => {
    const navigate = useNavigate()
    return(
        <div>
            <h1>Home</h1>
            <button onClick={() => goToTripsListPage(navigate)} >Viagens</button>
            <button onClick={() => goToAdminHomePage(navigate)} >Admin</button>
        </div>
    )
}

export default HomePage