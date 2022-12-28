import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import * as API from "../../services/launches";
import Missions from "../Missions/Missions";

const MissionsContainer = () => {
  const [launches, setLaunches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    window.scrollTo(0, 0);
    API.getAllLaunches()
      .then(setLaunches)
      .catch(console.log("Error"))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
      <div style={{backgroundColor:"#e9e9e9"}}>
        {loading ? (
          <div className="h-screen flex flex-col items-center justify-center">
            <progress className="progress w-56"></progress>
          </div>
        ) : (
          <div className="bg-base-100" style={{backgroundColor:"#e9e9e9"}}>
            <h1 className="font-bold text-center text-accent-content pt-6">SpaceX Launches</h1>
            <Missions launches={launches} />
          </div>
        )}
      </div>
  );
};

export default MissionsContainer;
