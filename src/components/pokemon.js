import React from 'react'
import {Image, View} from 'react-native'
import images from './images'

export default props => {
  return (
    <View>
      <Image source={images[props.number]} style={{width: 150, height: 150}} />
    </View>
  )
}
