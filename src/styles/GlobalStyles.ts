import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root{
        --color-primary: #27ae60;
        --color-primary50: #93D7AF;
        --color-secondary: #eb5757;

        --color-grey600: #333333;
        --color-grey300: #828282;
        --color-grey100: #e0e0e0;
        --color-grey0: #f5f5f5;

        --color-negative: #e60000;
        --color-warning: #ffcd07;
        --color-sucess: #168821;
        --color-information: #155bcb;

        --font-heading1: 1.625rem;
        --font-heading2: 1.375rem;
        --font-heading3: 1.125rem;

        --font-headline: 1rem;

        --font-body: .875rem;

        --font-caption: .75rem;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        font-family: 'Inter', sans-serif;
    }

    button, a {
        cursor: pointer;
    }

    ul {
        list-style: none;
    }
`