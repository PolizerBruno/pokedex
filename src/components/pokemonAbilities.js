import React from 'react'
import {Text, View} from 'react-native'

export default props => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
      }}>
      <Text style={{fontSize: 24}}>Abilities</Text>
      <View style={{flexDirection: 'row'}}>
        {props.abilityDescription.length > 0
          ? props.abilityDescription.map(ability => {
              return (
                <View key={ability}>
                  <Text
                    style={{
                      textTransform: 'capitalize',
                      fontSize: 20,
                      textAlign: 'center',
                      margin: 10,
                    }}>
                    {ability[0]}
                  </Text>
                  <Text
                    style={{
                      fontSize: 18,
                      textAlign: 'center',
                      margin: 10,
                    }}></Text>
                </View>
              )
            })
          : false}
      </View>
    </View>
  )
}
