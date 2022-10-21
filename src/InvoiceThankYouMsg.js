import React from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
   
    titleContainer:{
        flexDirection: 'column',
        marginTop: 10,
        alignItems: 'center',
        textAlign: 'center',
    },
    detailContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        textAlign: 'center',
    },
    reportTitle:{
        fontSize: 13,
        textAlign: 'center',
    }
  });


  const InvoiceThankYouMsg = () => (
    <View style={styles.titleContainer}>
        <View style={styles.detailContainer}><Text style={styles.reportTitle}>{`Please issue cheque payable to: TRANSIT FREIGHT SYSTEM INC.`}</Text></View>
        <View style={styles.detailContainer}><Text style={styles.reportTitle}>{`Thank you for your business`}</Text></View>
    </View>
  );
  
  export default InvoiceThankYouMsg