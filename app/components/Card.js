import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { COLORS } from '../theme/colors';

const Card = ({
    item,
    favouriteList,
    selectFavChar
}) => {
    return (
        <View>
            <Image source={{ uri: item.img }} style={styles.img} />
            <View style={styles.textView}>
                <View style={{ flexDirection: 'column' }}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.nickName}>{item.nickname}</Text>
                </View>
                {
                    favouriteList &&
                    <TouchableOpacity onPress={() => selectFavChar(item)}>
                        {
                            favouriteList?.includes(item) ?
                                <Image source={require('../images/HEART_FILLED.png')} /> :
                                <Image source={require('../images/HEART.png')} />
                        }
                    </TouchableOpacity>
                }

            </View>
        </View>
    );
}

export default Card;


const styles = StyleSheet.create({
    img: {
        height: 220,
        width: 170,
        borderRadius: 5
    },
    textView: {
        flexDirection: 'row',
        marginTop: 5,
        justifyContent: 'space-between'
    },
    name: {
        color: COLORS.text,
        fontSize: 15,
        fontFamily: 'Roboto-Medium'
    },
    nickName: {
        color: COLORS.text,
        fontSize: 12,
        fontFamily: 'Roboto-Thin'
    }
})