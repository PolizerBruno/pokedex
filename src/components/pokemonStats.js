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
        <View style={{backgroundColor : '#000000'}}>
            <Text style={{ alignItems: "center", fontSize: 30, textAlign: "center",color:'#FFFFFF' }}>Stats</Text>
            {state.status.map(stat => {
                return (
                    <View key={stat[0]} style={{ flex: 1, flexDirection: "row" ,padding: 10,alignItems :"center",}}>
                        <Text style={{color : '#FFFFFF', width: 120, fontSize: 14, textAlign: "right", textTransform: 'capitalize',margin : 10}}>{stat[0]}</Text>
                        <View style={{width : Dimensions.get("screen").width*0.35,justifyContent:"center"}}>
                            <Text style={{minWidth : 30,maxHeight : 25, width: `${stat[1]}%`,maxWidth :'150%', fontSize: 12, textTransform: 'capitalize', backgroundColor: colors.typesColors[String(stat[0]).split('-').join('').toUpperCase()], textAlign: "center", padding: 5 }}>{stat[1]}</Text>
                        </View>
                    </View>
                )
            })}
        </View>
    )
}