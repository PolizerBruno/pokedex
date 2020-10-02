import React, {Component} from 'react'
import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
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
    return new Promise((resolve, reject) => {
      pokemonJson.forEach(element => {
        if (element.id == number) {
          resolve({type: element.type[0].toUpperCase()})
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
      <View>
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
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                margin: 20,
              }}>
              <Text
                style={{
                  fontSize: 30,
                  textTransform: 'capitalize',
                  borderBottomWidth: 2,
                  width: '90%',
                  textAlign: 'center',
                }}>
                {this.props.navigation.state.params.abilityName}
              </Text>
            </View>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                margin: 20,
              }}>
              <Text style={{fontSize: 20}}>
                {this.state.effect}
              </Text>
            </View>
            <Text style={{textAlign: 'center', fontSize: 30}}>
              Pokemons with this ability
            </Text>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-evenly',
              }}>
              {this.state.pokemons.map(e => {
                return (
                  <View
                    key={e}
                    style={{
                      margin: 2,
                      width: Dimensions.get('screen').width / 3,
                      height: Dimensions.get('screen').height / 16,
                      borderWidth: 4,
                      borderRadius: 10,
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: colors.typesColors['GRASS'],
                    }}>
                    <TouchableOpacity
                      key={e}
                      onPress={() => {
                        this.props.navigation.navigate('DetailPokemon', {
                          id: e[0],
                        })
                      }}>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        <Image source={sprites[e[0]]} />
                        <Text
                          style={{
                            fontSize: 14,
                            textTransform: 'capitalize',
                            textAlign: 'left',
                            width: '70%',
                          }}>
                          {e[1]}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                )
              })}
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}
