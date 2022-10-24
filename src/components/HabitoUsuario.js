import styled from "styled-components";
import lixo from "../img/lixo.png"
import axios from "axios";
import { useContext, useState } from "react";
import { CustomerContext } from "../contexts/customer"

export default function HabitoApi ({name, days, id, semana, cont, setCont}){
    
    const { token } = useContext(CustomerContext)
    const [confirma, setConfirma] = useState(false)
   
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

    function confirmacao (){
        setConfirma(!confirma)
    }

    return(
        <CriarHabito>
            <img src={lixo} onClick={confirmacao}/>
            <p>{name}</p>{confirma ?<span>Tem certeza que quer excluir esse hábito?</span>  : <></>}
            {confirma ? 
            <Grade>
                <p onClick={confirmacao}>cancelar</p>
                <button onClick={() => excluirHabito(id)}>confirmar</button>
            </Grade> : 
            <Semana>
                {semana.map((d, i) => <Dia letra={d} key={i} index={i} days={days}/>)}
            </Semana>}
            
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
    span{
        font-size: 13px;
        margin-left: 25px;
        
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

const Grade = styled.div`
height: 50%;
display: flex;
align-items: center;
justify-content: center;
button{
        background-color: #52B6FF;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        border: none;
        font-size: 16px;
        border-radius: 5px;
        height: 25px;
        width: 74px;
        font-weight: 400;
        margin-left: 15px;
        :hover{
            cursor: pointer;
        }
    }
    p{
        color: #52B6FF;
        font-size: 17px;
        :hover{
            cursor: pointer;
        }
    }
`