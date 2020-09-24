import React from 'react';
import {Image, Text, View} from 'react-native';
import images from './images';
import Style from '../style/sytle';
export default (props) => {
  return (
    <View style={Style.pokedexPokemon}>
      <Image style={Style.pokemonImagem} source={images[props.number]} />
      <Text style={Style.pokemonName}>{props.name}</Text>
    </View>
  );
};
