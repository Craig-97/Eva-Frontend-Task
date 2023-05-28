import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    outline:0;
    box-sizing:border-box;
    font-family: 'DM Sans', sans-serif; 
}
body {
    background: rgb(240, 240, 237);
}
#root{
    margin:0 auto;
}
`;
