export const goBack = (navigate) => {
    navigate(-1)
}

export const goToFeedPage = (navigate) => {
    navigate('/')
}

export const goToLoginPage = (navigate) => {
    navigate('/login')
}

export const goToSignUpPage = (navigate) => {
    navigate('/signup')
}

export const goToPostPage = (navigate, post) => {
    navigate(`/post/${post}`)
}