import React, { Component } from 'react'
import SearchBoxTag from './SearchBoxStyles'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class SearchBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listOfSkills: [],
            skillsToFilter: []
        }
    }

    getAllSkills = () => {
        axios.get(`http://localhost:5000/api/skills`, { withCredentials: true })
            .then(responseFromApi => {
                this.setState({
                    listOfSkills: responseFromApi.data,
                })
            })
    }

    componentDidMount() {
        this.getAllSkills();
    }

    searchSkill(e) {
        let newArr = [...this.state.listOfSkills];
        let filteredSkills = newArr.filter(skill =>
            skill.title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(e.target.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))
        )
        if(e.target.value){
            this.setState({
                ...this.state,  
                skillsToFilter: filteredSkills
            })
        } else {
            this.setState({
                ...this.state,
                skillsToFilter: []
        })
        }
    }

    render() {
        return (
            <SearchBoxTag>
                <input className="input is-primary" onChange={(e) => { this.searchSkill(e) }} />
                {/* {this.state.skillsToFilter.map((initialSkill, idx) => <div key={idx}> {initialSkill.title}</div>)} */}
                <Link to={{
                    pathname: '/search-results',
                    aboutProps: {
                        theFilteredSkills: this.state.skillsToFilter
                    }
                }}>Buscar</Link>
            </SearchBoxTag>
        )
    }
}
