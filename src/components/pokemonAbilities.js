import React from 'react'
import {Text, TouchableOpacity, View} from 'react-native'
export default props => {
  return (
    <View
      style={{
        marginTop : 5,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{fontSize: 24}}>Abilities</Text>
      <View style={{flexDirection: 'row'}}>
        {props.abilityDescription.length > 0
          ? props.abilityDescription.map(ability => {
              return (
                <View key={ability}>
                  <TouchableOpacity onPress = {()=>props.navigation.navigate('AbilitiesDescription',{id: props.id,ability : ability[0],abilityName : ability[1]})}>
                  <Text
                    style={{
                      textTransform: 'capitalize',
                      fontSize: 20,
                      textAlign: 'center',
                      marginRight: 10,
                      color : props.color
                    }}>
                    {ability[1]}
                  </Text>
                  </TouchableOpacity>
                </View>
              )
            })
          : false}
      </View>
    </View>
  )
}
