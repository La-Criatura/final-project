import styled from 'styled-components';

const NavBar = styled.div`
    align-self: flex-start
    width: 100vw;
    height: 3rem;
    background-color: lightblue;
    display:flex;
    justify-content: space-between;
    align-items: center;
    
    ul {
        display: flex;
        justify-content: flex-end;
        list-style: none;
        text-decoration: none;
    }

    li {
        padding-right: 1rem;
    }

    a {
        text-decoration: none;
    }
    
`;
export default NavBar