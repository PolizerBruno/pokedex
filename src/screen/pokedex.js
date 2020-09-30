import React, { Component } from 'react';
import { FlatList, TextInput, TouchableOpacity, View } from 'react-native';
import Style from '../style/sytle';
import Pokemon from '../components/pokemon';
import axios from 'axios';

export default class pokedex extends Component {
  state = {
    pokemons: '',
    searchInput: ''
  };

  query = async () =>
    await axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=807')
      .then((response) => {
        this.setState({ pokemons: response.data.results.filter((x) => { return String(x.name).toUpperCase().includes(String(this.state.searchInput).toUpperCase()) }) });
      });
  componentDidMount = async () => {
    await this.query();
  };

  render() {
    return (
      <View style={Style.pokedexPokemonContainer}>
        
        <TextInput placeholder={'Search'} style={Style.TextSearchInput} onChangeText={searchInput => this.setState({ searchInput }, () => this.query())} />
        <FlatList
          removeClippedSubviews={true}
          numColumns={3}
          data={this.state.pokemons}
          key={this.state.pokemons.name}
          renderItem={(item) => (
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('DetailPokemon', {
                  id: parseInt(String(item.item.url).split('/')[6]),
                })
              }
              style={Style.row3x4}>
              <Pokemon
                style={Style.FlatList}
                name={item.item.name}
                number={parseInt(String(item.item.url).split('/')[6])}
              />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.url}
        />
      </View>
    );
  }
}
