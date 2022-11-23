import React from 'react';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as API from '../../services/launches'

const Mission = () => {
  const [launch,setLaunch] = useState()

  const {missionId} = useParams();

  useEffect(() => {
    API.getLaunchByFlightNumber(missionId)
    .then(setLaunch)
  }, [missionId])
  

  return (
    

    <div> 
      <h3>Mission number : {missionId}</h3>
      {/* <div>{launch.mission_name}</div> */}
      {!launch ? (<div>Loading...</div>) :
        <h3>{launch.mission_name}</h3>
      }

    </div>
  )
}

export default Mission