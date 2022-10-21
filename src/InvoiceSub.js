import React from 'react';
import { Page, Document, Image, StyleSheet, View, Text, Font } from '@react-pdf/renderer';
import logo from './logo.png';

const styles = StyleSheet.create({
    page: {
        fontFamily: 'Helvetica',
        fontSize: 11,
        paddingTop: 30,
        paddingLeft:60,
        paddingRight:60,
        lineHeight: 1.5,
        flexDirection: 'column',
    }, 
    logo: {
        width: 74,
        height: 66,
    },
    headerContainer:{
        flexDirection: 'row',
        marginTop: 24,
    },
    leftColumn: {
        flexDirection: 'column',
        flexGrow: 9,
    },
    rightColumn: {
        flexDirection: 'column',
        flexGrow: 1,
        alignItems: 'flex-end',
        justifySelf: 'flex-end',
    },
    titleContainer:{
        flexDirection: 'row',
    },
    detailContainer:{
        flexDirection: 'row',
    },
    reportTitle:{
        color: '#000000',
        fontSize: 9,
        textAlign: 'left',
        fontFamily: 'Lato Bold'
    },
    invoiceHeading:{
        color: '#000000',
        fontSize: 12,
        textAlign: 'left',
        fontFamily: 'Lato Bold'
    },
    invoiceMainHeading:{
        color: '#000000',
        fontSize: 15,
        textAlign: 'left',
        fontFamily: 'Lato Bold'
    },
    normalText:{
        color: '#000000',
        fontSize: 12,
        textAlign: 'left',
        fontFamily: 'Lato'
    },
    tableHeaderText:{
        width: '45%',
        textAlign: 'center',
    },
    tableContainer:{
        flexDirection: 'row',
        marginTop: 24,
        borderWidth: 1,
        borderColor: '#000000',
    },
    tableRow:{
        flexDirection: 'row',
        borderBottomColor: '#000000',
        borderBottomWidth: 1,
        alignItems: 'center',
        height: 24,
        fontStyle: 'bold',
    },
    tableCol1:{
        width:'25%',
        textAlign: 'left',
        borderRightColor: '#000000',
        borderRightWidth: 1,
    },
    tableHeaderContainer:{
        flexDirection: 'row',
        borderBottomColor: '#000000',
        backgroundColor: '#ffffff',
        borderBottomWidth: 1,
        alignItems: 'right',
        height: 24,
        textAlign: 'center',
        fontStyle: 'bold',
        flexGrow: 1,
    },
  });

  Font.register({
    family: 'Lato',
    src: `https://fonts.gstatic.com/s/lato/v16/S6uyw4BMUTPHjx4wWw.ttf`,
  });
  
  Font.register({
    family: 'Lato Italic',
    src: `https://fonts.gstatic.com/s/lato/v16/S6u8w4BMUTPHjxsAXC-v.ttf`,
  });
  
  Font.register({
    family: 'Lato Bold',
    src: `https://fonts.gstatic.com/s/lato/v16/S6u9w4BMUTPHh6UVSwiPHA.ttf`,
  });


  const InvoiceTitle = ({invoice}) => (
        <View style={styles.headerContainer}>
        <View style={styles.leftColumn}>
        <View style={styles.detailContainer}><Text style={styles.invoiceHeading}>Invoice to:</Text></View>
        <View style={styles.detailContainer}><Text style={styles.invoiceMainHeading}>{invoice.clientName}</Text></View>
        <View style={styles.detailContainer}><Text style={styles.normalText}>ATTN: {invoice.ATTN}</Text></View>
        <View style={styles.detailContainer}><Text style={styles.normalText}>{invoice.clientEmail}</Text></View>
        <View style={styles.detailContainer}><Text style={styles.normalText}>{invoice.clientAddressLine}</Text></View>
        <View style={styles.detailContainer}><Text style={styles.normalText}>{invoice.clientCity}, {invoice.clientStateProvince} {invoice.clientZipPostal}</Text></View>
        <View style={styles.detailContainer}><Text style={styles.normalText}>Phone: {invoice.clientPhone}</Text></View>
        <View style={styles.detailContainer}><Text style={styles.normalText}>Fax: {invoice.clientFax}</Text></View>
        </View>
            <View style={styles.rightColumn}>
            <View style={styles.detailContainer}><Text style={styles.invoiceMainHeading}>COMMERCIAL INVOICE</Text></View>
            <View style={styles.detailContainer}><Text style={styles.normalText}>INVOICE #: {invoice.invoiceNumber}</Text></View>
            <View style={styles.detailContainer}><Text style={styles.normalText}>INVOICE DATE: {invoice.invoiceDate}</Text></View>
        <View style={styles.detailContainer}><Text style={styles.normalText}>LOAD REF#: {invoice.LRN}</Text></View>
        <View style={styles.detailContainer}><Text style={styles.normalText}>BOOKING DATE: {invoice.bookingDate}</Text></View>
            </View>
        </View>
);

export default InvoiceTitle