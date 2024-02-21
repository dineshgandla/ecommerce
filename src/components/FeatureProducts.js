import React from 'react'
import styled from 'styled-components'
import { useProductContext } from '../context/ProductContext'
import Product from './Product';

const FeatureProducts = () => {
  const {isLoading , featuredProducts} = useProductContext();
    // console.log(featuredProducts)
  if(isLoading){
    return <h3>Loading......</h3>
  }
  return (
    <Wrapper>
      <div className="container">
      <div className="common-heading">Our Featured Services</div>
        <div className="grid grid-three-columns">
            {
                featuredProducts.map((currElem)=>{
                    return <Product key={currElem.id} {...currElem}/>

                })
            }
        </div>
      </div>
    </Wrapper>
  )
}
  const Wrapper  = styled.section`
  padding: 3rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .common-heading
  {
    font-size:2.5rem;
    margin-top:2rem;
  }

  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.2s linear;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
     cursor: pointer;
    }
    
    &:hover img {
      transform: scale(1.1);
    }
    img {
      max-width: 90%;
      margin-top: 1.5rem;
      height: 20rem;
      transition: all 0.2s linear;
    }
    .caption {
      position: absolute;
      top: 15%;
      right: 10%;
      text-transform: uppercase;
      background-color: ${({ theme }) => theme.colors.bg};
      color: ${({ theme }) => theme.colors.helper};
      padding: 0.8rem 2rem;
      font-size: 1.2rem;
      border-radius: 2rem;
    }
}

.card-data {
    background-color: #fff;
    border-radius: 1rem;
    .card-data-flex {
        margin : 1rem ;
        display:flex;
        justify-content:space-between;
    }
    
}

  `
export default FeatureProducts
