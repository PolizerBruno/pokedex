import React from 'react'
import { Dimensions, Text, View } from 'react-native'
import colors from '../style/typeColors'


export default props => {

    const state = {
        status: []
    }
    const getStates = states => {
        for (s in states) {
            state.status.push([states[s].stat.name, states[s].base_stat])
        }
    }
    

    getStates(props.stats)
    return (
        <View >
            <Text style={{ fontSize: 30, textAlign: "center", }}>Stats</Text>
            <View style={{ width: Dimensions.get('screen').width*0.6}}>
                {state.status.map(stat => {
                    return (
                        <View key={stat[0]} style={{minWidth : '38%',width: `${stat[1]}%`, borderWidth: 2, margin: 10, marginRight: 20 }}>
                            <Text style={{ fontSize: 12, textTransform: 'capitalize', backgroundColor: colors.typesColors[String(stat[0]).split('-').join('').toUpperCase()], textAlign: "left",padding : 5 }}>{stat[0]} - {stat[1]}</Text>
                        </View>
                    )
                })}
            </View>
        </View>
    )
}