import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import SaveBtn from "../../components/SaveBtn";

class Saved extends Component {
    state = {
      articles: [],
      subject: "",
      startYear: "",
      endYear: ""
    };
  
    componentDidMount() {
      this.loadArticles();
    }
  
    loadArticles= () => {
      API.getArticles()
        .then(res =>
          this.setState({ articles: res.data, subject: "", startYear: "", endYear: "" })
        )
        .catch(err => console.log(err));
    };
  
    deleteArticle = id => {
      API.deleteArticle(id)
        .then(res => this.loadArticles())
        .catch(err => console.log(err));
    };
  
    handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    };

    render() {
      return (
        <Container fluid>
          <Row>
            <Col size="md-12">
              
            </Col>
          </Row>
        </Container>
      );
    }
  }
  
  export default Saved;
  