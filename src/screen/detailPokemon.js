import axios from 'axios'
import React,{Component} from 'react'
import {Text,View} from 'react-native'

export default class extends Component {
  
  state = {
    id : this.props.navigation.state.params.id,
    data : '',
  }

  getDataFromApi = () => {
    return new Promise((resolve,reject)=>{
      resolve(axios.get('https://pokeapi.co/api/v2/pokemon/2/'))
    }) 
  }

  componentDidMount = () =>{
      this.getDataFromApi().then(result => this.setState({data :result.data}))
  }
  render () {
    return (
    <View>
      <Text>{this.state.data.name}</Text>
      <Text>{String(this.state.data.types)}</Text>
    </View>
    )
  }
}