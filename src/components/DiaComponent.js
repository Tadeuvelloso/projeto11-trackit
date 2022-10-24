import styled from "styled-components";

export default function Dia ({letra, index, addDia, diasHabito}){

    return(
        <DiaSemana onClick={() => addDia(index)}  diasHabito={diasHabito} index={index}>
            {letra}
        </DiaSemana>
    )
}

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
background-color: ${props => props.diasHabito.includes(props.index) ? `#CFCFCF` : `#ffffff`};
color: ${props => props.diasHabito.includes(props.index) ? `#ffffff` : `#CFCFCF`};
:hover{
    cursor: pointer;
}
`