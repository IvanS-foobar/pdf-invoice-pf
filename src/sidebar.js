import { RiBillLine } from 'react-icons/ri';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import MainForm from './MainForm';

export default SideBar;

//function to convert Mongo DateTime objects to preferred Front-End Datetime objects
function mongoDTToFEDT(dtObj){
    if(dtObj === null){
        return ""
    }
    var splitData = dtObj.split('');
    var Date = [];
    Date.push(splitData[0] + splitData[1] + splitData[2] + splitData[3])
    Date.push(splitData[5] + splitData[6])
    Date.push(splitData[8] + splitData[9])
    return Date.join("-")
    
}


function SideBar(parentData) {
    const [invoices, setInvoices] = useState([])
    const [role] = useState(parentData.userRole)
    const [invoiceNumber, setInvoiceNumber] = useState(10000000)
    const [createdBy, setCreatedBy] = useState(parentData.userData.email)
    
    const sendInvoiceNumber = (clickedInvoiceNum) => {
        setInvoiceNumber(clickedInvoiceNum)
        console.log(clickedInvoiceNum)
    }

    //useEffect for loading all invoices created by the User, or all invoices if user is Admin
    useEffect(() => {
        if (role === 'admin'){setCreatedBy('*')}
        var rawData
        axios.get('http://localhost:3001/api/getInvoices', {headers: parentData.authHeader, params: {createdBy: createdBy}}).then(function (data){
        rawData = data.data.data;
        }).then((response) =>
            setInvoices(rawData)
    )}, [parentData, createdBy, role])

        return (
            <React.Fragment>
                <nav className="d-flex flex-column align-items-stretch flex-shrink-0 bg-white" style={{width: '250px'}}>
                <div className="d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom border-right">
                <span className="fs-5 fw-semibold"><h5>Logged in as: {role}</h5></span>
                </div>
                <div className="overflow-auto list-group list-group-flush border-bottom border-right">
                {/* <div class="sidebar-sticky"> */}
                
                {/* Render the invoices on the sidebar */}
                {invoices.map(i => (
                    <div className="list-group-item list-group-item-action py-3 lh-sm">
                        
                        <h3 className="d-flex w-100 align-items-center justify-content-start">
                        
                            <RiBillLine color="black" fontSize={25}/>
                        {i.invoiceNumber}
                        </h3>
                        <div className="col-10 mb-1 small">
                        <button type="button" className="btn btn-outline-primary m-1" onClick={() => sendInvoiceNumber(i.invoiceNumber)}>Load</button>
                        
                        
                        {mongoDTToFEDT(i.invoiceDate)}<br/>
                        {i.createdBy}
                        </div>
                    </div>
                    
                
                ))}
                </div>
                </nav>
                <div class="b-example-divider b-example-vr"></div>
                <MainForm sendInvoiceNumber={invoiceNumber} authHeader={parentData.authHeader}/>
            </React.Fragment>
            )}

