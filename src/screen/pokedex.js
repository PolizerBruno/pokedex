import React, {Component} from 'react';
import {FlatList, ScrollView, View} from 'react-native';
import Style from '../style/sytle';
import Pokemon from '../components/pokemon';
import axios from 'axios';

/*   const getPokemons = async () => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=9')
    .then(response =>response.json())
    .then(console.log)
  }; */

export default class pokedex extends Component {
  state = {
    pokemons: '',
  };

  query = async () =>
    await axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=9')
      .then((response) => {
        this.setState({pokemons: response.data.results});
      });

  componentDidMount = () => {
    this.query();
  };

  render() {
    return (
      <View style={Style.pokedexPokemonContainer}>
        <FlatList
          style={Style.FlatList}
          data={this.state.pokemons}
          renderItem={(item) =>   <ScrollView><Pokemon name={item.item.name} number={1} /></ScrollView>}
          keyExtractor={(item) => item.url}
        />
      </View>
    );
  }
}
