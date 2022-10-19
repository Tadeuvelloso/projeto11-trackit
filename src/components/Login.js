
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../img/logo.png"

export default function Entrar(){
    return(
        <Main>
            <img src={logo} />
            <Formulario>
                <input  type="email"  placeholder="email" required/>
                <input  type="password" placeholder="senha" required />
                <button type="subimit">Entrar</button>
            </Formulario>
            <Link to="/cadastro">Não tem uma conta? Cadastre-se!</Link>
        </Main>
    )
}

const Main = styled.div`
width: 400px;
height: 700px;
background-color: white;
border: 1px solid black;
margin: auto;
display: flex;
flex-direction: column;
align-items: center;

    img{
        margin: 68px 110px;
        width: 180px;
        height: 179px;
    }
    a{
        color: #52B6FF;
        font-size: 14px;
        
    }
`

const Formulario = styled.form`
display: flex;
flex-direction: column;
font-family: 'Lexend Deca', sans-serif;
    input{
        width: 303px;
        height: 45px;
        border-radius: 5px;
        margin: 7px auto;
        border: 1px solid #D4D4D4;
        font-size: 20px;
        color: #DBDBDB;
        box-sizing: border-box;
        padding-left: 10px;
        display: flex;
        align-items: center;

    }
    button{
        width: 303px;
        height: 45px;
        background-color: #52B6FF;
        color: white;
        font-size: 21px;
        margin: 7px auto 15px;
        border: none;
        border-radius: 5px;
    }
`