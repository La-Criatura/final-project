import styled from 'styled-components'

const SkillCardTag = styled.div`
width: 22rem;
height: 25rem;
border: 3px solid black;
border-radius: .5rem;
margin: 1rem;
padding: 2rem;
box-sizing: border-box;
background-color: lightgrey;
color: black;
.image-container {
    width: 100%
    height: 50%
    margin-bottom: 0.5rem;
    border: 3px solid grey;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
}   

img {
    object-fit: cover
    height: 100%    
    width: 100%
    object-position: center center;
         
    }

h2 {
    text-align: left;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 0rem;
}

div.card-data {
    display: flex;
    justify-content: space-between;

    p {
        width: 8rem;
        background-color: grey
        text-align: left;
        padding-left: .8rem;
        color: white
        height: 2rem;
        display: flex
        align-items: center;
        margin-bottom: 0.5rem;
        border-radius: 1rem;
    }
}

p {
    text-align: left;
}

`;

export default SkillCardTag