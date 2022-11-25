import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

:root {
   --background: #f8f2f5; 
   --shape:#fff; 

   --red: #e52e40;
   --blue: #5429cc;
   --blue-light:#6933ff;
   --green: #33cc95;

   --text-title: #363f5f;
   --text-body: #969c83;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

//Font-size: 16px (Desktop)
html {
    @media (max-width:1080px){
        font-size: 93,75%; //15px
    }

    @media (max-width:720px){
        font-size: 87,5%; //14px
    }
}

body {
    background: var(--background);
   -webkit-font-smoothing: antialiased; 
}

body, input, textarea, button{
    font-family: 'Poppins', sans-serif;
}

body, input, textarea{
    font-weight: 400;
}

h1, h2, h3, h4, h5, h6{
    font-weight: 600;
}

button{
    cursor: pointer;
    font-weight: 500;
}

[disabled]{
    opacity: 0.6;
    cursor: not-allowed;
}

.react-modal-overlay{
    background-color: rgba(0,0,0,0.5);

    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    align-items: center;
    justify-content: center;
}

.react-modal-content{
    max-width: 576px;
    width: 100%;

    background-color: var(--background);
    padding: 3rem;
    border-radius: 0.25rem;

    position: relative;

}

.react-modal-close{
    position: absolute;

    top: 1.5rem;
    right: 1.5rem;
    border: 0;
    background: transparent;

    transition: filter 0.2s;

    &:hover{
        filter: brightness(0.8);
    }

}
`