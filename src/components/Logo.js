import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Logo = () => {

    return (
        <View>
            <Image style={styles.image} source={require('../assets/images/logo.png')} />
        </View>
        );
    };
          
const styles = StyleSheet.create({
    container: {
        width: '100%'
    },
    image: {
        resizeMode: 'contain',
        marginBottom: 10,
        height: 50,
        width: 100
    }
});

export default Logo;