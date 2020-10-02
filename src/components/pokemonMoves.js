import React from 'react'
import {Image, Text, View} from 'react-native'
import movesDescription from '../components/moves.json'
import colors from '../style/typeColors'
import physical from '../../assets/appImages/Physical.png'
import special from '../../assets/appImages/Special.png'
import status from '../../assets/appImages/Status.png'
import levelup from '../../assets/appImages/levelUp.png'
import tm from '../../assets/appImages/tm.png'
import tutor from '../../assets/appImages/tutor.png'
import egg from '../../assets/appImages/egg.png'
export default props => {
  const state = {
    moves: [],
    imageCategories: {Physical: physical, Special: special, Status: status},
    imageLearn: {'level-up': levelup, tutor: tutor, egg: egg, machine: tm},
  }

  const getMoves = data => {
    for (i in data) {
      for (b in movesDescription) {
        if (
          String(data[i].move.name)
            .split('-')
            .join(' ')
            .toUpperCase() == String(movesDescription[b].ename).toUpperCase()
        ) {
          state.moves.push([
            data[i].move,
            data[i].version_group_details,
            movesDescription[b].power,
            String(movesDescription[b].type).toUpperCase(),
            movesDescription[b].category,
            movesDescription[b].accuracy,
            movesDescription[b].pp,
            data[i].version_group_details,
          ])
        }
      }
    }
    state.moves.sort((a, b) => {
      return a[1][0].level_learned_at - b[1][0].level_learned_at
    })
    state.moves.sort((a, b) => {
      return String(a[1][0].move_learn_method.name).localeCompare(b[1][0].move_learn_method.name)
    })
  }
  getMoves(props.data)

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text
        style={{
          borderBottomWidth: 2,
          fontSize: 30,
          textAlign: 'center',
          margin: 10,
          flex: 1,
        }}>
        Moves
      </Text>

      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          margin: 5,
        }}>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'space-evenly',
            padding: 2,
          }}>
          <Text
            style={{
              flex: 0.5,
              color: 'black',
              textAlign: 'center',
              padding: 2,
            }}>
            Lv
          </Text>
          <Text
            style={{flex: 1, color: 'black', textAlign: 'center', padding: 2}}>
            Cat
          </Text>
          <Text
            style={{flex: 1, color: 'black', textAlign: 'center', padding: 2}}>
            Acc
          </Text>
          <Text
            style={{flex: 1, color: 'black', textAlign: 'center', padding: 2}}>
            Power
          </Text>
          <Text
            style={{flex: 1, color: 'black', textAlign: 'center', padding: 2}}>
            PP
          </Text>
          <Text
            style={{flex: 2, color: 'black', textAlign: 'center', padding: 2}}>
            Name
          </Text>
          <Text
            style={{flex: 1, color: 'black', textAlign: 'center', padding: 2}}>
            Learn
          </Text>
        </View>
        {state.moves.map(move => {
          return (
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                margin: 10,
                padding: 2,
                borderWidth: 4,
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: colors.typesColors[move[3]],
              }}
              key={move[0].name + move[1]}>
              <Text
                style={{
                  textAlign: 'center',
                  textTransform: 'capitalize',
                  padding: 2,
                  flex: 0.5,
                  fontSize: 12,
                }}>
                {move[1][0].level_learned_at}
              </Text>

              <Image
                width={30}
                height={30}
                source={state.imageCategories[move[4]]}
              />
              {/* <Text
                style={{
                  textAlign: 'center',
                  textTransform: 'capitalize',
                  padding: 2,
                  borderRightWidth: 2,
                  borderColor: 'white',
                  flex: 1,
                  fontSize : 12,
                }}>
                {move[4]}
              </Text> */}
              <Text
                style={{
                  textAlign: 'center',
                  textTransform: 'capitalize',
                  padding: 2,
                  borderRightWidth: 2,
                  borderColor: 'white',
                  flex: 1,
                  fontSize: 12,
                }}>
                {move[5]}
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  textTransform: 'capitalize',
                  padding: 2,
                  borderRightWidth: 2,
                  borderColor: 'white',
                  flex: 1,
                  fontSize: 12,
                }}>
                {move[2]}
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  textTransform: 'capitalize',
                  padding: 2,
                  borderRightWidth: 2,
                  borderColor: 'white',
                  flex: 1,
                  fontSize: 12,
                }}>
                {move[6]}
              </Text>
              <Text
                style={{
                  flex: 2,
                  textAlign: 'center',
                  textTransform: 'capitalize',
                  padding: 2,
                  borderRightWidth: 2,
                  borderColor: 'white',
                  fontSize: 12,
                }}>
                {move[0].name}
              </Text>
              {/*  <Text
                style={{
                  flex: 1,
                  textAlign: 'center',
                  padding: 2,
                  fontSize : 12,
                }}>
                {move[1][0].move_learn_method.name}
              </Text> */}
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 2,
                  width:30,
                  height:30,
                }}>
                <Image
                  resizeMode={'contain'}
                  width={30}
                  height={30}
                  source={state.imageLearn[move[1][0].move_learn_method.name]}
                />
              </View>
            </View>
          )
        })}
      </View>
    </View>
  )
}
