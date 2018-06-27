import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import API from "../../utils/API";
import SaveBtn from "../../components/SaveBtn";

class Search extends Component {
    state = {
        articles: [],
        subject: "",
        startYear: "",
        endYear: ""
    };


    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
    };

    render() {
        return (
            <div>
                <h2> Search </h2>
                <form>
                    <div className="form-group">
                        <h4>Topic</h4>
                        <Input
                            value={this.state.subject}
                            onChange={this.handleInputChange}
                            name="subject"
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <h4>Start Year</h4>
                        <Input
                            value={this.state.startYear}
                            onChange={this.handleInputChange}
                            name="startYear"
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <h4>End Year</h4>
                        <Input
                            value={this.state.endYear}
                            onChange={this.handleInputChange}
                            name="endYear"
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <button type="submit" className="btn btn-warning" onClick={this.handleFormSubmission}>Search</button>
                </form>
            </div>
        );
    };
};

export default Search;