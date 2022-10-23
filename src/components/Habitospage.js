import styled from "styled-components"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { CustomerContext } from "../contexts/customer"
import { useContext, useEffect, useState } from "react"
import axios from "axios"

export default function Habitos (){

    const { token } = useContext(CustomerContext)

    const [habitos, setHabitos] = useState([])

    useEffect(() => {
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        const promisse = axios.get(URL, config)

        promisse.then((res) => {
            console.log("dados" + res)
        })

        promisse.catch((err) => {
            console.log(err.response.data.message)
        })
    }, [])
    


    return(
        <Main>
            <Navbar />
            <AddHabito>
                <p>Meus hábitos</p>
                <button>+</button>
            </AddHabito>
            <HabitosList>

            </HabitosList>
            <Footer />
        </Main>
    )
}

const Main = styled.div`
width: 100%;
height: 700px;
background-color: white;
margin: auto;
display: flex;
flex-direction: column;
align-items: center;
padding: 0px 15px 0px 15px;
box-sizing: border-box;
position: relative;
background-color: #E5E5E5;
`
const HabitosList = styled.div`
width: 100%;
height: auto;
background-color: white;
margin: auto;
display: flex;
flex-direction: column;
align-items: center;
`
const AddHabito = styled.div`
margin-top: 70px;
width: 100%;
height: 60px;
display: flex;
justify-content: space-between;
align-items: center;


font-family: 'Lexend Deca', sans-serif;
    button{
        width: 40px;
        height: 35px;
        background-color: #52B6FF;
        font-size: 27px;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 4.64px;
        border: none;
        :hover{
            font-size: 33px;
        }
    }
    p{
        color: #126BA5;
        font-size: 23px;
    }
`