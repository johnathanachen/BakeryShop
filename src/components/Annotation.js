import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import MapboxGL from "@react-native-mapbox-gl/maps";

const Annotation = ({ imagePath, coordinates }) => {
    
    return (
        <MapboxGL.PointAnnotation
                key="pointAnnotation"
                id="pointAnnotation"
                coordinate={coordinates}
            >
                <View style={styles.annotationContainer}>
                    <View style={styles.box}>
                        <Image style={styles.image} source={imagePath} />
                    </View>
                    <View style={styles.arrowDown} />
                </View>
        </MapboxGL.PointAnnotation>  
    )
}


const styles = StyleSheet.create({
    annotationContainer: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-start'
    },
    box: {
      width: 35,
      height: 35,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
      borderRadius: 3,
      paddingTop: 7,
      paddingBottom: 7
    },
    image: {
      resizeMode: 'contain',
      width: 20
    },
    arrowDown: {
      width: 0, 
      height: 0,
      marginBottom: 7,
      borderStyle: 'solid',
      borderLeftColor: 'transparent',
      borderLeftWidth: 10,
      borderRightWidth: 10,
      borderRightColor: 'transparent',
      borderTopColor: 'white',
      borderTopWidth: 15,
      borderTopStartRadius: 3,
      alignSelf: 'center'
    }
  });

export default Annotation