import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    div {
        box-sizing: border-box;
    }

	button {
		appearance: none;
        border: none;
        outline: none;
        box-sizing: border-box;
        cursor: pointer;
	}

	input {
		appearance: none;
        border: none;
        outline: none;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        padding-left: 10px;
		&::placeholder{
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
		}
		
	}
`

export default GlobalStyle