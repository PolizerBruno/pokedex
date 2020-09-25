import React, {Component} from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Style from '../style/sytle';
import Icon from 'react-native-vector-icons/FontAwesome';
import pokemon from '../components/pokedex.json'
import images from '../components/images';
import Axios from 'axios';

export default class TaskList extends Component {
  state = {
    id: '',
    type : '',
    pokemonDetail: {},
    typesColors: {
      Normal: '#A8A77A',
      Fire: '#EE8130',
      Water: '#6390F0',
      Electric: '#F7D02C',
      Grass: '#7AC74C',
      Ice: '#96D9D6',
      Fighting: '#C22E28',
      Poison: '#A33EA1',
      Ground: '#E2BF65',
      Flying: '#A98FF3',
      Psychic: '#F95587',
      Bug: '#A6B91A',
      Rock: '#B6A136',
      Ghost: '#735797',
      Dragon: '#6F35FC',
      Dark: '#705746',
      Steel: '#B7B7CE',
      Fairy: '#D685AD',
    },
  };
  query = async (request) => {
    return await Axios.get(request).then((response) => {
      this.setState({pokemonDetail: response.data});
    });
  };

  findPokemon = (number) => {
    pokemon.forEach((element) => {
      if (element.id == number) {
        this.state.type = element.type;
      }
    });
  };

  componentDidMount = () => {
    this.setState({id: this.props.navigation.state.params.id});
    this.query(
      `https://pokeapi.co/api/v2/pokemon/${this.props.navigation.state.params.id}/`,
    );
    this.findPokemon(this.state.id)
    console.warn(this.state.type[0])
  };

  render() {
    return (
      <View style={Style.detailPokemonContainer}>
        <View style={Style.Header}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Pokedex')}>
            <Icon name={'arrow-circle-left'} size={30}></Icon>
          </TouchableOpacity>
          <TextInput placeholder={'Search'} style={Style.TextSearchInput} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            borderWidth: 10,
            borderColor: this.state.typesColors[
                this.state.type[0]
            ],
          }}>
          <Image style={{}} source={images[this.state.id]} />
          <Text style={Style.Text}>Name : {this.state.pokemonDetail.name}</Text>
        </View>
      </View>
    );
  }
}
