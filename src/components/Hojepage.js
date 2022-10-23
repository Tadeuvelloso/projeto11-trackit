import styled from "styled-components"
//import axios from "axios"
import Navbar from "./Navbar"
import Footer from "./Footer"
// import { CustomerContext } from "../contexts/customer"
// import { useContext, useEffect, useState } from "react"
import HabitoHoje from "./Habito"

export default function Hoje () {
    return(
        <Main>
            <Navbar />
            <Dia>
                <h1>Sabado, 23/10</h1>
                <p>Nenhum hábito concluído ainda</p>
            </Dia>
            <HabitosList>
                <HabitoHoje/>
            </HabitosList>
            <Footer />
        </Main>
    )
}

const Main = styled.div`
width: 100%;
height: 700px;
margin: auto;
display: flex;
flex-direction: column;
box-sizing: border-box;
padding: 0px 15px 0px 15px;
align-items: center;
position: relative;
font-family: 'Lexend Deca', sans-serif;
background-color: #E5E5E5;
`

const Dia = styled.div`
margin: 85px 0px 40px;
width: 100%;
    h1{
        font-size: 23px;
        color: #126BA5;
        margin-bottom: 3px;
    }
    p{
        font-size: 18px;
        color: #BABABA;
    }
`

const HabitosList = styled.div`
width: 100%;
height: auto;
flex-direction: column;
`