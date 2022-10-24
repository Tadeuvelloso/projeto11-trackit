import styled from "styled-components";
import mark from "../img/Group.png";
import { CustomerContext } from "../contexts/customer";
import axios from "axios";
import { useContext } from "react";


export default function HabitoHoje ({id, name, done, record, atual, render, setRender, num, setNum}){

    const { token } = useContext(CustomerContext)
    

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

   

    function checkMark (){
        
        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`

        const promisse = axios.post(URL, id, config)

        promisse.then((res) => {
            setRender(!render) 
        })

        promisse.catch((err) => {
            alert(err.response.data.message)
        })
    }

    function unCheckMark (){
        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`
        
        const promisse = axios.post(URL, id, config)

        promisse.then((res) => {
            setRender(!render) 
        })

        promisse.catch((err) => {
            alert(err.response.data.message)
        })
    }

    

    return(
        <Main>
            <Dados record={record} atual={atual}>
                <h2>{name}</h2>
                <h3>Sequência atual: <span>{atual} dias</span></h3>
                <h4>Seu recorde: <span>{record} dias</span></h4>
            </Dados>
            {done ? <Check done={done}  onClick={unCheckMark}>
                <img src={mark} />
            </Check> : <Check done={done} onClick={checkMark}>
                <img src={mark} />
            </Check>}
        </Main>
    )
}

const Main = styled.div`
margin: 5px auto;
width: 100%;
height: 94px;
display: flex;
background-color: white;
border-radius: 5px;
justify-content: space-between;
align-items: center;
box-sizing: border-box;
padding: 0px 7px 0px 7px;
`
const Dados = styled.div`
color: #666666;
    h2{
        font-size: 20px;
        margin-bottom: 10px;  
    }

    h3{
        font-size: 13px;
        margin: 2px 0px;
        span{
            color:${ props => props.atual >= props.record && props.atual > 0 ? "#8FC549" : "#666666"};
        }
    }
    h4{
        font-size: 13px;
        margin: 2px 0px;
        span{
            color:${ props => props.atual >= props.record && props.record > 0 ? "#8FC549" : "#666666"};
        }
    }
    
`
const Check = styled.div`
width: 69px;
height: 69px;
display: flex;
justify-content: center;
align-items: center;
background-color: ${props => props.done ? "#8FC549" : "#EBEBEB"};
border-radius: 4px;
cursor: pointer;
`