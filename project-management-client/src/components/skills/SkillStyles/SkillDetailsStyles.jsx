import styled from 'styled-components'

const SkillDetailsTag = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center
    width: 100vw;
    height: 100vh;
    padding: 0 15rem;



    h1 {
        font-size: 2.5rem
        font-weight: 700
        margin-bottom: 2rem
    }

    form {
        border: 3px grey solid;
        width: 100%;
        margin: 0 15rem;
        display: flex;
        flex-direction: column;

        .top-section {
            display: flex;
            justify-content: space-between;

            .left-section {
                display: flex;
                flex-direction: column
            }
        }
        

        .input-container {
            height: 3rem;
            display: flex
            flex-direction: row
            align-items: center
            background-color: lightgrey;
            margin: 0 1rem 1rem 1rem;
            border: 2px solid grey;
            padding: .5rem;
            border-radius: 1.5rem;
            width: 26rem;

            label {
                margin-left: .5rem;
                font-weight: 700;
            }

            input {
                margin-left: 1rem;
                outline-style: none;
                font-size: 1rem;
                border: none;
                background-color: rgba(0,0,0,0)
            }
        }

    }
    
`;

export default SkillDetailsTag