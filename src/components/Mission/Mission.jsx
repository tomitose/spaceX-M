import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as API from "../../services/launches";

const Mission = () => {
  const [launch, setLaunch] = useState();

  const { missionId } = useParams();

  useEffect(() => {
    API.getLaunchByFlightNumber(missionId)
      .then(setLaunch)
      .catch(console.log("error"));
  }, [missionId]);

  return (
    <div>
      <h1>Mission number : {missionId}</h1>
      {/* <div>{launch.mission_name}</div> */}
      {!launch ? <div>Loading...</div> : 
      <div>
        <h2>{launch.mission_name} - {launch.launch_year}</h2>
        <h3>{launch.details}</h3>
      </div>
      }
    </div>
  );
};

export default Mission;
