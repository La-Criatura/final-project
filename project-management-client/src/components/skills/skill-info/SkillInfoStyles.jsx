import styled from 'styled-components'

const SkillInfoTag = styled.div`
width: 100%;

border: 3px solid grey;
background-color: lightgrey;
border-radius: 1rem;
margin: 1rem;
padding: .5rem;
box-sizing: border-box;
display: flex;
align-items: center;
justify-content: center;

ul {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
}
li {
    margin: .5rem;
    background-color: grey;
    color: white;
    width: 15rem;
    height: 3rem;
    display: flex
    align-items: center;
    padding: 1rem;
    border-radius: 1rem;
}

.skill-title {
    font-weight: 800;
    font-size: 1.1rem;
}

`;

export default SkillInfoTag