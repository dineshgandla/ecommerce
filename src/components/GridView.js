import React from 'react'
import styled from 'styled-components';
import Product from './Product'
const GridView = ({products}) => {
    // console.log(products);
  return (
    <Wrapper className='section' >
      <div className="container grid grid-three-columns">
        {
            products.map((currEle) =>{
                return <Product key={currEle.id} {...currEle}/>
            })
        }
      </div>
    </Wrapper>
  )
};

const Wrapper = styled.section`
  padding: 9rem 0;
  .container {
    max-width: 120rem;
  }
  .grid {
    gap: 3.2rem;
  }
  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    .caption{
      position:absolute;
      right:0;
      background:#fff;
      width:auto;4
      top:30%;
      padding: 5px 10px;
      border-radius:2rem;
      align-items: center;
    }
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.2);
    }
    img {
      max-width: 90%;
      margin-top: 1.5rem;
      height: 20rem;
      transition: all 0.2s linear;
    }
  }
  .card {
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    .card-data {
      padding: 0 1rem;
    }
    .card-data-flex {
      margin: 2rem 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .card-data--price {
      color: ${({ theme }) => theme.colors.helper};
    }
    h3 {
      color: ${({ theme }) => theme.colors.text};
      text-transform: capitalize;
    }
    .btn {
      margin: 2rem auto;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover {
        background-color: rgb(98 84 243);
      }
      &:hover a {
        color: #fff;
      }
      a {
        color: rgb(98 84 243);
        font-size: 1.4rem;
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}){
    padding: 0;
    .grid-three-columns{
      grid-template-columns: repeat(2,1fr);
      width: 80%;
      margin: auto;
      padding: 0;
    }
      .grid{
        gap:1rem;
        }
  }
    @media (max-width: ${({ theme }) => theme.media.small_mobile}){
      .grid-three-columns{
      grid-template-columns: repeat(1,1fr);
      width: 100%;
      margin: 0;
      padding: 0;
    }
    }
`;


export default GridView
