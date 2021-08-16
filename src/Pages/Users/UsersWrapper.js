import styled from "styled-components";

const UsersWrapper = styled.div`
    background-color: rgba(236, 154, 236, 0.3);
    .av{width: 50px; height:50px; border-radius:50%; object-fit:cover}
    th,td{border: 1px solid violet; padding: 0.5rem 1rem;text-align: center;}
    th{background-color: violet;padding: 1rem; color:white !important}
    td{background-color: white}
    tr{transition: .5s}
    tr:hover{background-color: rgba(236, 154, 236, 0.3);}
    .dropdown-toggle{
        background-color: transparent !important;
        color: violet !important;
        border: 1px solid violet !important;
        &::after{display: none !important;}
    }
`
export default UsersWrapper