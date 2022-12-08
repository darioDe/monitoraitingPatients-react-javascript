import {useState, useEffect} from 'react'
import Error from './Error';

const Form = ({ infoPatient, setInfoPatient, info, setInfo }) => {
  
  const [name, setName] = useState("")
  const [doctor, setDoctor] = useState("");
  const [email, setEmail] = useState("");
  const [discharge, setDischarge] = useState("");
  const [surgery, SetSurgery] = useState("");

  const [error, setError] = useState(false);
  
  useEffect(() => {
    if ( Object.keys(info).length > 0 ){
      setName(info.name);
      setDoctor(info.doctor);
      setEmail(info.email);
      setDischarge(info.discharge);
      SetSurgery(info.surgery);
    }
  }, [info])
  

  const idGenerator = ()=> {
    const random = Math.random().toString(36).substr(2);
    const dateNow = Date.now().toString(36);

    return random + dateNow;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // VALIDATE FORM 
    if([ name, doctor, email, discharge, surgery].includes('') ) {
      console.log("Hay al menos un campo vacío");
      setError(true);
      return;
    }
    
    setError(false)
    
    // PATIENT OBJECT
    const patientObject = {
      name,
      doctor,
      email,
      discharge,
      surgery,
    };

    if (info.id) {
      // EDIT DATA
      patientObject.id = info.id;

      const updatePatient = infoPatient.map( infoState => infoState.id === info.id ? patientObject : infoState );

      setInfoPatient(updatePatient);
      setInfo({})

    } else {
      // NEW DATA
      patientObject.id = idGenerator();
      setInfoPatient([...infoPatient, patientObject]);
    }


    // RESET FORM
    setName("");
    setDoctor("");
    setEmail("");
    setDischarge("");
    SetSurgery("");
  }

  return (
    <div className='md:w-1/2 lg:2/5 mx-5'>
      <h2 className='font-black text-3xl text-center'> Monitoring Patients </h2>

      <p className='text-xl mt-5 text-center mb-10'>
         Add Patient and {""}
         <span className='text-emerald-700 font-bold'>Manage Them</span>
      </p>

      <form 
        action="" 
        className='bg-gray-200 shadow-md rounded-lg py-18 px-5 py-10 mb-10' 
        onSubmit={handleSubmit}
      >
        { error && <Error msg={"All tags are required"}/>}

        <div className='mb-5'>
            <label className='block text-gray-700 uppercase font-bold' htmlFor="name"> Name </label>
            <input
              id='name' 
              type="text"
              placeholder='Name'
              className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
              value={ name }
              onChange={ (e)=> setName(e.target.value) }

            />
        </div>
        <div className='mb-5'>
            <label className='block text-gray-700 uppercase font-bold' htmlFor="doctor"> Doctor </label>
            <input
              id='doctor' 
              type="text"
              placeholder='Assigned Doctor'
              className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
              value={ doctor }
              onChange={ (e)=> setDoctor(e.target.value) }
            />
        </div>
        <div className='mb-5'>
            <label className='block text-gray-700 uppercase font-bold' htmlFor="email"> Email </label>
            <input
              id='email' 
              type="email"
              placeholder='Contact E-mail'
              className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
              value={ email }
              onChange={ (e)=> setEmail(e.target.value) }
            />
        </div>
        <div className='mb-5'>
            <label className='block text-gray-700 uppercase font-bold' htmlFor="discharge"> Dischargin Date </label>
            <input
              id='discharge' 
              type="date"
              className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
              value={ discharge }
              onChange={ (e)=> setDischarge(e.target.value) }
            />
        </div>
        <div className='mb-5'>
            <label className='block text-gray-700 uppercase font-bold' htmlFor="surgery"> Surgery & Details </label>
            <textarea 
              name="" 
              id="surgery" 
              placeholder='Write the Details'
              value={ surgery }
              onChange={ (e)=> SetSurgery(e.target.value) } 
            />
        </div>
         
         <input 
          type="submit" 
          className='bg-emerald-700 w-full p-3 text-white uppercase font-bold hover:bg-emerald-900 cursor-pointer transition-colors'
          value={ info.id ? 'Edit Patient' : 'Add Patient'}
        />
      </form>
   </div>
  )
}

export default Form