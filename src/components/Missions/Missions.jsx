import React from 'react'

const Missions = ({launches}) => {
  return (
            <ul>
                {
                    launches.map((launch)=>(
                   <li key={launch.flight_number}>
                    Mission: {launch.mission_name} - Year: {launch.launch_year}
                    </li>
                  ))
                }
            </ul>
  )
}

export default Missions