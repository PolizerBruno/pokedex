import {StyleSheet, Dimensions} from 'react-native'

export default StyleSheet.create({
    Image:{
        flex : 10,
        alignItems : "center",
        justifyContent : "center",
        borderWidth : 10,
    },
    BackButton: {
        margin : 10,
        flex : 1,
        flexDirection : "row",
        alignItems : "center",
        justifyContent : "center",

    },
    Text : {
        fontSize : 16,
        textAlign : "center",
        textTransform : "capitalize"
    },
    pokemonData : {
        flex : 1,
    },
    pokemonDetails: {
        flexDirection : "row",
    },
    Header : {
        flexDirection : "row",
        alignItems : "center",
        justifyContent : "center"
    },  
    detailPokemonContainer : {
        flex : 1,
        backgroundColor : '#F5E8E7',
        alignItems : "center",
        justifyContent : 'center',
    },
    TextSearchInput : {
        margin : 20,
        width : '60%',
        backgroundColor : 'rgb(255,255,255)',
        borderRadius : 40,
        textAlign : "center",
        fontSize : 18,
    },
    pokedexPokemonContainer:{
        flex : 1,
        backgroundColor : '#F5E8E7',
        alignItems : "center",
        justifyContent : 'center',
    },
    pokedexPokemon : {
        backgroundColor : 'rgba(255,255,255,0.7)',
        alignItems : 'center',
        width : Dimensions.get("screen").width / 3,
        height : Dimensions.get("screen").height / 4,
        justifyContent : "center",
    },
   
   
    FlatList : {
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems : "center"
    },
    row3x4 : {
        padding : 20,
        flexDirection : "row",
        width : Dimensions.get("screen").width / 3,
        height : Dimensions.get("screen").height / 4,
    }
})