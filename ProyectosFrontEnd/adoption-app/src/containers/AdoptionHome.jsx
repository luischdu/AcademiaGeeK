import React, { Component } from "react";
import axios from 'axios';
import { Flex, Heading, StackDivider, Text, VStack } from "@chakra-ui/react";

import CategorieItem from "../components/CategorieItem";

export default class AdoptionHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: null,
      data: undefined,
    };
  }

  fetchPetsData = () => {
    this.setState({
        loading: true,
        error: null
    })

    axios
        .get("http://localhost:3004/dogs")
        .then( res => {
            this.setState({
                loading:false,
                data : res.data
            })
        })
        .catch( error => {
            this.setState({
                loading: false,
                error: error
            })
        }) 
  }
  
  componentDidMount() {
    this.fetchPetsData()
  }

  render() {

    if( this.state.loading === true && !this.state.data){
        return <h1>Cargando...</h1>
    }

    if(this.state.error){
        return <h1> Ups! tenemos problemas :/</h1>
    }

    console.log(this.state.data)

    return (
      <Flex direction="column" mt="2" alignItems="center">
        <Heading mt="5" mb="5">
          Adopta una adorable mascota
        </Heading>
        <Text mb="5" textStyle="h3">
          Categoría de mascotas
        </Text>
        <VStack
          divider={<StackDivider borderColor="gray.200" />}
          spacing={4}
          align="center"
        >
          <CategorieItem />
          <Heading> Listar las Categorías</Heading>
          {
              this.state.data.map( pet => {
                  return(
                      <>
                        <h1>{pet.name}</h1>
                        <h2>{pet.breed}</h2>
                      </>
                  )
              })
          }
        </VStack>
      </Flex>
    );
  }
}
