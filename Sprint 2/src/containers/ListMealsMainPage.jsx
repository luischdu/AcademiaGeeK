import React, { Component } from 'react';
import axios from 'axios';
import CardMainPage from '../components/CardMainPage.jsx';
import NameMealsList from '../components/NameMealsList.jsx';

export default class ListMealsMainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categorie: 'guajolotas',
      loading: true,
      error: null,
      data: undefined,
    };
  }

  fetchPetsData = () => {
    this.setState({
      loading: true,
      error: null,
    });

    axios
      .get(`https://api-fake-sprint-guappjalotas.herokuapp.com/db`)
      .then((res) => {
        this.setState({
          loading: false,
          data: res.data,
        });
      })
      .catch((err) => {
        this.setState({
          loading: false,
          error: err,
        });
      });
  };

  componentDidMount() {
    this.fetchPetsData();
  }

  handleClickSelection = (e, section) => {
    e.preventDefault();
    this.setState({
      categorie: section,
    });
  };

  render() {
    if (this.state.loading && !this.state.data) {
      return <h1>Cargando....</h1>;
    }
    if (this.state.error) {
      return <h1>Upps....Problemas</h1>;
    }

    return (
      <div>
        <NameMealsList
          onClick={this.handleClickSelection}
          categorie={this.state.categorie}
          dbCategories={Object.keys(this.state.data)}
        />

        <CardMainPage data={this.state.data[this.state.categorie]} />

        {/* <AddedComboDescription categorie={this.state.categorie} /> */}
        {/* <CardOrderSection categorie={this.state.categorie} /> */}
        {/* <OrderSectionPayButton/> */}
      </div>
    );
  }
}
