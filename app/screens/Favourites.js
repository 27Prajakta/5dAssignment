import * as React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { Card, CustomHeader } from '../components';
import { COLORS } from '../theme/colors';

function Favourites({ route, navigation }) {
  const { favCharacters } = route?.params
  return (
    <View style={styles.container}>
      <CustomHeader
        leftComponent={
          <Text style={styles.headerTxt}>Favourites</Text>
        }
        rightComponent={
          <Icon type={'feather'} name={'x'} size={24} color={COLORS.text} onPress={() => navigation.goBack()} />
        }
      />
      { favCharacters.length !== 0 ?
        <FlatList
          data={favCharacters}
          numColumns={2}
          keyExtractor={item => item.char_id}
          renderItem={({ item }) =>
            <View style={styles.listView}>
              <Card item={item} favouriteList={favCharacters} />
            </View>
          }
        /> :
        <Text style={styles.emptyListTxt}>No favourite characters</Text>
      }
    </View>
  );
}

export default Favourites;

const styles = StyleSheet.create({
  headerTxt: {
    fontSize: 21,
    fontFamily: 'Roboto-Bold',
    color: COLORS.secondary
  },
  container: {
    flex: 1,
    backgroundColor: '#000000'
  },
  listView: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50
  },
  emptyListTxt: {
    fontSize: 16,
    alignSelf: 'center',
    marginTop: '50%',
    color: COLORS.text
  }
});
