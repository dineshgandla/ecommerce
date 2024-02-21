import React from 'react'
import styled from 'styled-components'

const Contact = () => {
  return (
   <Wrapper>
    <h2 className='common-heading'>Contact Page</h2>
      <div className="mapLocation">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.84393751899!2d78.63296390940056!3d17.419275583404442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9e135e49a483%3A0x54a2dbf8bab78cab!2sMcDonald&#39;s!5e0!3m2!1sen!2sin!4v1685935854831!5m2!1sen!2sin"
       method='POST' title="location" width="100%" height="300" style={{border:0}} allowfullscreen="" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>

      </div>
      <div className="container">
        <div className="contact-form">
          {/* Using formspree to send an email alert  */}
          <form className='contact-inputs'
             action='https://formspree.io/f/mvonjdna' 
            method='POST'>
            <input type='text' placeholder='username' name='username' required autoComplete='off' />
            <input type='email' name='Email' placeholder='Email' required autoComplete='off' />
            <textarea placeholder='Enter your message' cols='30' rows='10' required autoComplete='off'/>
            <button className='btn'>send</button>

          </form>
        </div>
      </div>
   </Wrapper>
  )
}
const Wrapper = styled.section`
  text-align: center;
  padding:9rem 0 5rem 0;
  
.container{
  margin-top: 6rem;

  .contact-form{
    max-width: 50rem;
    margin: auto;
    .contact-inputs{
      display: flex;
      flex-direction: column;
      gap: 3rem;
    }
  }
}
`

export default Contact
