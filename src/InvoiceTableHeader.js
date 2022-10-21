import React from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

const borderColor = '#000000'
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderBottomColor: '#000000',
        backgroundColor: '#D2D2D2',
        borderBottomWidth: 1,
        alignItems: 'center',
        height: 24,
        textAlign: 'center',
        fontStyle: 'bold',
        flexGrow: 1,
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

  const InvoiceTableHeader = () => (
    <View style={styles.container}>
        <Text style={styles.item}>Item</Text>
        <Text style={styles.shipper}>Shipper</Text>
        <Text style={styles.pickUpDate}>Pick Up Date</Text>
        <Text style={styles.consignee}>Consignee</Text>
        <Text style={styles.deliveryDate}>Delivery Date</Text>
        <Text style={styles.amount}>Amount</Text>
    </View>
  );
  
  export default InvoiceTableHeader