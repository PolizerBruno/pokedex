import React, {Component} from 'react'
import {FlatList, Text, TextInput, TouchableOpacity, View} from 'react-native'
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
  }

  query = async () =>
    await axios
      .get(`https://pokeapi.co/api/v2/pokemon/?limit=${this.state.limit}&offset=${this.state.offset}`)
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
        <View style={{
          flexDirection : "row",
          alignItems : "center",
          justifyContent : "center",
        }}>
          <TextInput
            placeholder={'Search'}
            style={Style.TextSearchInput}
            onChangeText={searchInput =>
              this.setState({searchInput}, () => this.query())
            }
          />
          <Text>Generation - {this.state.generation}</Text>
        </View>
        <View
          style={{
            flex: 0.3,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-evenly',
          }}>
          <TouchableOpacity style={Style.generationTouch} onPress={()=>{this.setState({generation : "I",offset:0,limit : 151},()=>this.query())}}  >
            <Text style={Style.generationButtons}>Gen I</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{this.setState({generation : "II",limit : 100,offset : 151},()=>this.query())}}>
            <Text style={Style.generationButtons} >Gen II</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{this.setState({generation : "III",limit : 135,offset : 251},()=>this.query())}}>
            <Text style={Style.generationButtons}  >Gen III</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{this.setState({generation : "IV",limit : 107,offset : 386},()=>this.query())}}>
            <Text style={Style.generationButtons} >Gen IV</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{this.setState({generation : "V",limit : 156,offset : 493},()=>this.query())}}>
            <Text style={Style.generationButtons} >Gen V</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{this.setState({generation : "VI",limit : 72,offset : 649},()=>this.query())}}>
            <Text style={Style.generationButtons}>Gen VI</Text>
          </TouchableOpacity>
          <TouchableOpacity  onPress={()=>{this.setState({generation : "VII",limit : 88,offset : 721},()=>this.query())}}>
            <Text style={Style.generationButtons}>Gen VII</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{this.setState({generation : "All",limit : 809,offset : 0},()=>this.query())}}>
            <Text style={Style.generationButtons}>All Generations</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          style={{flex: 1}}
          removeClippedSubviews={true}
          numColumns={3}
          data={this.state.pokemons}
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
