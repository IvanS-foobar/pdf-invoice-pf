import React, {Fragment} from 'react';
import {Text, View, StyleSheet, Font } from '@react-pdf/renderer';

const borderColor = '#000000'
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        borderBottomColor: '#000000',
        borderBottomWidth: 1,
        alignItems: 'center',
        height: 72,
        fontStyle: 'bold',
        fontsize: 5
    },
    item: {
        width: '10%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        paddingLeft: 8,
        borderRight: '1px solid #000000'
    },
    shipper: {
        width: '25%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        textAlign: 'right',
        paddingRight: 8,
        fontSize: 10
    },
    pickUpDate: {
        width: '15%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        textAlign: 'right',
        paddingRight: 8,
        fontSize: 10
    },
    consignee: {
        width: '25%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        textAlign: 'right',
        paddingRight: 8,
        fontSize: 10
    },
    deliveryDate: {
        width: '15%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        textAlign: 'right',
        paddingRight: 8,
        fontSize: 10
    },
    amount: {
        width: '10%',
        textAlign: 'right',
        paddingRight: 8,
    }
  });


const InvoiceTableRow = ({items}) => {
    const rows = items.map( item => 
        <View style={styles.row} key={item.invoiceLineItem}>
            <Text style={styles.item}>{item.item}</Text>
            <Text style={styles.shipper}>{`${item.shipperName} \n${item.shipperAddressLine} \n${item.shipperCity} ${item.shipperStateProvince} \n${item.shipperZipPostal}`}</Text>
            <Text style={styles.pickUpDate}>{item.pickUpDate}</Text>
            <Text style={styles.consignee}>{`${item.consigneeName} \n${item.consigneeAddressLine} \n${item.consigneeCity} ${item.consigneeStateProvince} \n${item.consigneeZipPostal}`}</Text>
            <Text style={styles.deliveryDate}>{item.deliveryDate}</Text>
            <Text style={styles.amount}>{item.invoiceLineAmount}</Text>
        </View>
    )
    return (<Fragment>{rows}</Fragment> )
};
  
export default InvoiceTableRow