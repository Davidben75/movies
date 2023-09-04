import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    textArea: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Store the form data in local storage
    localStorage.setItem('formData', JSON.stringify(formData));
    alert('Votre avis à bien été envoyé ! Merci');

  };

  return (

    <main className='container'>
      <form  className='form' onSubmit={handleSubmit}>

        <label>Prénom:</label>
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />

        <br/>  

        <label>Nom:
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required/>          
        </label>

        <br/> 

        <label>Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>

        <br/>   
        
        
        <label>Tél:
          <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
        </label>
          
        <br/> 

    
        <label>Ajouter un commmentaire :
          <textarea name="textArea" value={formData.textArea} onChange={handleChange} required/>
        </label>
          
        <br/>  
        <button type="submit">Envoyé</button>
      </form>

      </main>
  );
}

export default Form;