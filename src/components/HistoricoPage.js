import styled from "styled-components";
import Navbar from "./Navbar"
import Footer from "./Footer"


export default function Historico (){
    return(
        <Main>
            <Navbar/>
            <h1>Histórico</h1>
            <HistoricoList>
            Em breve você poderá ver o histórico dos seus hábitos aqui!
            </HistoricoList>
            <Footer/>
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
box-sizing: border-box;
background-color: #E5E5E5;
padding: 0px 15px 0px 15px;
font-family: 'Lexend Deca', sans-serif;
    h1{
        margin: 85px 0px 20px;
        font-size: 23px;
        color: #126BA5;
    }
`

const HistoricoList = styled.div`
color: #666666;
font-size: 18px;
line-height: 22px;
`