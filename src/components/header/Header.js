import React from 'react'
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';
import Nav from './Nav';
const Header = () => {
  return (
    <MainHeader>
      <NavLink to='/' className='title-icon'>
        <h3 className='mainTitle'>Quick SHOPPIE</h3>
      </NavLink>
      <Nav/>
    </MainHeader>
  )
}

const MainHeader = styled.header`
  background-color: ${({theme})=>theme.colors.bg};
  display:flex;
  justify-content : space-between;
  position:relative;
  align-items:center;
  padding: 0 2rem;
  overflow-x:hidden;
  text-transform:upperCase;
  font-size:1.5rem;
  height:5.5rem;
  .title-icon{
    text-decoration:none;
    .mainTitle{
      font-size:2rem;
    }
  }

@media(max-width:${({theme})=>theme.media.mobile}){
  height:4rem;
  
  .title-icon{
    .mainTitle{
      font-size:1rem;
    }
  }
}
@media(max-width:${({theme})=>theme.media.tab}){
  height:4.5rem;
}
`;

export default Header
