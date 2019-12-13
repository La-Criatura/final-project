import styled from 'styled-components'

const FooterTag = styled.div`
align-self: flex-end;
background-color: #053763;
color: white;
width: 100vw
display: flex;
justify-content: center
padding: 2rem 0;
div {
    width: 80vw;
    display: flex;
    justify-content: space-between

    h3 {
        font-size: 2rem;
        font-weight: 600;
        margin-bottom: .6rem;
    }

    h4 {
        font-size: 1.2rem;
        font-weight: 600;
        margin-bottom: .6rem;
    }

    p {
        margin-bottom: .5rem;
    }
}
`;

export default FooterTag