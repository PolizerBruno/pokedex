import {createAppContainer,createSwitchNavigator} from 'react-navigation'

import pokedex from '../screen/pokedex'
import detailPokemon from '../screen/detailPokemon'
import { createDrawerNavigator } from '@react-navigation/drawer';

const mainRoutes = {
    Pokedex : {
        name : 'Pokedex',
        screen : pokedex,
    },
    DetailPokemon : {
        name : 'DetailPokemon',
        screen : detailPokemon,
    }
}

const mainNavigator = createSwitchNavigator(mainRoutes,{
    initialRouteName : 'Pokedex'
})
export default createAppContainer(mainNavigator)