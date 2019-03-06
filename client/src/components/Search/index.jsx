import React, { Component } from "react";
import ButtonAppBar from "../ButtonAppBar"
import { Input, FormBtn, SaveBtn } from "../Form";
import { Col, Row, Container } from "../Grid";
import { List, ListItem } from "../List";
import axios from "axios";
class Search extends Component {
  state = {
    search: "",
    result: []
  };
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  apiSearch = event => {
    event.preventDefault();
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${this.state.search}`)
      .then(res => this.setState({ result: res.data.items }));
  };

  

  render() {
    return (
      <div>
        <form>
        <Container>
              <ButtonAppBar/>
            <Input
              name="search"
              value={this.state.search}
              placeholder="Title (required)"
              onChange={this.handleInputChange}
            />
            <FormBtn disabled={!this.state.search} onClick={this.apiSearch}>
             Add An Item That You Ate Today
            </FormBtn>
            <Row>
              <Col size="md-6" />
              <Col size="md-12 md-12">
                {this.state.result.length ? (
                  <List>
                    {this.state.result.map((food, index) => {
                      return (
                        <ListItem key={food.id}>
                          <a>
                            <h3 name="title">
                              <a
                                href={food.volumeInfo.infoLink}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {food.volumeInfo.title}
                              </a>
                            </h3>
                            <h6>{food.volumeInfo.subtitle}</h6>
                            <h5 name="authors">
                              Written by {food.volumeInfo.authors[0]}
                            </h5>
                            <br />
                            <div className="card">
                              <div className="img-container">
                                <img
                                  name="link"
                                  value={this.state.link}
                                  alt={food.volumeInfo.title}
                                  src={food.volumeInfo.imageLinks.thumbnail}
                                  name="image"
                                />
                              </div>
                            </div>
                            <p name="description">
                              {food.volumeInfo.description}
                            </p>
                            <SaveBtn
                              id={index}
                              onClick={this.handleFormSubmit}
                              hidden={false}
                            >
                              Add This Food
                            </SaveBtn>
                          </a>
                        </ListItem>
                      );
                    })}
                  </List>
                ) : (
                  <h3>No Results to Display</h3>
                )}
              </Col>
            </Row>
          </Container>
        </form>
      </div>
    );
  }
}
export default Search;