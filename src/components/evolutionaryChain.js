import React from 'react'
import {Image, Text, TouchableOpacity, View} from 'react-native'
import images from '../components/images'

export default props => {
  const state = {details: '', array: [], id: []}

  const setDetails = () => {
    for (i in props.evolutionaryChain.chain) {
      state.details = props.evolutionaryChain.chain
    }
  }
  const extract = (obj, keyToExtract) => {
    for (i in obj) {
      if (i == keyToExtract) {
        state.array.push([parseInt(String(obj[i].url).split('/')[6]), obj[i]])
      } else {
        typeof obj[i] == 'object' ? extract(obj[i], keyToExtract) : false
      }
    }
    state.array.sort((a, b) => a[0] - b[0])
  }
  setDetails()
  extract(state.details, 'species')
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text
        style={{
          textAlign: 'center',
          textTransform: 'capitalize',
          fontSize: 24,
        }}>
        Evolutionary Chain
      </Text>
      <View
        style={{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly'}}>
        {state.array.map(pokemon => {
          return (
            <TouchableOpacity
              key={pokemon[0]}
              /* onPress={() => {
                props.navigation.push('DetailPokemon', {id: pokemon[0]})
              }} */>
              <View style={{padding: 10, alignItems: 'center'}}>
                <Image source={images[pokemon[0]]} />
                <Text
                  style={{
                    fontSize: 16,
                    textTransform: 'capitalize',
                    textAlign: 'center',
                  }}>
                  {pokemon[1].name}
                </Text>
              </View>
            </TouchableOpacity>
          )
        })}
      </View>
    </View>
  )
}
