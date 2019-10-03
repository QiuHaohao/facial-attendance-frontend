import React from 'react';
import {withRouter} from 'react-router-dom';
import {Table, Select, Input, Button} from 'antd';
import {useState} from 'react';
import EntryInfoDisplayer from '../EntryInfoDisplayer/EntryInfoDisplayer';
function LabStudentSummary(props) {
  const marticNO= props.match.params.id;
  const studentInfo=null;
  const {Option}= Select;

  const [sessions, setSessions]=useState(null);

  useEffect(() => {
      return ()=>{
          studentInfo=api.getStudentByMid(matricNO);
          setSessions(studentInfo.students);
      }
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
      var tempsessions= sessions;
      for (var i=0;i<tempsessions.length;i++){
          if (tempsessions[i].sessionID===record.sessionID) 
              tempsessions[i].attendance=e;
              break;
      }
      setSessions(tempsessions);
  }

  const changeRemark= (record,e)=>{
      var tempsessions= sessions;
      for (var i=0;i<tempsessions.length;i++){
          if (tempsessions[i].sessionID===record.sessionID) 
              tempsessions[i].remark=e;
              break;
      }
      setSessions(tempsessions);
  }
  
  const saveChanges = ()=>{
    api.saveStudentChangesByMid(sessions,matricNO);
    console.log("succeeed");
  }

 return (
  <div>
      <EntryInfoDisplayer content={[studentInfo.name,marticNO,studentInfo.email]} header={["Name", "Matric No", "Email"]}/>
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
