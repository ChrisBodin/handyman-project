import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';
// import Services from '../services/Services';

const WorkerShow = ({}) => {
  const [worker, setWorker] = useState({profession: '', desc: ''})
  let params = useParams()

  useEffect( () => {
    axios.get(`/api/workers/${params.workerId}`)
      .then( res => {
        setWorker(res.data)
      }) 
      .catch( err => console.log(err))
  }, [])

  return (
    <>
      <h1>{worker.profession}</h1>
      <p>{worker.desc}</p>
      <p>{params.workerId}</p>
      {/* <Services workerId={params.workerId} /> */}
    </>
  )
} 

export default WorkerShow;