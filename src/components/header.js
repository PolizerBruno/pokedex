import React from 'react'
import { Image, Text, View } from 'react-native'
import colors from '../style/typeColors'
import images from './images'

export default props => {

    const FormatNumberLength = (num, length) => {
        let r = '' + num
        while (r.length < length) {
            r = '0' + r
        }
        return r
    }
    return (
        <View style={{ flex: 1 }}>
            <View
                style={{

                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                
                <Text
                    style={{
                        textTransform: 'capitalize',
                        textAlign: 'center',
                        fontSize: 36,
                        color: colors.typesColors[String(props.types[0]).toUpperCase()],
                    }}>
                    {props.name}
                </Text>
                <Image style={{
                }} source={images[props.number]} />
                <View style={{ flexDirection: "row" }}>
                    {props.types.map((type) => {
                        return (
                            <Text
                                key={Math.random()}
                                style={{
                                    backgroundColor: colors.typesColors[String(type).toUpperCase()],
                                    margin: 4,
                                    padding: 4,
                                    borderRadius: 5,
                                    textTransform: 'capitalize',
                                }}>
                                {type}
                            </Text>
                        )
                    })}
                </View>

            </View>
            <View
                style={{
                    marginTop: 4,
                    borderRadius: 10,
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

            </View>
        </View>
    )
}