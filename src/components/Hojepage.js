import styled from "styled-components"
import axios from "axios"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { CustomerContext } from "../contexts/customer"
import { useContext, useEffect, useState } from "react"
import HabitoHoje from "./Habito"
import dayjs from "dayjs"



export default function Hoje () {

    const { token, bar, setBar, setFeito, percentage } = useContext(CustomerContext)

    const [dados, setDados] = useState([])
    const [render, setRender] = useState(false)
    const [num, setNum] = useState(false)

    var customParseFormat = require('dayjs/plugin/customParseFormat')
    dayjs.extend(customParseFormat)

   require('dayjs/locale/pt-br')
   let today = dayjs().locale('pt-br').format('dddd, DD/MM')

    useEffect(() => {
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today"

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        const promisse = axios.get(URL, config)

        promisse.then((res) => {
            setDados(res.data)
            setBar(res.data.length)
            
        })

        promisse.catch((err) => {
            console.log(err.response.data.message)
        })


    },[render])

    if(dados.length > 0){
        let tarefasFeitas = 0
        dados.forEach((d) => {
            if (d.done){
                tarefasFeitas += 1;
            }
        })
        setFeito(tarefasFeitas)
    }
        
    
        
    

    return(
        <Main>
            <Navbar />
            <Dia>
                <h1>{today}</h1>
                {percentage > 0 ? <Grenn>{percentage.toFixed(2)}% dos hábitos concluídos</Grenn>: <p>Nenhum hábito concluído ainda</p>}
                
            </Dia>
            <HabitosList>
                {dados.map((h) => <HabitoHoje num={num} setNum={setNum} render={render} setRender={setRender} record={h.highestSequence} atual={h.currentSequence} key={h.id} id={h.id} name={h.name} done={h.done}/>)}
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

const Grenn = styled.div`
color: #8FC549;
`