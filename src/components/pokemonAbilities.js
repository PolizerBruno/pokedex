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
      <Text style={{fontSize: 30,borderBottomWidth : 2}}>Abilities</Text>
      <View style={{flexDirection: 'row',flexWrap :'wrap',justifyContent :'space-evenly'}}>
        {props.abilityDescription.length > 0
          ? props.abilityDescription.map(ability => {
              return (
                <View key={ability}>
                  <TouchableOpacity onPress = {()=>props.navigation.navigate('AbilitiesDescription',{id: props.id,ability : ability[0],abilityName : ability[1]})}>
                  <Text
                    style={{
                      textTransform: 'capitalize',
                      fontSize: 26,
                      textAlign: 'center',
                      marginRight: 10,
                      color : props.color,
                      padding : 10,
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
