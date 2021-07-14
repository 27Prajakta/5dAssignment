import * as React from 'react';
import { View, Text, ScrollView, StyleSheet, ImageBackground, Image, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Card } from '../components';

import { COLORS } from '../theme/colors';

function Details({ route, navigation }) {
  const { character, isFavouriteChar, otherCharacters } = route?.params;
  const { img, name, nickname, portrayed, birthday, occupation, appearance } = character;
  return (
    <ScrollView style={styles.container}>
      <ImageBackground source={{ uri: img }} style={styles.bckImg}>
        <View style={styles.header}>
          <Icon type={'feather'} name={'arrow-left'} size={24} color={COLORS.text} onPress={() => navigation.goBack()} />
          {
            isFavouriteChar ?
              <Image source={require('../images/HEART_FILLED.png')} /> :
              <Image source={require('../images/HEART.png')} />
          }
        </View>
        <View style={styles.info}>
          <Image source={{ uri: img }} style={styles.img} />
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.lightTxt}>{nickname}</Text>
        </View>
      </ImageBackground>
      <View style={styles.portrayedView}>
        <View style={{ flexDirection: 'column' }}>
          <Text style={styles.label}>Potrayed</Text>
          <Text style={styles.lightTxt}>{portrayed}</Text>
        </View>
        <View style={styles.birthdayView}>
          <Text style={styles.lightTxt}>{birthday}</Text>
          <Icon type={'feather'} name={'gift'} size={12} color={COLORS.text} />
        </View>
      </View>
      <View style={styles.occView}>
        <Text style={styles.label}>Occupation</Text>
        {
          occupation.map((item, idx) =>
            <Text style={styles.lightTxt} key={idx}>
              {item}
            </Text>
          )
        }
      </View>
      <View style={styles.appearView}>
        <Text style={styles.label}>Appeared in</Text>
        <FlatList
          data={appearance}
          horizontal
          contentContainerStyle={{ marginVertical: 10 }}
          keyExtractor={item => item.toString()}
          renderItem={({ item }) =>
            <View style={styles.seasonView}>
              <Text style={styles.lightTxt}>
                Season {item}
              </Text>
            </View>
          }
        />
      </View>
      <View style={styles.appearView}>
        <Text style={styles.otherTxt}>Other Characters</Text>
        <FlatList
          data={otherCharacters}
          horizontal
          keyExtractor={item => item.char_id}
          renderItem={({ item }) =>
            <View style={{ marginRight: 20, marginTop: 10 }}>
              <Card item={item} />
            </View>
          }
        />
      </View>
    </ScrollView>
  );
}

export default Details;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000'
  },
  img: {
    height: 220,
    width: 170,
    borderRadius: 5,
  },
  bckImg: {
    height: 450,
    width: '100%',
    opacity: 0.5
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 15
  },
  info: {
    alignItems: 'center',
    marginTop: '13%'
  },
  portrayedView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 10
  },
  birthdayView: {
    flexDirection: 'row',
    width: '25%',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  occView: {
    marginHorizontal: 20,
    marginVertical: 20
  },
  appearView: {
    marginLeft: 20,
    marginVertical: 20
  },
  seasonView: {
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    width: 85,
    marginRight: 20,
    height: 25,
    borderRadius: 3
  },
  name: {
    color: COLORS.text,
    fontSize: 30,
    fontFamily: 'Roboto-Bold',
    marginTop: '10%'
  },
  label: {
    color: COLORS.secondary,
    fontSize: 12,
    fontFamily: 'Roboto-Light'
  },
  lightTxt: {
    color: COLORS.text,
    fontSize: 12,
    fontFamily: 'Roboto-Light'
  },
  otherTxt: {
    fontSize: 18,
    color: COLORS.text,
    fontFamily: 'Roboto-Bold'
  }
});