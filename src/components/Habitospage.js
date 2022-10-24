import styled from "styled-components"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { CustomerContext } from "../contexts/customer"
import { useContext, useEffect, useState } from "react"
import axios from "axios"
import Dia from "./DiaComponent"
import HabitoApi from "./HabitoUsuario"

export default function Habitos (){

    const { token } = useContext(CustomerContext)

    const [criarHabito, setcriarHabito] = useState("")
    const [diasHabito, setDiasHabito] = useState([])
    const [interruptor, setInterrupor] = useState(false)
    const [cont, setCont] = useState(false)
    const [data, setData] = useState([])

    const semana = ["D","S","T","Q","Q","S","S"];
    
    useEffect(() => {
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        const promisse = axios.get(URL, config)

        promisse.then((res) => {
            setData(res.data)
            
        })

        promisse.catch((err) => {
            console.log(err.response.data.message)
        })
    }, [cont])
    

    function abrirCriarHabito (){
        setInterrupor(!interruptor)
    }

    function addDia (d){

        if(diasHabito.includes(d)){
            const diasFilter = diasHabito.filter((o) => !(o === d));
            setDiasHabito([...diasFilter])
            return
        }
        setDiasHabito([...diasHabito, d])
    }

    function enviarHabito (){
        const body = {
            name: criarHabito,
            days: diasHabito  
        }

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        const promisse = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", body, config);

        promisse.then((res) => {
            console.log(res.data)
            setCont(!cont)
            setDiasHabito([])
            setcriarHabito("")
        });
        
        promisse.catch((err) => {alert(err.response.data.message)});

    }

    function cancelar (){
        setInterrupor(false)
    }

    return(
        <Main>
            <Navbar />
            <AddHabito>
                <p>Meus hábitos</p>
                <button onClick={abrirCriarHabito}>+</button>
            </AddHabito>
            {interruptor ?
            <CriarHabito>
                <input type="text" placeholder="digite seu hábito..." value={criarHabito} onChange={e => setcriarHabito(e.target.value)} required />
                <Semana>
                    {semana.map((d, i) => <Dia letra={d} key={i} index={i} addDia={addDia} diasHabito={diasHabito}/>)}
                </Semana>
            <Botoes>
                <p onClick={cancelar}>Cancelar</p>
                <button onClick={enviarHabito}>Salvar</button>
            </Botoes>
        </CriarHabito> : <></>}
            <HabitosCadastrados>
                {data.map((h) => <HabitoApi cont={cont} setCont={setCont} semana={semana} name={h.name} days={h.days} key={h.id} id={h.id}/>)}
            </HabitosCadastrados>
            <Footer />
        </Main>
    )
}

const Main = styled.div`
width: 100%;
min-height: 700px;
background-color: white;
margin: auto;
display: flex;
flex-direction: column;
align-items: center;
padding: 0px 15px 0px 15px;
box-sizing: border-box;
position: relative;
background-color: #E5E5E5;
font-family: 'Lexend Deca', sans-serif;
`
const HabitosCadastrados = styled.div`
width: 100%;
overflow-y: scroll;
height: auto;
background-color: #E5E5E5;
margin: 0px auto 120px;
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
            cursor: pointer;
        }
    }
    p{
        color: #126BA5;
        font-size: 23px;
    }
`
const CriarHabito = styled.div`
height: 180px;
width: 340px;
margin: 20px auto;
border-radius: 5px;
background-color: #FFFFFF;
padding: 10px ;
box-sizing: border-box;
    input{
        height: 45px;
        width: 303px;
        border-radius: 5px;
        border: 1px solid #D4D4D4;
        color: #666666;
        margin: 8px 0px 7px;
        font-size: 20px;
        ::placeholder{
            font-size: 18px;
        }
    }
`
const Semana = styled.div`
display: flex;
height: 35px;
width: auto;
`
const Botoes = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 17px;
    
    button{
        background-color: #52B6FF;
        color: white;
        border: none;
        font-size: 16px;
        border-radius: 5px;
        height: 35px;
        width: 84px;
        font-weight: 400;
        margin-left: 15px;
        :hover{
            cursor: pointer;
        }
    }
    p{
        color: #52B6FF;
        :hover{
            cursor: pointer;
        }
    }
`