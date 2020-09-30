import React, {Component} from 'react'
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native'
import axios from 'axios'
import sprites from '../components/sprites'
import pokemonJson from '../components/pokedex.json'
import colors from '../style/typeColors'

export default class extends Component {
  state = {
    pokemons: [],
    effect: '',
  }
  findPokemon = number => {
    return new Promise((resolve,reject)=> {
      pokemonJson.forEach(element => {
        if (element.id == number) {
          resolve({'type':element.type[0].toUpperCase()})
        }
      })
    })
  
  }

  getAbilitiesPokemons = async url => {
    const result = await axios.get(url)
    result.data.pokemon.forEach(element => {
      this.setState({
        pokemons: [
          ...this.state.pokemons,
          [
            parseInt(String(element.pokemon.url).split('/')[6]),
            element.pokemon.name,
            this.findPokemon(String(element.pokemon.url).split('/')[6]),
          ],
        ],
      })
    }),
      result.data.effect_entries[0].language.name == 'en'
        ? this.setState({effect: result.data.effect_entries[0].effect})
        : this.setState({effect: result.data.effect_entries[1].effect})
  }
  componentDidMount = async () => {
    await this.getAbilitiesPokemons(this.props.navigation.state.params.ability)
  }
  render () {
    return (
      <ScrollView>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('DetailPokemon', {
              id: this.props.navigation.state.params.id,
            })
          }>
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
        <View
          style={{alignItems: 'center', justifyContent: 'center', margin: 20}}>
          <Text style={{fontSize: 30, textTransform: 'capitalize',borderBottomWidth : 2,width :'90%',textAlign :"center"}}>
            {this.props.navigation.state.params.abilityName}
          </Text>
        </View>
        <View
          style={{alignItems: 'center', justifyContent: 'center', margin: 20}}>
          <Text style={{fontSize: 20}}>{this.state.effect}</Text>
        </View>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          {this.state.pokemons.map(e => {
            return (
              <TouchableOpacity
                key={e}
                onPress={() => {
                  this.props.navigation.navigate('DetailPokemon', {
                    id: e[0],
                  })
                }}>
                <View
                  style={{
                    margin: 15,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderWidth: 4,
                    borderRadius: 10,
                      }}>
                    <View style={{borderRightWidth: 4}}>
                      <Image source={sprites[e[0]]} />
                    </View>
                  <Text
                    style={{
                      backgroundColor:colors.typesColors[e[2]['_W'].type],
                      height : '100%',
                      width: 150,
                      fontSize: 26,
                      textTransform: 'capitalize',
                      textAlign: 'center',
                      color : '#FFFFFF',
                      borderBottomLeftRadius :2,
                      borderTopLeftRadius : 2,
                    }}>
                    {e[1]}
                  </Text>
                </View>
              </TouchableOpacity>
            )
          })}
        </View>
      </ScrollView>
    )
  }
}
