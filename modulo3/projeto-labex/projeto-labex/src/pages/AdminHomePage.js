import axios from "axios"
import { useEffect, useState } from "react"
import { useProtectedPage } from "../hooks/useProtectedPage"


const AdminHomePage = () => {
    const [trips, setTrips] = useState([])
    useProtectedPage()

    useEffect(() => {
        getTrips()
    }, [])

    const getTrips = () => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/mateus-alda-shaw/trips')
        .then((response) => {
            setTrips(response.data.trips)
            console.log(response.data.trips)
        })
        .catch((error) => {
            console.log(error.response);
        })
    }

    const displayTrips = trips.map((trip) => {
        return (
            <p>{trip.name}</p>
        )
    })

    return(
        <div>
            <h1>Admin</h1>
            {displayTrips}
        </div>
    )
}

export default AdminHomePage