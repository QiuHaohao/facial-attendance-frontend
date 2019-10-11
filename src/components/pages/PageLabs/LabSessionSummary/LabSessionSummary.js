import React from 'react';
import {withRouter} from 'react-router-dom';
import {Table, Select, Input, Button} from 'antd';
import {useState, useEffect} from 'react';
import api from "../../../../api/api"
import EntryInfoDisplayer from '../EntryInfoDisplayer/EntryInfoDisplayer';

function LabSessionSummary(props) {
    const sessionID= props.match.params.id;
    const {Option}= Select;

    const [students, setStudents]=useState(null);
    const [sessionInfo, setSessionInfo]=useState(null);

    useEffect(() => {
            api.getSessionBySid(sessionID)
                .then(res=> {
                    setSessionInfo({
                        date: res.date,
                        time: res.time
                    });
                    setStudents(res.students);  
                });
            return(()=>{
                setStudents(null);
                setSessionInfo(null);
            });
            
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
                        <Option value='A'>Attended</Option>
                        <Option value='L'>Late</Option>
                        <Option value='AB'>Absence without valid reasons</Option>
                        <Option value='MC'>Missing with valid reasons</Option>
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
                    onBlur={e=>changeRemark(record,e.target.value)}
                    />
            ),
            align:'center'
        }
    ] 

    const changeAttendance=(record,e)=>{
        var tempstudentsA= students;
        for (var i=0;i<tempstudentsA.length;i++){
            if (tempstudentsA[i].mid===record.mid) 
                tempstudentsA[i].attendance=e;
                break;
        }
        setStudents(tempstudentsA);
    }

    const changeRemark= (record,e)=>{
        var tempstudentsR= students;
        for (var i=0;i<tempstudentsR.length;i++){
            if (tempstudentsR[i].mid===record.mid) 
                tempstudentsR[i].remark=e;
                break;
        }
        setStudents(tempstudentsR);
    }                                                                                                                                                                     

    const saveChanges = ()=>{
        api.saveStudentChangesBySid(students,sessionID);
    }

   return (
    <div>
        {sessionInfo==null?(<div>Loading...</div>):<EntryInfoDisplayer content={[sessionID,sessionInfo.date,sessionInfo.time]} header={["Session ID", "Date", "Time"]}/>}
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
