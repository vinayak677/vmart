import React, { useState } from 'react'

const About = () => {
  const[name,setName]=useState('');
  const[email,setEmail]=useState('');
  const[text,setText]=useState('');
 const [message,setMessage]=useState('');


const handleSubmit=(e)=>{
  e.preventDefault();
  if( name.length !==0 && email.length !==0 && text.length !==0){
    setMessage('Thank you for your feedback. We will look on to it')
    setName('')
    setEmail('')
    setText('')

    setTimeout(()=>{
      setMessage('')
    },3000)
  }
}


  return (
    <div className='container'>
     <div className='m-4' style={{textAlign:'center',color:'green'}}>
       <h1>V collection</h1>
       <p>Add your details</p>
       
     </div>
     <form className='mx-auto' onSubmit={handleSubmit} style={{background:`linear-gradient(to right, #267871, #136a8a)`,marginTop:'30px',width:'500px',paddingTop:'30px',
    paddingLeft:'60px',paddingRight:'60px',paddingBottom:'30px'}}>
       <p style={{color:'yellow'}}>{message.length !==0 && message}</p>
       <div className='mb-3'>
       <label  htmlFor="exampleInputtext" className='form-label'>Name</label>
       <input type='name' placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)} required aria-describedby="nameHelp" id="exampleInputName" aria  className="form-control" />
       </div>
       <div className="mb-3">
          <label htmlFor="exampleInputtext" className="form-label">Email Address</label>
          <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required className="form-control" id="exampleInputEmail1"  />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputtext" className="form-label">Add your Feedback</label>
          <textarea type="text" placeholder='Text' value={text} onChange={(e) => setText(e.target.value)} required className="form-control" id="exampleInputText"/>
        </div>
        <button className='btn btn-primary' type="submit">Submit</button>
     </form>
    </div>
  )
}

export default About