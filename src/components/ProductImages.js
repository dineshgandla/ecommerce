
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const ProductImages = ({images = [{url:''}]}) => {
  
  const [mainImage , setMainImage] = useState(images[0].url);
 
  
  return (
    <Wrapper>
      <div className="main-screen">
        
        <img src={mainImage.url} alt={mainImage.filename}/>
      </div>
      <div className="grid grid-four-columns">
        {
          images.map((currEle , index)=>{
            return(
              
              <figure>
                <img src={currEle.url}
                alt={currEle.filename}
                className='box-image--style'
                key={index}
                onClick={()=>setMainImage(currEle)}
                />
              </figure>
            )
          })
        }
      </div>
      
    </Wrapper>
  )
}
const Wrapper = styled.section`
display: grid;
// grid-template-columns: 0.4fr 1fr;
gap: 1rem;
.grid {
  display:flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
  width: 100%;
  gap: 1rem;
   order: 2; 
  img {
    max-width: 100%;
    max-height: 100%;
    background-size: cover;
    object-fit: contain;
    cursor: pointer;
    box-shadow: ${({ theme }) => theme.colors.shadow};
  }
}
.main-screen {
  display: grid;
  place-items: center;
  order: 1;
  img {
    max-width: 100%;
    height: 350px;
    box-shadow: ${({ theme }) => theme.colors.shadow};
  }
}
.grid-four-columns {
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 1fr);
}
`

export default ProductImages
