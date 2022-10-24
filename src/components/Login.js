import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../img/logo.png"
import axios from "axios";
import { CustomerContext } from "../contexts/customer"


export default function Entrar(){

    const { setToken, setImagem } = useContext(CustomerContext)

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState(""); 

    const navigate = useNavigate();

    function fazerLogin(e){
        e.preventDefault();

        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";

        const body = {
            email: email,
            password: senha  
        }

        const promisse = axios.post(URL, body);

        promisse.then((res) => {
            console.log(res.data)
            setToken(res.data.token)
            setImagem(res.data.image)
            navigate("/hoje")
        });
        
        promisse.catch((err) => {alert(err.response.data.message)});
    }

    return(
        <Main>
            <img src={logo} />
            <Formulario onSubmit={fazerLogin}>
                <input  type="email"  placeholder="email" value={email} onChange={e => setEmail(e.target.value)} required />
                <input  type="password" placeholder="senha" value={senha} onChange={e => setSenha(e.target.value)} required />
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
        color: black;
        box-sizing: border-box;
        padding-left: 10px;
        display: flex;
        align-items: center;
        ::placeholder{
            color: #DBDBDB;
        }
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