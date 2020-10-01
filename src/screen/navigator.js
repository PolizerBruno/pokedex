import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import pokedex from '../screen/pokedex'
import detailPokemon from '../screen/detailPokemon'
import abilitiesDescription from './abilitiesDescription'

const mainRoutes = {
    Pokedex : {
        name : 'Pokedex',
        screen : pokedex,
    },
    DetailPokemon : {
        name : 'DetailPokemon',
        screen : detailPokemon,
    },
    AbilitiesDescription : {
        name : 'AbilitiesDescription',
        screen : abilitiesDescription,
    }
}

const mainNavigator = createSwitchNavigator(mainRoutes,{
    initialRouteName : 'Pokedex'
})
export default  createAppContainer(mainNavigator)