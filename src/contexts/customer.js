import { createContext } from "react";
import { useState } from "react";


export const CustomerContext = createContext()


export const CustomerProvider = ({ children }) => {

    const [imagem, setImagem] = useState("")
    const [token, setToken] = useState("")

    

    return(
        <CustomerContext.Provider 
            value={ {imagem, setImagem, token, setToken} }>
            {children}
        </CustomerContext.Provider>
    )
}