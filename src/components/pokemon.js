import React from 'react'
import { Image, Text, View} from 'react-native'
import images from './images'
import pokemon from './pokedex.json'
import colors from '../style/typeColors'
export default props => {
  const state = {
    type: [],
  }
  const findPokemon = number => {
    pokemon.forEach(element => {
      if (element.id == number) {
        state.type = element.type
      }
    })
  }

  findPokemon(props.number)

  const FormatNumberLength = (num, length) => {
    let r = '' + num
    while (r.length < length) {
      r = '0' + r
    }
    return r
  }

  return (
    <View>
      <Image
        style={{
          backgroundColor: 'rgb(255,255,255)',
          borderRadius: 100,
          borderWidth: 4,
          borderColor: colors.typesColors[String(state.type[0]).toUpperCase()],
        }}
        source={images[props.number]}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {state.type.map((type) => {
          return (
            <Text
              key={type}
              style={{
                backgroundColor: colors.typesColors[String(type).toUpperCase()],
                margin: 4,
                padding: 4,
                borderRadius: 5,
              }}>
              {type}
            </Text>
          )
        })}
      </View>
      <View
        style={{
          marginTop: 4,
          borderRadius: 10,
          backgroundColor: 'rgba(255,255,255,0.8)',
        }}>
        <Text
          style={{
            textTransform: 'capitalize',
            textAlign: 'center',
            fontSize: 14,
            color: '#5D5C5C',
          }}>
          N° : {FormatNumberLength(props.number, 3)}
        </Text>
        <Text
          style={{
            textTransform: 'capitalize',
            textAlign: 'center',
            fontSize: 16,
            color: colors.typesColors[String(state.type[0]).toUpperCase()],
          }}>
          {props.name}
        </Text>
      </View>
      
    </View>
  )
}
