import { BrowserRouter, Routes, Route } from "react-router-dom";
import FeedPage from '../pages/FeedPage'
import LoginPage from '../pages/LoginPage'
import SignUpPage from '../pages/SignUpPage'
import PostPage from '../pages/PostPage'

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<FeedPage/>} />
                <Route path='/login' element={<LoginPage/>} />
                <Route path='/signup' element={<SignUpPage/>} />
                <Route path='/post' element={<PostPage/>} />
            </Routes>
        </BrowserRouter>
    )
}