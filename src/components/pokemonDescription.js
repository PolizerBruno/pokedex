import React from 'react'
import {Text,View} from 'react-native'

export default props => {
    return (<View style={{flex: 1,alignItems : "center",justifyContent : 'center'}}>
                <Text style={{width:'95%',fontSize:16,textAlign : "center"}}>{props.description}</Text>
            </View>
    )
}