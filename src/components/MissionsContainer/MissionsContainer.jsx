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
    API.getAllLaunches()
      .then(setLaunches)
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <div>
        {loading ? (
          <div className="h-screen flex flex-col items-center justify-center">
            <progress className="progress w-56"></progress>
          </div>
        ) : (
          <div>
            <h1 className="font-bold text-center">SpaceX Launches:</h1>
            <Missions launches={launches} />
          </div>
        )}
      </div>
    </div>
  );
};

export default MissionsContainer;
