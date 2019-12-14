import styled from 'styled-components'

const DashboardTag = styled.div`
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    section.my-skills {
        background-color: white;
        width: 95vw
        border: 3px #053763 solid;
        border-radius: 2rem;
        margin: 1rem 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1rem 0;

        h2 {
            font-weight: 600;
            font-size: 1.5rem;
            margin-bottom: .5rem;
        }

        p {
            margin-bottom: 1rem;
        }
    }

    section.suggested-skills{
        background-color: white;
        border: 3px #053763 solid;
        border-radius: 2rem;
        margin: 1rem 2rem;
        width: 95vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2rem;

        h2 {
            font-weight: 600;
            font-size: 1.5rem;
            margin-bottom: .5rem;
        }

        p {
            margin-bottom: 1rem;
        }

        .category-links {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            margin-bottom: 1rem;
            
    
            li {
                background-color: #F5CCCC;
                width: 8rem;
                height: 8rem;
                margin: .5rem;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                border: 3px solid black;
                border-radius: 50%
                cursor: pointer;
                 
                img {
                    width: 3rem;
                }

                a {
                    display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                color: black
                font-weight: 600
                }
    
            }
    
            li.music {
                background-color: #F5CCCC;   
                a {
                    text-decoration: none;
                    color: black
                    font-weight: 600
                }
            }
    
            li.sports {
                background-color: #F5CCCC;   
                a {
                    text-decoration: none;
                    color: black
                    font-weight: 600
                }
            }
    
            li.education {
                background-color: #F5CCCC;   
                a {
                    text-decoration: none;
                    color: black
                    font-weight: 600
                }
            }
    
            li.cuisine {
                background-color: #F5CCCC;   
                a {
                    text-decoration: none;
                    color: black
                    font-weight: 600
                }
            }
    
            li.languages {
                background-color: #F5CCCC;   
                a {
                    text-decoration: none;
                    color: black
                    font-weight: 600
                }
            }
    
            li.other {
                background-color: #F5CCCC;   
                a {
                    text-decoration: none;
                    color: black
                    font-weight: 600
                }
            }
    
        }
 
        
    }
`;

export default DashboardTag