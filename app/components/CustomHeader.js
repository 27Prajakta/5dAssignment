import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { COLORS } from '../theme/colors';

const CustomHeader = ({
    centerComponent,
    rightComponent,
    leftComponent
}) => {
    const getJustifyContent = () => {
        if ((centerComponent && rightComponent && leftComponent) || (rightComponent && leftComponent)) {
            return 'space-between';
        } else {
            return 'center'
        }
    }
    return (
        <View style={[styles.containerStyle, { justifyContent: getJustifyContent() }]}>
            {leftComponent}
            {centerComponent}
            {rightComponent}
        </View>
    );
}

export default CustomHeader;


const styles = StyleSheet.create({
    containerStyle: {
        height: 60,
        width: '100%',
        backgroundColor: COLORS.primary,
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10,
    },
})