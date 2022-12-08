import { useState, useEffect } from 'react'
import Form from './components/Form'
import Header from './components/Header'
import List from './components/List'

function App() {

  const [infoPatient, setInfoPatient] = useState([]);
  const [info, setInfo] = useState({});
  
  useEffect (() => {
    const getLS = () => {
      const infoPatientLS = JSON.parse(localStorage.getItem('infoPatient')) ?? [];
      // console.log(infoPatientLS)
      setInfoPatient(infoPatientLS);
    }

    getLS();
  }, [])  

  useEffect (() => {
    localStorage.setItem('infoPatient', JSON.stringify(infoPatient))
  }, [infoPatient])
  
  
  const deletePatient = (id) =>{

    const updatePatient = infoPatient.filter( patient => patient.id !== id);
    setInfoPatient(updatePatient)

  }

  return (
    <div className='container mx-auto'>
      <Header />
      
      <div className='mt-12 md:flex'>
        <Form 
          infoPatient={infoPatient}
          setInfoPatient={setInfoPatient}
          info={info}
          setInfo={setInfo}
        />
        <List 
          infoPatient={infoPatient}
          setInfo={setInfo}
          deletePatient={deletePatient}
        />        
      </div>

    </div>
  )
}

export default App
