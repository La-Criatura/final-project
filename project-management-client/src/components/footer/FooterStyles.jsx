import styled from 'styled-components'

const FooterTag = styled.div`
align-self: flex-end;
background-color: #303030;
color: white;
height: 20vh
width: 100vw;
display: flex;
justify-content: center;
padding: 1.5rem 0;
margin-top: 0rem;
div {
    width: 80vw;
    display: flex;
    justify-content: space-between;

    h3 {
        font-size: 2rem;
        font-weight: 500;
        margin-bottom: .6rem;
    }

    h4 {
        font-size: 1.1rem;
        color: #848484;
        font-weight: 400;
        margin-bottom: .5rem;
    }

    p {
        font-weight: 100;
        font-size: 0.8rem;
        margin-bottom: 0.3rem;
    }
}
`;

export default FooterTag