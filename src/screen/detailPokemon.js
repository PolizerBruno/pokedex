import axios from 'axios'
import React, {Component} from 'react'
import {ScrollView, Text, TouchableOpacity, View} from 'react-native'
import Header from '../components/header'
import PokemonStats from '../components/pokemonStats'
import PokemonAbilities from '../components/pokemonAbilities'
import EvolutionaryChain from '../components/evolutionaryChain'
import PokemonDescription from '../components/pokemonDescription'
import colors from '../style/typeColors'

export default class detailPokemon extends Component {
  state = {
    id: this.props.navigation.state.params.id,
    data: '',
    abilityDescription: [],
    types: [],
    evolutionaryChain: [],
    species: [],
    flavor_text: '',
  }
  getEvolutionaryChain = async () => {
    const species = await this.getDataFromApi(
      `https://pokeapi.co/api/v2/pokemon-species/${this.state.id}/`,
    )
    this.setState({species: species.data})
    const result = await this.getDataFromApi(species.data.evolution_chain.url)
    this.setState({evolutionaryChain: result.data})
  }

  getAbilitiesDescription = async () => {
    const array = []
    for (i in this.state.data.abilities) {
      const result = await this.getDataFromApi(
        this.state.data.abilities[i].ability.url,
      )
      array.push([
        this.state.data.abilities[i].ability.url,
        this.state.data.abilities[i].ability.name,
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
  getDescriptionLanguage = description => {
    for (i in description) {
      if(description[i].language.name == "en"){
        this.setState({flavor_text : String(description[i].flavor_text).replace(/@"\t|\n|\r"/gm,' ')})
        return
      }
    }
  }

  componentDidMount = async () => {
    await this.getDataFromApi(
      `https://pokeapi.co/api/v2/pokemon/${this.state.id}/`,
    ).then(result => this.setState({data: result.data}))

    await this.getAbilitiesDescription()
    await this.getType(this.state.data.types)
    await this.getEvolutionaryChain()
    await this.getDescriptionLanguage(this.state.species.flavor_text_entries)
  }
  render () {
    return (
      <View style={{flex: 1}}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Pokedex')}>
          <View
            style={{
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
            <PokemonDescription description={this.state.flavor_text} />
            <PokemonAbilities
              id = {this.state.id}
              navigation={this.props.navigation}
              color = {colors.typesColors[String(this.state.types[0]).toUpperCase()]}
              abilityDescription={this.state.abilityDescription}
            />
          </View>
          <EvolutionaryChain
            navigation={this.props.navigation}
            evolutionaryChain={this.state.evolutionaryChain}
          />
          <View>
            <PokemonStats stats={this.state.data.stats} />
          </View>
          <View></View>
        </ScrollView>
      </View>
    )
  }
}
