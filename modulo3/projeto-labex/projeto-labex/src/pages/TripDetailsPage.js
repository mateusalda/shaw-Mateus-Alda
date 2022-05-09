import { useProtectedPage } from "../hooks/useProtectedPage"


const TripDetailsPage = () => {
    useProtectedPage()

    return(
        <div>
            <h1>TripDetailsPage</h1>
        </div>
    )
}

export default TripDetailsPage