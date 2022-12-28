import React from "react";
import { useState, useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";
import * as API from "../../services/launches";
import Tilt from "react-parallax-tilt";
import "./Mission.css";

const Mission = () => {
  const [launch, setLaunch] = useState();
  const { missionId } = useParams();

  const dateString = launch?.launch_date_utc;
  const newDate = dateString ? new Date(dateString) : null;
  const formattedDate = newDate ? newDate.toLocaleString() : "";
  

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    API.getLaunchByFlightNumber(missionId)
      .then(setLaunch)
      .catch(console.log("error"));
      
  }, [missionId]);


  return (
    <div style={{backgroundImage: "url(https://www.spacex.com/static/images/backgrounds/mission_feature.jpg)"}} className="h-screen bg-cover flex flex-col bg-center bg-cover items-center justify-around p-2.5">
      {!launch ? (
        <div className="text-center">Loading...</div>
      ) : (
        <Tilt className="mx-auto w-full max-w-xl rounded shadow-lg text-center ">
            <div className="card lg:card-side bg-base-200 shadow-xl outline Tilt-inner hover:outline-primary">
              <figure className="p-4 flex-col">
                <img
                  src={launch.links.mission_patch_small}
                  alt="mission-logo"
                />
                <p className="font-mono hover:subpixel-antialiased font-bold " style={{color:"#005288"}}>
                  Rocket type : &nbsp;
                  {launch.rocket.rocket_type}
                </p>
              </figure>
              <div className="card-body text-center">
                <h1 className="card-title text-neutral-content block">
                  {launch.mission_name} - {launch.launch_year}
                </h1>
                <h3 className="italic underline" style={{color:"#005288"}}>Detail of the Launch :</h3>
                {!launch.details ? (
                  <p className="text-error">No Data</p>
                ) : (
                  <p className="border-primary-focus">{launch.details}</p> 
                )}
                <div className="text-center">
                  <div className="badge bg-primary text-accent bg-gradient-to-r from-primary to-primary-focus">{formattedDate}</div>
                </div>
              </div>
            </div>
        </Tilt>
      )}
        <button onClick={goBack} className="btn btn-wide btn-primary text-info-content" style={{color:"#005288"}}>Go back</button>
    </div>
  );
};

export default Mission;
