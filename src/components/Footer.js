import styled from "styled-components"
import { Link } from "react-router-dom"

export default function Footer (){
    return(
        <Main>
            <Link to="/habitos">
                <p>Hábitos</p>
            </Link>
            <Link to="/hoje">
                <BotaoHoje>
                    Hoje
                </BotaoHoje>
            </Link>
            <Link to="/historico">
                <p>Histórico</p>
            </Link>  
           
        </Main>
    )
}

const Main = styled.div`
position: fixed;
bottom: 0px;
left: 0px;
right: 0px;
display: flex;
height: 70px;
background-color: #ffffff;
justify-content: space-between;
align-items: center;
box-sizing: border-box;
padding: 0px 20px 0px 20px;
font-family: 'Lexend Deca', sans-serif;
    p{
        color: #52B6FF;
        font-size: 18px;
    }
    a{
        font-style: none;
        text-decoration: none;
    }
`


const BotaoHoje = styled.div`
height: 91px;
width: 91px;
color: white;
background-color: #52B6FF;
border-radius: 50%;
position: absolute;
left: 40%;
right: 40%;
bottom: 10px;
display: flex;
justify-content: center;
align-items: center;
font-weight: bold;
font-size: 22px;
`
