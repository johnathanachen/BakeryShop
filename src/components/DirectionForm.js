import React from 'react';
import { View, StyleSheet } from 'react-native';
import Logo from './Logo'
import CancelButton from '../containers/CancelButtonContainer'
import OriginInput from '../containers/OriginSearchContainer'
import DestinationInput from '../containers/DestinationSearchContainer'


const DirectionForm = ({ height }) => {
    
    return (
        <View height={height} style={styles.container}>
            <View style={styles.itemsContainer}>
                <Logo />
                <CancelButton />
            </View>
            <OriginInput inputType={'origin'} label={`Pickup From`}/>
            <DestinationInput inputType={'destination'} label={`Deliver To`} />
        </View>  
    )
}


const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 10
    },
    itemsContainer: {
        width: '100%',
        flexDirection: "row",
        justifyContent: "space-between",
        paddingLeft: 20,
        paddingRight: 20
    }
  });

export default DirectionForm