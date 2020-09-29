import React from 'react'
import { Dimensions, Text, View } from 'react-native'
import colors from '../style/typeColors'


export default props => {

    const state = {
        status: []
    }
    const getStates = states => {
        state.status=[]
        for (s in states) {
            state.status.push([states[s].stat.name, states[s].base_stat])
        }
    }
    getStates(props.stats)
    return (
        <View style={{alignItems : "center", }}>
            <Text style={{alignItems : "center", fontSize: 30, textAlign: "center", }}>Stats</Text>
            <View style={{alignItems : "center",justifyContent:"center", width: Dimensions.get('screen').width*0.6}}>
                {state.status.map(stat => {
                    return (
                        <View key={Math.random()} style={{flex : 1,minWidth : '60%',width: `${stat[1]}%`, borderWidth: 2, margin: 10, marginRight: 20,alignItems:"center" }}>
                            <Text style={{width : '100%', fontSize: 14, textTransform: 'capitalize',backgroundColor: colors.typesColors[String(stat[0]).split('-').join('').toUpperCase()], textAlign: "center",padding : 5 }}>{stat[0]} - {stat[1]}</Text>
                        </View>
                    )
                })}
            </View>
        </View>
    )
}