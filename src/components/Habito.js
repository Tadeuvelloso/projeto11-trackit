import styled from "styled-components";
import mark from "../img/Group.png";


export default function HabitoHoje (){
    return(
        <Main>
            <Dados>
                <h3>Ler 1 capítulo de livro</h3>
                <h4>Sequência atual: 3 dias</h4>
                <h4>Seu recorde: 5 dias</h4>
            </Dados>
            <Check>
                <img src={mark} />
            </Check>
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
    h3{
        font-size: 20px;
        margin-bottom: 10px;
    }
    h4{
        font-size: 13px;
        margin: 2px 0px;
    }
`
const Check = styled.div`
width: 69px;
height: 69px;
display: flex;
justify-content: center;
align-items: center;
background-color: #EBEBEB;
border-radius: 4px;
`