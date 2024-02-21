import React, {useState} from 'react'
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import {FiShoppingCart } from 'react-icons/fi'
import {CgMenu , CgClose} from 'react-icons/cg';
import { useCartContext } from '../../context/CartContext';

 const Nav = () => {

  const [navMenu, setNavMenu] = useState(true);
  const { cart , clearCart} = useCartContext();
  return (
    <Navbar>
      <div className="navbar">
        <ul className= {navMenu ? "navbar-List active" : "navbar-List"}>
            
            <li className='navbarListItem '>
                <NavLink to='/' className='navbar-link'>Home</NavLink>
            </li>
            <li className='navbarListItem '>
                <NavLink to='/about' className='navbar-link'>About</NavLink>
            </li>
            <li className='navbarListItem'>
                <NavLink to='/products' className='navbar-link'>Products</NavLink>
              </li>
            <li className='navbarListItem '>
                <NavLink to='/contact' className='navbar-link'>Contact</NavLink>
              </li>
            <li  className='navbarListItem navbar-shoppingCart'><NavLink to='/cart' className='navbar-link cartTrollyLink'>
              <FiShoppingCart className='cartTrolly'/> <span className='totalCartItems'>{cart.length}</span>
              </NavLink>
            </li>
        </ul>
        <div className="mobile-navbar-btn">
         {navMenu && <CgMenu name= "menu-outline" className='mobile-nav-icon' onClick={()=>console.log(setNavMenu(false)) }/>
         }
          {!navMenu && 
          <CgClose name = 'close-outline' className='mobile-nav-icon close-outline' onClick={()=>setNavMenu(true)}/>
        }
        </div>
      </div>
    </Navbar>
  )
}

const Navbar = styled.nav`

.navbar-List{
  display:flex;
  list-style-type : none;
  gap:4.8rem;

  .navbar-link{
    text-decoration : none;
    position: relative;
  }
  .active{
    
  }
  .active::after{
    position: absolute;
    content:" ";
    height: 2px;
    width: 100%;
    background-color: #7676e9;
    bottom: -2px;
    left: 0;
  }
  .cartTrollyLink{
    position:relative;
    .cartTrolly{
      position:relative;
      font-size:2rem
    }
    .totalCartItems{
      position:absolute;
      background-color:#a366ff;
      color:#fff;
      padding:0.4rem;
      font-size:0.8rem;
      top:-90%;
      left:70%;
      border-radius:50%;
    }
  }
}
.mobile-navbar-btn{
  display:none;
}
@media(max-width:${({theme})=>theme.media.mobile}){
  .navbar{
    position:absolute;
    left: 0%;
    top:0;
    display:flex;
    z-index:9;
    flex-direction:column-reverse;
    height:100vh;
    width:100vw;
    flex-direction:column;

    .navbar-List{
      display:inline-block ;
      font-size:3rem;
      z-index:-1;
      color:black;
      top:3%;
      width:100vw;
      position: fixed;
      font-size: 3rem;
      z-index: 99;
      color: black;
      background: #fff;
      height: 100%;
      .navbarListItem{
        border-bottom:1px solid gray;
        margin:20px 0;
      }
      .active{
        display:inline-block;
        color:green;
      }
      .navbar-shoppingCart{
        
        .cartTrolly{
          font-size:3.2rem
        }
        .totalCartItems{
            top:-20%;
            font-size:1.1rem
        }
      }
    }
    .mobile-navbar-btn{
      position:fixed;
      position: relative;
      text-align: right;
      margin-right: 20px;
      margin-top: 1.2rem;
      font-size: 2rem;
      .mobile-nav-icon{
        right:0;
      }
    }
    .active{
      // background-color:green;
      display:none;
    }
  }
  .mobile-navbar-btn{
    display:inline-block;
  }
}
@media(max-width:${({theme})=>theme.media.tab}){
  
  .navbar{

    padding-right:5rem;
    .navbar-List{
      text-align:center;
      gap:3.5rem;
    }
  }
}

`;




export default Nav
