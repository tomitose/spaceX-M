import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import * as API from "../../services/launches";
import Missions from '../Missions/Missions';

const MissionsContainer = () => {
  const [launches,setLaunches] = useState([]);
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    setLoading(true)
    API.getAllLaunches().then(setLaunches).finally(() => {
      setLoading(false);
    });
    
  }, [])
  

  return (
    <div style={{minHeight: "100vh"}}>
      <h1>SpaceX Launches</h1>
      <ul>
        {loading ? (<div className='flex justify-center'><progress className="progress w-56"></progress></div>
        ) :
        (<Missions launches={launches}/>)
        }
      </ul>
    </div>
  )
}

export default MissionsContainer