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
        width: 160,
        height: 160,
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
        fontSize: 12,
        textAlign: 'left',
        fontFamily: 'Lato Bold'
    },
    proInfo:{
        color: '#000000',
        fontSize: 12,
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


  const InvoiceSub = ({invoice}) => (
        <View style={styles.headerContainer}>
        <View style={styles.leftColumn}>
        <View style={styles.titleContainer}>
        <Text style={styles.reportTitle}>TRANSIT FREIGHT SYSTEM INC.</Text>
        </View>
        
        <View style={styles.detailContainer}><Text style={styles.proInfo}>1 FAIRSERVICE DRIVE</Text></View>
        <View style={styles.detailContainer}><Text style={styles.proInfo}>BRAMPTON ON L6R0S1</Text></View>
        <View style={styles.detailContainer}><Text style={styles.proInfo}>Phone # 905-448-3468</Text></View>
        <View style={styles.detailContainer}><Text style={styles.proInfo}>FAX # 1-888-877-0441</Text></View>
        <View style={styles.detailContainer}><Text style={styles.proInfo}>tfsysteminc@gmail.com</Text></View>
        </View>
        <View style={styles.rightColumn}>
            <Image style={styles.logo} src={logo} />
            </View></View>
);

export default InvoiceSub