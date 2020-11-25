import React, {Component} from 'react'
import {
  Dimensions,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import Style from '../style/sytle'
import Pokemon from '../components/pokemon'
import axios from 'axios'

export default class pokedex extends Component {
  state = {
    pokemons: '',
    searchInput: '',
    limit: 151,
    offset: 0,
    generation: 'I',
    image: '',
    color: '#FFFFFF',
  }

  query = async () =>
    await axios
      .get(
        `https://pokeapi.co/api/v2/pokemon/?limit=${this.state.limit}&offset=${this.state.offset}`,
      )
      .then(response => {
        this.setState({
          pokemons: response.data.results.filter(x => {
            return String(x.name)
              .toUpperCase()
              .includes(String(this.state.searchInput).toUpperCase())
          }),
        })
      })

  componentDidMount = async () => {
    await this.query()
  }

  render () {
    return (
      <View style={Style.pokedexPokemonContainer}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TextInput
            placeholder={'Search'}
            style={Style.TextSearchInput}
            onChangeText={searchInput =>
              this.setState({searchInput}, () => this.query())
            }
          />
          <View style={{width:50,height:50,backgroundColor:'white',borderColor:'#1ad1ff',borderRadius:25,borderWidth:4,justifyContent:'center',alignItems:'center'}}>
          <Text style={{fontSize:30}}>
             {this.state.generation}
          </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-evenly',
          }}>
          <TouchableOpacity
            style={Style.generationTouch}
            onPress={() => {
              this.setState({generation: 'I', offset: 0, limit: 151}, () =>
                this.query(),
              )
            }}>
            <Text style={Style.generationButtons}>I</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.setState({generation: 'II', limit: 100, offset: 151}, () =>
                this.query(),
              )
            }}>
            <Text style={Style.generationButtons}>II</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.setState({generation: 'III', limit: 135, offset: 251}, () =>
                this.query(),
              )
            }}>
            <Text style={Style.generationButtons}>III</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.setState({generation: 'IV', limit: 107, offset: 386}, () =>
                this.query(),
              )
            }}>
            <Text style={Style.generationButtons}>IV</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.setState({generation: 'V', limit: 156, offset: 493}, () =>
                this.query(),
              )
            }}>
            <Text style={Style.generationButtons}>V</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.setState({generation: 'VI', limit: 72, offset: 649}, () =>
                this.query(),
              )
            }}>
            <Text style={Style.generationButtons}>VI</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.setState({generation: 'VII', limit: 88, offset: 721}, () =>
                this.query(),
              )
            }}>
            <Text style={Style.generationButtons}>VII</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.setState({generation: 'All', limit: 809, offset: 0}, () =>
                this.query(),
              )
            }}>
            <Text style={Style.generationButtons}>All</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          style={{flex: 10,backgroundColor : '#F7E9E9',width :'98%',borderRadius : 10,marginBottom :10,margin:10,}}
          removeClippedSubviews={true}
          data={this.state.pokemons}
          numColumns={3}
          key={this.state.pokemons.name}
          renderItem={item => (
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('DetailPokemon', {
                  id: parseInt(String(item.item.url).split('/')[6]),
                })
              }
              style={Style.row3x4}>
              <Pokemon
                style={Style.FlatList}
                name={item.item.name}
                number={parseInt(String(item.item.url).split('/')[6])}
              />
            </TouchableOpacity>
          )}
          keyExtractor={item => item.url}
        />
      </View>
    )
  }
}
