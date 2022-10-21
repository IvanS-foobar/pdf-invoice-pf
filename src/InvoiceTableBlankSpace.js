import React, {Fragment} from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

const borderColor = '#000000'
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        borderBottomColor: '#000000',
        borderBottomWidth: 1,
        alignItems: 'center',
        height: 72,
        fontStyle: 'bold',
        color: 'white'
    },
    item: {
        width: '10%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
    },
    shipper: {
        width: '25%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
    },
    pickUpDate: {
        width: '15%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
    },
    consignee: {
        width: '25%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
    },
    deliveryDate: {
        width: '15%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
    },
    amount: {
        width: '10%'
    }
   
  });

const InvoiceTableBlankSpace = ({rowsCount}) => {
    const blankRows = Array(rowsCount).fill(0)
    const rows = blankRows.map( (x, i) => 
        <View style={styles.row} key={`BR${i}`}>
            <Text style={styles.item}>-</Text>
            <Text style={styles.shipper}>-</Text>
            <Text style={styles.pickUpDate}>-</Text>
            <Text style={styles.consignee}>-</Text>
            <Text style={styles.deliveryDate}>-</Text>
            <Text style={styles.amount}>-</Text>
        </View>
    )
    return (<Fragment>{rows}</Fragment> )
};
  
export default InvoiceTableBlankSpace