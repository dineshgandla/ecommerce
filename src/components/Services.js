import React from 'react'
import styled from 'styled-components';
import {TbTruckDelivery} from 'react-icons/tb';
import {RiSecurePaymentLine} from 'react-icons/ri';
import {MdSecurity} from 'react-icons/md';
import {GiReceiveMoney} from 'react-icons/gi';

const Services = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-three-columns">
            <div className="services-1">

                    <TbTruckDelivery className='icon'/>
                <h2>super fast and free delivery</h2>
            </div>
            <div className="services-2">
                <div className="services-column-2">
                    <MdSecurity className='icon'/>
                    <h2>Non- contact shipping</h2>
                </div>
                <div className="services-column-2">
                    <GiReceiveMoney className='icon'/>
                    <h2>Money-back guarented</h2>
                </div>
            </div>
            <div className="services-3">
                <RiSecurePaymentLine className='icon'/>
                <h2>super secure payment system</h2>
            </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    padding: 9rem 0;
    // border:2px solid black;
    // margin: 1rem;
    // border-radius: 2rem;
    .container{
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        border-radius: 3rem;
        }
    .services-1,
    .services-2,
    .services-3{
        background: ${({theme})=>theme.colors.bg};
        
        height: 30rem;
        width: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        border-radius: 2rem;
        box-shadow: rgba(0, 0, 0, 0.05) 2px 2px 2px 0px;

    }
    .services-2{
        background: transparent;
        gap:4rem;
            box-shadow: none;
        .services-column-2{
            background: ${({theme})=>theme.colors.bg};
            display: flex;
            align-items: center;
            gap:1rem;
            border-radius: 2rem;
            box-shadow: rgba(0, 0, 0, 0.05) 2px 2px 2px 0px;
            padding:0 1.2rem;

        }    
    }
    .icon{
        width: 10rem;
        height: 10rem;
        padding: 2rem;
        border-radius: 50%;
        color: #5138ee;
        background: #fff;

    }
    @media(max-width:${({theme})=>theme.media.mobile}){
        
        .grid-three-columns{
        grid-template-columns: 1fr
        }
        .services-1,
        .services-2,
        .services-3{
            height: 20rem;
        }
    }
`;

export default Services
