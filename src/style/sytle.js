import {StyleSheet, Dimensions} from 'react-native'

export default StyleSheet.create({
    pokedexPokemonContainer:{
        flex : 1,
        flexDirection : "row",
        flexWrap : "wrap",
        justifyContent : "space-evenly",
        backgroundColor : 'rgba(245,63,63,1)',
    },
    pokedexPokemon : {
        padding : 10,
        backgroundColor : 'rgba(255,255,255,0.7)',
        alignItems : 'center',
        width : Dimensions.get("screen").width / 3,
        height : Dimensions.get("screen").height / 4,
    },
    pokemonImagem : {
        width : 100,
        height : 100,
        borderRadius : 100,
        borderColor : '#00FF61',
        borderWidth : 4,
        backgroundColor : 'rgba(255,255,255,1)'
    },
    pokemonName: {
        textTransform : "capitalize",
        borderWidth : 2,
        marginTop : 10,
        fontSize : 16,
        padding : 10,
        borderRadius : 20,
        backgroundColor : 'rgba(255,255,255,1)'
    },
    FlatList : {
        paddingBottom : 50,
    },
})