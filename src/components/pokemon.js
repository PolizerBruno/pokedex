import React from 'react'
import {Image, Text, TouchableHighlight, View} from 'react-native'
import images from './images'
import Style from '../style/sytle'
import pokemon from './pokedex.json'
export default props => {
  const state = {
    type: '',
  }
  const typesColors = {
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
  }
  const findPokemon = number => {
    pokemon.forEach(element => {
      if (element.id == number) {
        state.type = element.type
      }
    })
  }

  findPokemon(props.number)
  return (
    <View>
      <Image
        style={{
          backgroundColor: 'rgb(255,255,255)',
          borderRadius: 100,
          borderWidth: 4,
          borderColor: typesColors[state.type[0]],
        }}
        source={images[props.number]}
      />
      <Text
        style={{
          textTransform: 'capitalize',
          borderWidth: 1,
          marginTop: 10,
          borderRadius: 10,
          backgroundColor: 'rgba(0,0,0,1)',
          textAlign: 'center',
          flexWrap: 'wrap',
          color : typesColors[state.type[0]],
        }}>
        {props.name}
      </Text>
    </View>
  )
}
