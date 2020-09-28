import axios from 'axios'
import React from 'react'
import {Text,View} from 'react-native'

export default props => {
    const state = {
        ability: [],
        abi : ''
    }

    const getAbilities = async abi => {
        for (i in abi) {
            const result = await axios.get(abi[i].ability.url)
            await state.ability.push([abi[i].ability.name, result.data.effect_entries[0].language.name == "en" ? result.data.effect_entries[0].effect : result.data.effect_entries[1].effect])
        }
    }
    getAbilities(props.hab)    
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", margin: 10 }}>
            <Text style={{ fontSize: 16 }}>Abilities</Text>
            {state.ability.map(ability => {
                return (<View style={{ width: 300,}} key={ability[0]}><Text style={{borderBottomWidth : 2,textTransform : "capitalize", fontSize: 14, textAlign: "center", margin: 10 }}>{ability[0]}</Text><Text style={{ fontSize: 14, textAlign: "center", margin: 10 }}>{ability[1]}</Text></View>)
            })}
        </View>
    )
}