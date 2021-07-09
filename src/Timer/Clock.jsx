import React from "react";
import Clock from 'react-digital-clock';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'


const Clockk=()=>{
    return <Clock />
}

    const UrgeWithPleasureComponent = () => (
      <CountdownCircleTimer
        isPlaying
        duration={100}
        colors={[
          ['#004777', 0.33],
          ['#F7B801', 0.33],
          ['#A30000', 0.33],
        ]}
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
    )




export default UrgeWithPleasureComponent;
export {Clockk};