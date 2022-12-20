import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as API from "../../services/launches";
import Tilt from "react-parallax-tilt";

const Mission = () => {
  const [launch, setLaunch] = useState();
  const { missionId } = useParams();

  // const dateString = launch.launch_date_utc;
  // const newDate = new Date(dateString);
  // const formattedDate = newDate.toLocaleString();
  

  useEffect(() => {
    window.scrollTo(0, 0);
    API.getLaunchByFlightNumber(missionId)
      .then(setLaunch)
      .catch(console.log("error"));
      
  }, [missionId]);


  return (
    <div style={{backgroundImage: "url(https://www.spacex.com/static/images/backgrounds/mission_feature.jpg)"}} className="h-screen flex flex-col justify-center bg-center bg-cover">
      {!launch ? (
        <div className="text-center">Loading...</div>
      ) : (
        <Tilt className="mx-auto w-full max-w-xl rounded shadow-lg h-64 text-center">
            <div className="card lg:card-side bg-base-200 shadow-xl">
              <figure className="p-4">
                <img
                  src={launch.links.mission_patch_small}
                  alt="mission-logo"
                />
              </figure>
              <div className="card-body text-center">
                <h1 className="card-title text-neutral-content block">
                  {launch.mission_name} - {launch.launch_year}
                </h1>
                <h3 className="italic underline text-info-content">Detail of the Launch :</h3>
                {!launch.details ? (
                  <p className="text-error">No Data</p>
                ) : (
                  <p className="border-primary-focus">{launch.details}</p> 
                )}
                {/* <div className="text-center">
                  <div className="badge bg-primary text-accent ">{formattedDate}</div>
                </div> */}
              </div>
            </div>
        </Tilt>
      )}
    </div>
  );
};

export default Mission;
