import React from 'react';
import api from '../../../../api/api';
import {withRouter} from 'react-router-dom';
import {useState, useEffect} from 'react';
import { Table } from 'antd';
import LabNameHolder from '../LabNameHolder/LabNameHolder';
import '../PageLabs.css';
function LabStudents(props){
    const defaultPath=props.location.pathname;
    const lid= defaultPath.split('/')[2];
    //fake data
    const [students,setStudents]=useState(
        [
            {
                name:'PLC',
                matricno:'PENG0085',
                email:'peng0085@e.ntu.edu.sg'

            },
            {
                name:'PLC',
                matricno:'PENG0085',
                email:'peng0085@e.ntu.edu.sg'

            },
            {
                name:'PLC',
                matricno:'PENG0085',
                email:'peng0085@e.ntu.edu.sg'

            },
        ]
        
    );

    const columns =[
        {
            title: 'Name',
            dataIndex: 'name',
            key:'name',
            align:'center'
        },
        {
            title: 'Matric No.',
            dataIndex: 'matricno',
            key:'matricno',
            align:'center'
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key:'email',
            align:'center'
        }
    ]

    // const [students, setStudents]= useState(null);
    // useEffect(() => {
    //     return ()=>{
    //         const labSessions=api.getSessionsByLid();
    //         setSessions(labSessions);
    //     }
    // }, [])

    const LinkTo= (id)=>{
        props.history.push(defaultPath+'/'+id);
        // tbc
    }

    return (
        <div>
        <LabNameHolder lname={lid} />
        <Table 
            columns={columns} 
            dataSource={students}
            pageination={{
                pageSize: '10'
            }}
            onRowClick={
                (record)=>{
                    LinkTo(record.matricno);
                }
            }
            style={{backgroundColor:'rgba(255,255,255,0.2)'}}/>
        </div>
        );
}

export default withRouter(LabStudents);