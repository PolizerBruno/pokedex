import axios from 'axios'
import React, { Component } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import Header from '../components/header'
import PokemonStats from '../components/pokemonStats'
import PokemonAbilities from '../components/pokemonAbilities'



export default class extends Component {

  state = {
    id: this.props.navigation.state.params.id,
    data: '',
  }

  getDataFromApi = () => {
    return new Promise((resolve, reject) => {
      resolve(axios.get(`https://pokeapi.co/api/v2/pokemon/${this.state.id}/`))
    })
  }

  componentDidMount = () => {
    this.getDataFromApi().then(result => this.setState({ data: result.data }))
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#F5E8E7', }}>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('Pokedex')}>
          <View style={{ height: 50, borderBottomWidth: 2, justifyContent: "center", alignContent: "center", alignItems: "center" }}>
            <Text style={{ fontSize: 30, textAlign: "center", textTransform: 'capitalize' }}>Voltar</Text>
          </View>
        </TouchableOpacity>
        <ScrollView style={{ flex: 9 }}>
          <View style={
            {
              flex: 1,
              padding: 50,
              alignItems: "center",
              justifyContent: "center",
              borderBottomWidth: 2,
              backgroundColor: 'rgb(255,255,255)'
            }
          }>
            <Header name={this.state.data.name} number={this.state.id} types={this.state.data.types} />
            <PokemonAbilities hab={this.state.data.abilities} />
          </View>
          <View>
            <PokemonStats stats={this.state.data.stats} />
          </View>
        </ScrollView>
      </View>

    )
  }
}