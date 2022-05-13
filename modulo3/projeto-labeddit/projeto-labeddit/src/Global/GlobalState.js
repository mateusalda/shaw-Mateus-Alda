import React, { useState } from "react"
import GlobalStateContext from './GlobalStateContext'

const GlobalState = (props) => {
    const [post, setPost] = useState({})

    return (
        <GlobalStateContext.Provider value={{post, setPost}}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState