import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../img/logo.png"
import { useState } from "react";

export default function Cadastrar(){
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [imagem, setImagem] = useState("");
    const [senha, setSenha] = useState(""); 
    
    const navigate = useNavigate();

    function fazerCadastro(e){
        e.preventDefault();

        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";

        const body = {
            email: email,
            name: nome,
            image: imagem,
            password: senha  
        }

        const promisse = axios.post(URL, body);

        promisse.then(() => {navigate("/")});
        
        promisse.catch((err) => {alert(err.response.data.message)});
    }

    return(
        <Main>
            <img src={logo} />
            <Formulario onSubmit={fazerCadastro}>
                <input  type="email"  placeholder="email" value={email} onChange={e => setEmail(e.target.value)} required/>
                <input  type="password" placeholder="senha" value={senha} onChange={e => setSenha(e.target.value)} required />
                <input type="text" placeholder="nome" value={nome} onChange={e => setNome(e.target.value)} required />
                <input type="url" placeholder="imagem" value={imagem} onChange={e => setImagem(e.target.value)} required/>
                <button type="subimit" >Cadastrar</button>
            </Formulario>
            <Link to="/">Já tem uma conta? Faça login!</Link>
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