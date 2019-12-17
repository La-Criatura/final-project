import styled from 'styled-components'

const AddSkillTag = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center
    width: 100vw;
    height: 90vh;
    padding: 0 15rem;


    h1 {
        font-size: 2.5rem
        font-weight: 700
        margin-bottom: 1rem
    }

    form {
        border: 3px grey solid;
        width: 100%;
        margin: 0 15rem;
        display: flex;
        flex-direction: column;
        padding: 1rem;
        background-color: white;
        border-radius: 1rem;

        .top-section {
            display: flex;
            justify-content: space-between;

            .left-section {
                display: flex;
                flex-direction: column
            }

            .right-section {
                display: flex;
                flex-direction: column
                align-items: center;
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

        .category {
            label {
                margin-right: .5rem;
            }
            select {
                border: none
                width: 50%
                background-color: lightgrey;
                font-size: 1rem;

            }
        }

        .textarea-container {
            height: 100%
    
            
            label {
                margin-right: .5rem;
            }

            textarea {
                height: 3rem;
                width: 100%
                background-color: white;
                font-size: 1rem;
                border-radius: 1rem;
                padding: 1rem;
            }

        }

    }

    .bottom-section {
        display: flex;
        flex-direction: column;
        align-items: center;

        .image-container {
            width: 30vw
            height: 30vh
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

    }


    .btn {
        box-sizing: border-box;
        border:3px black solid;
        color: white;
        border-radius: 1rem;
        height: 2.5rem;
        padding: .35rem 2rem;
        font-weight: 700;
        margin-top: 1rem;;
    }

    .login {
        background-color: #053763;
        font-size: 1rem;
        cursor: pointer;
    }
    

    .search-box-container {
        width: 26rem;
    }

    .dropdown-container {
        position: relative;
        z-index: 1000;
        display: flex;
        align-items:center;
        border: 2px solid grey;
        border-radius: 1rem;
        padding: 1rem;
        background-color: lightgrey;
        width: 26rem;
        height: 100%
        margin: 0 1rem 1rem 1rem;
        
        label {
            font-weight: 700;
            margin-right: .5rem;
        }

        input {
            background-color: white;
            width: 100%;
            height: 3rem;
            border-radius: 1rem;
            border: 1px grey solid;
            padding-left: 1rem;

        }
    }
`;

export default AddSkillTag