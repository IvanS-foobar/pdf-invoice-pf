import React from 'react';
import { Page, Document, Image, StyleSheet, View, Text, Font } from '@react-pdf/renderer';
import InvoiceTitle from "./InvoiceTitle"
import InvoiceSub from "./InvoiceSub"
// import InvoiceNo from './InvoiceNo'
import InvoiceItemsTable from './InvoiceItemsTable'
import InvoiceThankYouMsg from './InvoiceThankYouMsg'
import logo from './logo.png'


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
    proInfo:{
        color: '#000000',
        fontSize: 9,
        textAlign: 'left',
    }
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
  
  const Invoice = ({invoice}) => (
            <Document>
                <Page size="A4" style={styles.page}>
                
                <InvoiceTitle/>
                <InvoiceSub invoice={invoice}/>
                <InvoiceItemsTable invoice={invoice} />
                <InvoiceThankYouMsg/>
                </Page>
            </Document>
        );
  
  export default Invoice