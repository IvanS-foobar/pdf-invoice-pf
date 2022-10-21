import React from 'react';
import {View, StyleSheet } from '@react-pdf/renderer';
import InvoiceTableHeader from './InvoiceTableHeader'
import InvoiceTableRow from './InvoiceTableRow'
import InvoiceTableBlankSpace from './InvoiceTableBlankSpace'
import InvoiceTableFooter from './InvoiceTableFooter'
import InvoiceTableFooter2 from './InvoiceTableFooter2';

const tableRowsCount = 4;

const styles = StyleSheet.create({
    tableContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 24,
        borderWidth: 1,
        borderColor: '#000000',
    },
});

  const InvoiceItemsTable = ({invoice}) => (
    <View style={styles.tableContainer}>
        <InvoiceTableHeader />
        <InvoiceTableRow items={invoice.invoiceLineItems} />
        <InvoiceTableBlankSpace rowsCount={ tableRowsCount - invoice.invoiceLineItems.length} />
        <InvoiceTableFooter invoice={invoice} />
        <InvoiceTableFooter2 invoice={invoice} />
    </View>
  );
  
  export default InvoiceItemsTable