import React from 'react'
import { useParams } from 'react-router-dom'

const Mission = () => {

    const {missionId} = useParams();

  return (
    <div> Hola {missionId}</div>
  )
}

export default Mission