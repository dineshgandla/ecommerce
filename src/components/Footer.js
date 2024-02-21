import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import {FaDiscord , FaYoutube , FaInstagram} from 'react-icons/fa'
function Footer() {
  return (
    <Wrapper>
      <section className="contact-short">
        <div className="grid grid-two-columns">
            <div>
                <h3 className="footer-title">Ready to get Started?</h3>
                <h3 className="footer-title">Talk to us today</h3>
            </div>
            <div>
              <button className='btn'><NavLink to='/contact'>Get Started</NavLink></button>   
            </div>
            

        </div>
      </section>

      <footer>
        <div className="container grid grid-two-columns">
          <div className="footer-about">
            <h3 className="footer-title">Quick Shoppie</h3>
            <p className="footer-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nisi a quisquam sit rem quam, consequuntur neque quo incidunt est?</p>
          </div>
          <div className="footer-subscribe">
            <h3 className="footer-title">subscribe to get important updates</h3>
            <form action='#'>
              <input type='email' name='email' placeholder='YOUR E-MAIL'/>
              <input type='submit' className="submit" value='SUBSCRIBE'/>
            </form>
          </div>
          <div className="footer-social">
            <h3 className="footer-title">Follow Us</h3>
            <div className="footer-social--icons">
              <div>
                <FaDiscord className='icons'/>
              </div>
              <div>
                <FaInstagram className='icons'/>
              </div>
              <div>
                <FaYoutube className='icons'/>
              </div>
            </div>
          </div>
          <div className="footer-contact">
            <h3 className='footer-title'>Call Us</h3>
            <h3 className="footer-text">+91 9876543210</h3>
          </div>
        </div>
        <div className="footer-bottom-section">
        
          <div className='container'>
            <p className="footer-bottom">@{new Date().getFullYear() } QuickShoppie. All Rights Reserved</p>
         
          </div>
        </div>
      </footer>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .contact-short{
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({theme})=>theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);
    
    .grid div:last-child{
      justify-self: end;
      align-self: center;
      
    }
    a{
      color:#fff;
      }

      .footer-title
      {
        font-size:1.5rem;
      }
      
  }

  footer{
    padding: 10rem 0 2rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};  
    h3{
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-title
    {
      font-size:1.8rem;
    }
    
    .footer-text
    {
      font-size:1.4rem;
    }
    .submit{
      margin-left:0.5rem;
      color: ${({ theme }) => theme.colors.black};
      padding:0.5rem;
      background-color:#87ceea;
      border-radius:0.2rem;
      border:none;
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;
      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};
        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size:1.8rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
  }
  .footer-bottom-section {
    padding-top:rem;
    hr {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }
    .footer-bottom
    {
      font-size:1.3rem;
      text-align:center;
    }
  }
  @media(max-width:${({theme})=>theme.media.small_mobile}){
    
    .contact-short{
      padding: 5px 10px;
      max-width: 80vw;
      h3{
        font-size: 1.6rem;
      }
      .btn{
        width: 10rem;
        font-size: 1.2rem;
        }
      }
    footer{
      font-size: 1.3rem;
      .container{
        margin: 0;
        h3{
          font-size: 2.6rem;  
          margin-bottom: 0.2rem;
          margin-top: 1.2rem;
        }
      }
      .grid{
        display: flex;
        flex-direction: column;
        gap: 1.4rem;
        }
      }
    
    
  }
`

export default Footer
