import React from 'react'
import {Text,View} from 'react-native'

export default props => {
  return ( <View
    style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      margin: 10,
    }}>
    <Text style={{fontSize: 24}}>Abilities</Text>
    {props.abilityDescription.length > 0
      ? props.abilityDescription.map(ability => {
          return (
            <View style={{width: 300}} key={ability}>
              <Text
                style={{
                  borderColor : props.color1,
                  borderBottomWidth: 2,
                  textTransform: 'capitalize',
                  fontSize: 20,
                  textAlign: 'center',
                  margin: 10,
                }}>
                {ability[0]}
              </Text>
              <Text style={{fontSize: 18, textAlign: 'center', margin: 10}}>
                {ability[1]}
              </Text>
            </View>
          )
        })
      : false}
  </View>

  )
}