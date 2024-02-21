import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "work Sans", sans-serif;

    }
    html{
        font-size: 62.5%;
        overflow-x: hidden;
    }
    a{
        text-decoration: none;    
    }
    li{
        list-style-type: none;
    }
    input{
        height: 3rem;
    }

    hr{
        width: 90%;
        height: 2px;
    }

    // Reusable code
    .container{
        margin: 0 10rem;
        max-width: 120rem;    
        // margin: 0 auto;
        // padding: 0 12rem;
    }
    .grid{
        display:grid;
        gap: 9rem;
    }
    .grid-two-columns{
        grid-template-columns: repeat(2,1fr )
    }
    .grid-three-columns{
        grid-template-columns: repeat(3,1fr )
    }
    .grid-four-columns{
        grid-template-columns: 1fr 1.2fr .5fr .8fr;
    }
    .grid-five-columns{
        grid-template-columns: repeat(5,1fr )
    }

    .common-heading{
    font-size: 3.8rem;
    font-weight: 600;
    margin-bottom: 6rem;
    text-transform: capitalize;
    }

    .intro-data {
      margin-bottom: 0;
      text-transform: uppercase;
      color: #5138ee;
    }

    input,textarea{

    }
    
    input[type="submit"]{
    
    }
    .btn{
        width:18rem;
        border: 2px solid white;
        background: #6495ED;
        color: white;
        padding: 0.9rem 0.2rem;
        text-transform: uppercase;
        border-radius: 5px;
        &:hover{
            cursor:pointer;
            background-color:#8A2BE2;
        }
        
    }
    

@media(max-width:${({theme})=>theme.media.mobile}){
    html{
        font-size: 50%;
    }
    .grid{
        gap: 3.2rem;
    }
    .grid-two-column , .grid-three-column , .grid-four-column{
        grid-template-columns: 1fr;
    }
}

@media(max-width:${({theme})=>theme.media.tab}){
    .container{
        max-width: 130rem;
        padding: 0 3.2rem;
    }
}

`;