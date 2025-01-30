import styled from "styled-components"
import Card from "./Card"
import NFTOne from '../assets/images/nft1.png'
import NFTTwo from '../assets/images/nft2.png'
import NFTThree from '../assets/images/nft3.png'
import NFTFour from '../assets/images/nft4.png'
import NFTFive from '../assets/images/nft5.png'
import NFTSix from '../assets/images/nft6.png'

const Collectibles: React.FC = ()=> {
    return (
        <Container>
            <Card image={NFTOne} srn="01"/>
            <Card image={NFTTwo} srn="02"/>
            <Card image={NFTThree} srn="03"/>
            <Card image={NFTFour} srn="04"/>
            <Card image={NFTFive} srn="05"/>
            <Card image={NFTSix} srn="06"/>
        </Container>
    )
}
export default Collectibles

const Container = styled.div`
    background-color: black;
    flex-wrap: wrap;
    display: grid;
    grid: auto / auto auto auto;
    padding: 50px;
    border: 5px solid white;

    @media (max-width: 620px) {
        padding: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    @media (max-width: 870px) {
        grid: auto / auto auto;
        margin: auto;
    }
    
    
`