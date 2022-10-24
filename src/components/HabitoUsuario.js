import styled from "styled-components";
import lixo from "../img/lixo.png"
import axios from "axios";
import { useContext } from "react";
import { CustomerContext } from "../contexts/customer"

export default function HabitoApi ({name, days, id, semana, cont, setCont}){
    
    const { token } = useContext(CustomerContext)

   
    function excluirHabito(id){

        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        axios.delete(URL, config)
        .then((res) => {
            setCont(!cont)
        })

    }

    return(
        <CriarHabito>
            <img src={lixo} onClick={() => excluirHabito(id)}/>
            <p>{name}</p>
            <Semana>
                {semana.map((d, i) => <Dia letra={d} key={i} index={i} days={days}/>)}
            </Semana>
        </CriarHabito>
    )
    
}

function Dia ({letra, index, days}){

    return(
        <DiaSemana days={days} index={index}>
            {letra}
        </DiaSemana>
    )
}


const CriarHabito = styled.div`
height: 91px;
width: 340px;
margin: 5px auto;
border-radius: 5px;
background-color: #FFFFFF;
padding: 10px ;
box-sizing: border-box;
position: relative;
    p{
        font-size: 20px;
        color:#666666;
        margin-bottom: 5px;
    }
    img{
        position:absolute;
        top: 6px;
        right: 6px;
        :hover{
            cursor: pointer;
        }
    }
`
const DiaSemana = styled.div`
width: 30px;
height: 30px;
display: flex;
justify-content: center;
align-items: center;
font-size: 20px;
border: 1px solid #D4D4D4;
border-radius: 5px;
margin: 2px;
background-color: ${props => props.days.includes(props.index) ? `#CFCFCF` : `#ffffff`};
color: ${props => props.days.includes(props.index) ? `#ffffff` : `#CFCFCF`};
`
const Semana = styled.div`
display: flex;
height: 35px;
width: auto;
`