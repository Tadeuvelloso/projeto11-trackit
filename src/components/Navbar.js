import styled from "styled-components"
import { useContext } from "react"
import { CustomerContext } from "../contexts/customer"

export default function Navbar (){

    const { imagem } = useContext(CustomerContext)

    return(
        <Main>
            <p>TrackIt</p>
            <img src={imagem}/>
        </Main>
    )
}

const Main = styled.div`
position: fixed;
top:0px;
left: 0px;
right: 0px;
height: 70px;
background-color: #126BA5;
display: flex;
justify-content: space-between;
align-items: center;
box-sizing: border-box;
padding: 0px 18px 0px 18px;
margin-bottom: 70px;
    img{
        border-radius: 50%;
        height: 51px;
        width: 51px;
    }
    p{
        font-size: 39px;
        color: #ffffff;
        font-family: 'Playball';        
    }
`