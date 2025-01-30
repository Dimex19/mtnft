import styled from "styled-components"

interface CardProps {
    image?: string;
    srn?: string;
  }
const Card: React.FC<CardProps> = ({image, srn}) => {
  return (
    <Container>
        <img src={image} alt="" />
        <Viewer>
            <p></p>
        </Viewer>
        <div></div>
        <div className="details">
            <p>Collectible</p>
            <h2>MNFT-{srn}</h2>
        </div>
    </Container>
  )
}

export default Card

const Viewer = styled.div``
const Container = styled.div`
    position: relative;
    width: 323px;
    height: 443px;
    background-color: white;
    margin-bottom: 30px;

    @media (max-width: 1120px) {
            width: 90%;
    }
    /* @media (max-width: 620px) {
            transform: scale(1.2);
            margin-bottom: 120px;
    } */
    
    @media (max-width: 970px) {
        width: 80%;
    }
    /* @media (max-width: 1050px) {
        width: 80%;
    } */
    

    &:hover {
        width: 343px;
        height: 483px;
        transition: 0.5s ease-in;
        /* box-shadow: rgb(232, 229, 229) 0px 8px 8px; */
    }
    img {
        width: 100%;
        height: 82%;
    }
    div {
        border: 1px solid black;
        width: 90%;
        height: 90%;
        position: absolute;
        top: 5%;
        left: 5%;
    }
    .details {
        position: absolute;
        top: 82%;
        left: 15px;
        background-color: white;
        width: 180px;
        height: 70px;
        border: none;
        padding: 5px;

        p {
            color: #C2C2C6;
            font-size: 14px;
        }
        
    }
    /* &:hover{
        background-color: green;
    } */
`