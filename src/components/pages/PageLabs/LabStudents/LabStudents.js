import React from 'react';
import api from '../../../../api/api';
import {withRouter} from 'react-router-dom';
import {useState, useEffect} from 'react';
import { Table } from 'antd';
import LabNameHolder from '../LabNameHolder/LabNameHolder';
import '../PageLabs.css';
function LabStudents(props){
    const defaultPath=props.location.pathname;
    const lid= defaultPath.split('/')[2][0];
    const lname=defaultPath.split("/")[2].substr(1,);

    const [students, setStudents]= useState(null);
    useEffect(() => {
            api.getStudentsByLid(lid)
             .then(res=>{setStudents(res)});
    }, [])
    const columns =[
        {
            title: 'Name',
            dataIndex: 'name',
            key:'name',
            align:'center'
        },
        {
            title: 'Matric No.',
            dataIndex: 'mid',
            key:'mid',
            align:'center'
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key:'email',
            align:'center'
        }
    ]

    const LinkTo= (id)=>{
        props.history.push(defaultPath+'/'+id);
        // tbc
    }

    return (
        <div>
        <LabNameHolder lname={lname} />
        <Table 
            columns={columns} 
            dataSource={students}
            pageination={{
                pageSize: '10'
            }}
            onRowClick={
                (record)=>{
                    LinkTo(record.mid);
                }
            }
            style={{backgroundColor:'rgba(255,255,255,0.2)'}}/>
        </div>
        );
}

export default withRouter(LabStudents);