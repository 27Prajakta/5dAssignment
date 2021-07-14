import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import Icon from 'react-native-vector-icons/Feather';

import { getCharacters } from '../actions/getCharacters';
import { GET_CHARACTERS } from '../constants';
import { Card, CustomHeader } from '../components';
import { COLORS } from '../theme/colors';

function HomeScreen({ navigation }) {
    const [favouriteList, setFavCharater] = useState([]);
    const { characters } = useSelector(state => state);
    const dispatch = useDispatch();
    useEffect(() => {
        getCharacters()
            .then((getAllCharacters) => {
                dispatch({
                    type: GET_CHARACTERS,
                    payload: getAllCharacters
                })
            });
    }, [])

    const selectFavChar = (favChar) => {
        if (favouriteList.includes(favChar)) {
            let filteredList = favouriteList.filter((item) => item.char_id !== favChar.char_id)
            setFavCharater(filteredList);
        }
        else {
            setFavCharater([...favouriteList, favChar])
        }
    }
    return (
        <View style={styles.container}>
            <CustomHeader
                leftComponent={
                    <Text style={styles.headerTxt}>The Breaking bad</Text>
                }
                rightComponent={
                    <View style={styles.headerRightComp}>
                        <Icon type={'feather'} name={'search'} size={24} color={COLORS.text} />
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Favourites', { favCharacters: favouriteList })}>
                            <Image source={require('../images/HEART_FILLED.png')} />
                        </TouchableOpacity>
                    </View>
                }
            />
            <FlatList
                data={characters}
                numColumns={2}
                keyExtractor={item => item.char_id}
                renderItem={({ item, index }) =>
                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate('Details', {
                                character: item,
                                isFavouriteChar: favouriteList.includes(item),
                                otherCharacters: characters.slice(index + 1, index + 4)
                            })
                        }
                        style={styles.listView}
                    >
                        <Card item={item} favouriteList={favouriteList} selectFavChar={selectFavChar} />
                    </TouchableOpacity>
                }
            />
        </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    headerTxt: {
        fontSize: 21,
        fontFamily: 'Roboto-Bold',
        color: COLORS.text
    },
    headerRightComp: {
        flexDirection: 'row',
        width: '18%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    container: {
        flex: 1,
        backgroundColor: '#000000'
    },
    listView: {
        flex: 1,
        alignItems: 'center',
        marginTop: 50
    }
});