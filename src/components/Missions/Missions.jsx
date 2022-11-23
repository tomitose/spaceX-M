import React from "react";
import { Link } from "react-router-dom";

const Missions = ({ launches }) => {
  return (
    <ul className="p-3">
      {launches.map((launch) => (
        <li key={launch.flight_number} className="p-3 flex justify-center">
          <div className="card w-2/4 bg-neutral text-neutral-content">
            <div className="card-body items-center text-center">
              <div className="flex items-center justify-center flex-wrap">
                <h2 className="card-title p-3 pr-5 block">
                  Mission: <strong>{launch.mission_name}</strong> 
                </h2>
                <span
                  className={
                    launch.launch_success
                      ? "badge badge-success"
                      : "badge badge-error"
                  }
                >
                  {launch.launch_success ? "Success" : "Failure"}
                </span>
              </div>
              <p>Year: {launch.launch_year}</p>
              <div className="card-actions justify-end">
                <Link to={`/missions/${launch.flight_number}`}>
                  <button className="btn btn-primary h-8 mt-4">Info</button>
                </Link>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Missions;
