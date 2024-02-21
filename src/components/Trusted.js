import React from 'react'
import styled from 'styled-components'

const Trusted = () => {
  return (
    <Wrapper>
        <div className="container">
            <h3>Trusted by 100+ companies</h3>
            <div className="brand-section-slider">
                <div className="slide">
                    <img
                        src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image2.png"
                        alt="trusted-brands"
                    />
                </div>
                <div className="slide">
                    <img
                        src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image3.png"
                        alt="trusted-brands"
                    />
                </div>
                <div className="slide">
                    <img
                        src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image4.png"
                        alt="trusted-brands"
                    />
                </div>
                <div className="slide">
                    <img
                        src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image5.png"
                        alt="trusted-brands"
                    />
                </div>
                <div className="slide">
                    <img
                        src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image8.png"
                        alt="trusted-brands"
                    />
                </div>
            </div>
        </div>
      
    </Wrapper>
  )
}

const Wrapper = styled.section`
    padding:4rem 0;
    background: ${({theme})=>theme.colors.bg};
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    h3{
        text-align: center;
        font-size: 2rem;
        font-weight: bold;
        text-transform: capitalize;
    }

    img{
        min-width: 10rem;
        height: 10rem;
        
    }
    .brand-section-slider{
        display: flex;
        margin-top:2rem;
        justify-content: center;
        align-items: center;

    }

    
@media(max-width:${({theme})=>theme.media.mobile}){
    
    .brand-section-slider{
        flex-direction: column;
    }
    .img{
        min-width: 5rem;
        height: 5rem;
    }
}
`

export default Trusted
