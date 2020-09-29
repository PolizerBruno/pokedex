import axios from 'axios'
import React, {Component} from 'react'
import {ScrollView, Text, TouchableOpacity, View} from 'react-native'
import Header from '../components/header'
import PokemonStats from '../components/pokemonStats'
import PokemonAbilities from '../components/pokemonAbilities'
import EvolutionaryChain from '../components/evolutionaryChain'
export default class detailPokemon extends Component {
  state = {
    id: this.props.navigation.state.params.id,
    data: '',
    abilityDescription: [],
    types: [],
    evolutionaryChain : [],
    species : []
  }
  getEvolutionaryChain = async () =>{
    const species = await this.getDataFromApi(`https://pokeapi.co/api/v2/pokemon-species/${ this.state.id }/`)
    this.setState({species : species.data})
    const result = await this.getDataFromApi(species.data.evolution_chain.url)
    this.setState({evolutionaryChain : result.data})
  }

  getAbilitiesDescription = async () => {
    const array = []
    for (i in this.state.data.abilities) {
      const result = await this.getDataFromApi(
        this.state.data.abilities[i].ability.url,
      )
      array.push([
        this.state.data.abilities[i].ability.name,
        result.data.effect_entries[0].language.name == 'en'
          ? result.data.effect_entries[0].effect
          : result.data.effect_entries[1].effect,
      ])
    }
    this.setState({
      abilityDescription: array,
    })
  }
  getType = poketypes => {
    for (i in poketypes) {
      this.setState({types: [...this.state.types, poketypes[i].type.name]})
    }
  }
  getDataFromApi = req => {
    return new Promise(resolve => {
      resolve(axios.get(req))
    })
  }

  componentDidMount = async () => {
    await this.getDataFromApi(
      `https://pokeapi.co/api/v2/pokemon/${this.state.id}/`,
    ).then(result => this.setState({data: result.data}))

    await this.getAbilitiesDescription()
    await this.getType(this.state.data.types)
    await this.getEvolutionaryChain()
  }
  render () {
    return (
      <View style={{flex: 1}}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Pokedex')}>
          <View
            style={{
              height: 50,
              borderBottomWidth: 2,
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 30,
                textAlign: 'center',
                textTransform: 'capitalize',
              }}>
              Voltar
            </Text>
          </View>
        </TouchableOpacity>
        <ScrollView style={{flex: 9}}>
          <View>
            <Header
              name={this.state.data.name}
              number={this.state.id}
              types={this.state.types}
            />
            <PokemonAbilities
              abilityDescription={this.state.abilityDescription}
            />
          </View>
            <EvolutionaryChain navigation={this.props.navigation} evolutionaryChain={this.state.evolutionaryChain}/>
          <View>
            <PokemonStats stats={this.state.data.stats}/>
          </View>
          <View>
          
          </View>
        </ScrollView>
      </View>
    )
  }
}
