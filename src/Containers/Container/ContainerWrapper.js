import styled from "styled-components"


const ContainerWrapper = styled.div`
    .btn:focus{box-shadow: none!important}
    .MuiAppBar-colorPrimary{background-color: violet !important;}
    .v{color: violet !important}
    .MuiButtonBase-root::after{
        content: '';
        display: block;
        width: 0%;
        height: 3px;
        background-color: violet;
        transition: 1s
    }
    .MuiButtonBase-root:hover::after {
        width:100%
    }
`

export default ContainerWrapper;
