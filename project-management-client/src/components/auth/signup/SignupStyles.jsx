import styled from 'styled-components'

const SignupTag = styled.div`

display: flex;

justify-content: center;
align-items: center
width: 100vw;
height: 100vh;


header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
}

div.container {
    border: 1px solid grey;
    padding: 1rem;
    width: 40vw;
    height: 40vh;
}

section {
    display: flex;
    flex-direction: column;
    align-items: center;
    
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 1rem;
    }
}

`;

export default SignupTag