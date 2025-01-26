import { useState, useEffect } from "react"
import styled from "styled-components"

const CountDownClock:React.FC<{targetDate: Date}> = ({targetDate}) => {

    const calculateTimeLeft = ()=> {
        const difference = targetDate.getTime() - new Date().getTime()
        // console.log(difference);
        // console.log(targetDate);
        

        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
        const minutes = Math.floor((difference / (1000 * 60)) %  60)
        const seconds = Math.floor((difference / 1000 % 60))

        return { days, hours, minutes, seconds }
    }
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

    useEffect(() => {
        // Update the countdown every second
        const timer = setInterval(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
    
        // Cleanup timer on component unmount
        return () => clearInterval(timer);
      }, []);
    
      if (!timeLeft) {
        return <p>The countdown has ended!</p>;
      }

    
  return (
        <Container>
            <h2><span>{isNaN(timeLeft.days) ? 0 : timeLeft.days}<p>Days</p></span>:<span>{isNaN(timeLeft.hours) ? 0 : timeLeft.hours}<p>Hours</p></span>:<span>{isNaN(timeLeft.minutes) ? 0 : timeLeft.minutes}<p>Minutes</p></span>:<span>{isNaN(timeLeft.seconds) ? 0 : timeLeft.seconds}<p>seconds</p></span></h2>
        </Container>
  )
}

export default CountDownClock

const Container = styled.div`
    background-color: black;
    h2{
        display: flex;
        justify-content: center;
        font-size: 60px;
        text-align: center;
        color: white;
        padding: 20px;

        span {
            display: flex;
            flex-direction: column;

            p {
                color: white;
                font-size: 12px;
            }
        }
    }

`