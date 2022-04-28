import { useProtectedPage } from "../hooks/useProtectedPage"


const CreateTripPage = () => {
    useProtectedPage()
    return(
        <div>
            <h1>CreateTripPage</h1>
        </div>
    )
}

export default CreateTripPage