import styled from "styled-components"

const Marquee:React.FC =()=> {
    return (
        <MainContainer>
            <Container>
                <Wrapper>
                    <strong>AUCTION IS COMING SOON</strong>
                    <p>Our public sale event will be held on March 31, 2025.</p>
                </Wrapper>
                <Wrapper>
                    <strong>AUCTION IS COMING SOON</strong>
                    <p>Our public sale event will be held on March 31, 2025.</p>
                </Wrapper>
                <Wrapper>
                    <strong>AUCTION IS COMING SOON</strong>
                    <p>Our public sale event will be held on March 31, 2025.</p>
                </Wrapper>
                <Wrapper>
                    <strong>AUCTION IS COMING SOON</strong>
                    <p>Our public sale event will be held on March 31, 2025.</p>
                </Wrapper>
                <Wrapper>
                    <strong>AUCTION IS COMING SOON</strong>
                    <p>Our public sale event will be held on March 31, 2025.</p>
                </Wrapper>
                <Wrapper>
                    <strong>AUCTION IS COMING SOON</strong>
                    <p>Our public sale event will be held on March 31, 2025.</p>
                </Wrapper>
                <Wrapper>
                    <strong>AUCTION IS COMING SOON</strong>
                    <p>Our public sale event will be held on March 31, 2025.</p>
                </Wrapper>
                <Wrapper>
                    <strong>AUCTION IS COMING SOON</strong>
                    <p>Our public sale event will be held on March 31, 2025.</p>
                </Wrapper>
                <Wrapper>
                    <strong>AUCTION IS COMING SOON</strong>
                    <p>Our public sale event will be held on March 31, 2025.</p>
                </Wrapper>
                <Wrapper>
                    <strong>AUCTION IS COMING SOON</strong>
                    <p>Our public sale event will be held on March 31, 2025.</p>
                </Wrapper>
                <Wrapper>
                    <strong>AUCTION IS COMING SOON</strong>
                    <p>Our public sale event will be held on March 31, 2025.</p>
                </Wrapper>
                <Wrapper>
                    <strong>AUCTION IS COMING SOON</strong>
                    <p>Our public sale event will be held on March 31, 2025.</p>
                </Wrapper>
                <Wrapper>
                    <strong>AUCTION IS COMING SOON</strong>
                    <p>Our public sale event will be held on March 31, 2025.</p>
                </Wrapper>
                <Wrapper>
                    <strong>AUCTION IS COMING SOON</strong>
                    <p>Our public sale event will be held on March 31, 2025.</p>
                </Wrapper>
                <Wrapper>
                    <strong>AUCTION IS COMING SOON</strong>
                    <p>Our public sale event will be held on March 31, 2025.</p>
                </Wrapper>
                <Wrapper>
                    <strong>AUCTION IS COMING SOON</strong>
                    <p>Our public sale event will be held on March 31, 2025.</p>
                </Wrapper>
                <Wrapper>
                    <strong>AUCTION IS COMING SOON</strong>
                    <p>Our public sale event will be held on March 31, 2025.</p>
                </Wrapper>
                <Wrapper>
                    <strong>AUCTION IS COMING SOON</strong>
                    <p>Our public sale event will be held on March 31, 2025.</p>
                </Wrapper>
                <Wrapper>
                    <strong>AUCTION IS COMING SOON</strong>
                    <p>Our public sale event will be held on March 31, 2025.</p>
                </Wrapper>
                <Wrapper>
                    <strong>AUCTION IS COMING SOON</strong>
                    <p>Our public sale event will be held on March 31, 2025.</p>
                </Wrapper>
                <Wrapper>
                    <strong>AUCTION IS COMING SOON</strong>
                    <p>Our public sale event will be held on March 31, 2025.</p>
                </Wrapper>
                
            </Container>
        </MainContainer>
    )
}
export default Marquee

const MainContainer = styled.div`
    position: relative;
    width: 100vw;
    overflow: hidden;
    flex-wrap: wrap;
    background-color: white;

    /* @media (min-width: 450px) {
        width: 100vw;
    } */

    @keyframes scroll {
        0% {transform: translateX(0)};
        100% {transform: translateX(-100%)}
    }
`
const Container = styled.div`
    display: inline-flex;
    margin-top: 40px;
    margin-bottom: 40px;
    

    /* transition: opacity .3s; */
    animation: scroll 180s linear infinite;
    /* transform: translate3d(); */
`
const Wrapper = styled.div`
    color: black;
    /* border: 1px solid red; */
    width: 350px;

    p {
        font-size: 12px;
    }
`