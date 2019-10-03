import React from 'react';
import {withRouter} from 'react-router-dom';
import {Table, Select, Input, Button} from 'antd';
import {useState, useEffect} from 'react';
import api from "../../../../api/api"
import EntryInfoDisplayer from '../EntryInfoDisplayer/EntryInfoDisplayer';

function LabSessionSummary(props) {
    const sessionID= props.match.params.id;
    const sessionInfo=null;
    const {Option}= Select;

    const [students, setStudents]=useState(null);

    useEffect(() => {
        return ()=>{
            sessionInfo=api.getSessionBySid(sessionID);
            setStudents(sessionInfo.students);
        }
    }, []);

    const columns =[
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            align:'center'
        },
        {
            title: 'Matric No.',
            dataIndex: 'mid',
            key: 'matricno',
            align:'center'
        },
        {
            title: 'Attendance',
            dataIndex: 'attendance',
            key: 'attendance',
            render: (attendance,record)=>
                    (
                    <Select 
                        defaultValue={attendance}
                        onChange={e => changeAttendance(record,e)}
                        style={{width:200}}
                        >
                        <Option value='Present'>Present</Option>
                        <Option value='Absent/valid reason'>Absent/valid reason</Option>
                        <Option value='Absent'>Absent</Option>
                    </Select>
                    ),
            align:'center'
        },
        {
            title: 'Remark',
            dataIndex: 'remark',
            key: 'remark',
            render: (remark,record)=>(
                <Input placeholder='Remarks' 
                    defaultValue={remark}
                    onChange={e=> changeRemark(record,e)}
                    />
            ),
            align:'center'
        }
    ] 

    const changeAttendance=(record,e)=>{
        var tempstudents= students;
        for (var i=0;i<tempstudents.length;i++){
            if (tempstudents[i].mid===record.matricno) 
                tempstudents[i].attendance=e;
                break;
        }
        setStudents(tempstudents);
    }

    const changeRemark= (record,e)=>{
        var tempstudents= students;
        for (var i=0;i<tempstudents.length;i++){
            if (tempstudents[i].mid===record.matricno) 
                tempstudents[i].remark=e;
                break;
        }
        setStudents(tempstudents);
    }                                                                                                                                                                     

    const saveChanges = ()=>{
        api.saveStudentChangesBySid(students,sessionID);
        console.log("succeeed");
    }

   return (
    <div>
        <EntryInfoDisplayer content={[sessionID, sessionInfo.venue,sessonInfo.time,sessionInfo.date]} header={["Session ID", "Veunue", "Time", "Date"]}/>
        <Table 
            columns={columns}
            dataSource={students}
            pageination={{
                pageSize: '10'
            }}
            style={{backgroundColor:'rgba(255,255,255,0.2)'}}
        />
        <Button onClick={saveChanges} className='lab-save-button'>Save</Button>
    </div>
  );
}

export default withRouter(LabSessionSummary);
