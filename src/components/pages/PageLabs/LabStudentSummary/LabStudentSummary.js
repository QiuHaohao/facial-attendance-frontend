import React from 'react';
import api from '../../../../api/api';
import {withRouter} from 'react-router-dom';
import {Table, Select, Input, Button} from 'antd';
import {useState, useEffect} from 'react';
import EntryInfoDisplayer from '../EntryInfoDisplayer/EntryInfoDisplayer';
function LabStudentSummary(props) {
  const matricNO= props.match.params.id;
  const {Option}= Select;

  const [sessions, setSessions]=useState(null);
  const [studentInfo, setStudentInfo]=useState(null);


  useEffect(() => {
          api.getStudentByMid(matricNO).then(res=>{
              setSessions(res.sessions);
              setStudentInfo({
                  name: res.name,
                  email: res.email
              })
          });
          return(()=>{
            setSessions(null);
            setStudentInfo(null);
        });
  }, []);
  
  const columns =[
      {
          title: 'Session ID',
          dataIndex: 'sid',
          key: 'sessionID',
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
                  onBlur={e=> changeRemark(record,e.target.value)}
                  />
          ),
          align:'center'
      }
  ] 

  const changeAttendance=(record,e)=>{
      var tempsessions= sessions;
      for (var i=0;i<tempsessions.length;i++){
          if (tempsessions[i].sessionID===record.sid) 
              tempsessions[i].attendance=e;
              break;
      }
      setSessions(tempsessions);
  }

  const changeRemark= (record,e)=>{
      var tempsessions= sessions;
      for (var i=0;i<tempsessions.length;i++){
          if (tempsessions[i].sessionID===record.sid) 
              tempsessions[i].remark=e;
              break;
      }
      setSessions(tempsessions);
  }
  
  const saveChanges = ()=>{
        api.saveStudentChangesByMid(sessions,matricNO);
  }

 return (
  <div>
      {studentInfo==null?(<div>Loading...</div>):<EntryInfoDisplayer content={[studentInfo.name,matricNO,studentInfo.email]} header={["Name", "Matric No", "Email"]}/>}
      <Table 
          columns={columns}
          dataSource={sessions}
          pageination={{
              pageSize: '10'
          }}
          style={{backgroundColor:'rgba(255,255,255,0.2)'}}
      />
      <Button onClick={saveChanges} className='lab-save-button'>Save</Button>
  </div>
);
}

export default withRouter(LabStudentSummary);
