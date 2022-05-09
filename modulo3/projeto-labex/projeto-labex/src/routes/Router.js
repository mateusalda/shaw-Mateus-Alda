import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import ListTripsPage from '../pages/ListTripsPage'
import TripDetailsPage from '../pages/TripDetailsPage'
import CreateTripPage from '../pages/CreateTripPage'
import AdminHomePage from '../pages/AdminHomePage'
import ApplicationFormPage from '../pages/ApplicationFormPage'
import ErrorPage from '../pages/ErrorPage'

export const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage/>} />
                <Route path='login' element={<LoginPage/>} />
                <Route path='trips/list' element={<ListTripsPage/>} />
                <Route path='trips/application' element={<ApplicationFormPage/>} />
                <Route path='admin/trips/list' element={<AdminHomePage/>} />
                <Route path='admin/trips/create' element={<CreateTripPage/>} />
                <Route path='admin/trips/:id' element={<TripDetailsPage/>} />
                <Route path='*' element={<ErrorPage/>} />
            </Routes>
        </BrowserRouter>
    )
}