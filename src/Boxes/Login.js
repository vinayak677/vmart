import React, { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState('');
    const[password,setPassword]=useState('');
    const[message,setMessage]=useState('')

  const handleSubmit=(e)=>{
    e.preventDefault();
   if( email.length !==0 && password.length !==0){
       setMessage('thank you!!');
       setEmail('');
       setPassword('');

       setTimeout(()=>{
           setMessage('')
       },3000)
   }
  }

    return (
        <form onSubmit={handleSubmit} className='mx-auto' style={{ display: 'flex', width: '300px', marginTop: '40px',background:'black' ,paddingLeft:'60px',paddingRight:'60px',paddingTop:'20px',
        borderRadius:'20px',background:`linear-gradient(to right, #267871, #136a8a)`,boxShadow: `0px 2px 10px rgba(0,0,0,0.2), 0px 10px 20px rgba(0,0,0,0.3), 0px 30px 60px 1px rgba(0,0,0,0.5)` }}>
        
            <div>
            <div>
                <label className='form-label' style={{}}>Email</label>
                <input className='form-control' type='email' placeholder='email' value={email} required onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label className='form-label' style={{}}>Password</label>
                <input className='form-control' type='password' placeholder='password' value={password} required onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type='submit' style={{marginTop:'20px'}}>Login</button>
            
            <div style={{paddingTop:'20px'}}>
            <p className='form-label'>{message.length !==0 && message}</p>
            </div>
            </div>
        </form>
    )
}

export default Login