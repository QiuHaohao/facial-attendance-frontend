import React from 'react';
import api from '../../../../api/api';
import {withRouter} from 'react-router-dom';
import {useState, useEffect} from 'react';
import { Table } from 'antd';
import LabNameHolder from '../LabNameHolder/LabNameHolder';

import '../PageLabs.css';
function LabSessions(props){
    const defaultPath=props.location.pathname;
    const lid=defaultPath.split("/")[2][0];
    const lname=defaultPath.split("/")[2].substr(1,);
    const [sessions, setSessions]= useState(null);
    
    
    useEffect(() => {
            api.getSessionsByLid(lid).then(res=>{setSessions(res)});
            return(()=>{
                setSessions(null);
            })
    }, [])

    const columns =[
        {
            title: 'SessionID',
            dataIndex: 'sid',
            key:'sid',
            align:'center'
        },
        {
            title: 'Time',
            dataIndex: 'time',
            key:'time',
            align:'center'
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key:'date',
            align:'center'
        }
    ]



    const LinkTo= (id)=>{
        props.history.push(defaultPath+'/'+id);
        // tbc
    }
    return (
        <div>
        <LabNameHolder lname={lname}/>
        <Table 
            columns={columns} 
            dataSource={sessions}
            pageination={{
                pageSize: '10'
            }}
            onRowClick={
                (record)=>{
                    LinkTo(record.sid);
                }
            }
            className='standard-table'/>
        </div>

        );
}

export default withRouter(LabSessions);