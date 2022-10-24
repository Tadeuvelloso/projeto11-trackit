import { createContext } from "react";
import { useState } from "react";


export const CustomerContext = createContext()


export const CustomerProvider = ({ children }) => {

    const [imagem, setImagem] = useState("")
    const [token, setToken] = useState("")
    const [bar, setBar] = useState(0)
    const [feito, setFeito] = useState(0)
    const [percentage, setPercentage] = useState(feito)
    return(
        <CustomerContext.Provider 
            value={ {imagem, setImagem, token, setToken, bar, setBar, feito, setFeito, percentage, setPercentage} }>
            {children}
        </CustomerContext.Provider>
    )
}