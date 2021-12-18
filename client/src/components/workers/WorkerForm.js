import { useState, useEffect } from 'react';

const WorkerForm = ({ addWorker }) => {
  const [worker, setWorker] = useState({ profession: '', desc: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    addWorker(worker)
    setWorker({ profession: '', desc: '' })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
          name='profession' 
          value={worker.profession}
          onChange={(e) => setWorker({...worker, profession: e.target.value})}
          required
          placeholder="profession"
        />
        <label>Description:</label>
        <textarea
          name='desc'
          value={worker.desc}
          onChange={(e) => setWorker({...worker, desc: e.target.value})}
          required
        ></textarea>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default WorkerForm;