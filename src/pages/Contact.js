import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {

    e.preventDefault();
    const user = {name, email, message};
    fetch('/users', {

      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(user)
    })
    .then(() => {
      navigate('/');
   
    })
  }

  return (
    <div className="contact">
      <Navbar />
      <h2>Contact Us</h2>
      <form className="form-section" onSubmit={ handleSubmit }>
        <label>Full Name</label>
        <input type="text" 
        required 
        value={ name } 
        onChange={ (e) => setName(e.target.value)} />
        <label>Email Address</label>
        <input type="email" 
        required
        value={ email } 
        onChange={ (e) => setEmail(e.target.value)} />
        <label>Message</label>
        <textarea
        required 
        value={ message } 
        onChange={ (e) => setMessage(e.target.value)}></textarea>
        <button>Submit</button>
      </form>
      <Footer />
    </div>
  );
}

export default Contact;