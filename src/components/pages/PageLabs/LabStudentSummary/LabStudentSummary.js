import React from 'react';
import {withRouter} from 'react-router-dom';
import {Table, Select, Input, Button} from 'antd';
import {useState} from 'react';
import EntryInfoDisplayer from '../EntryInfoDisplayer/EntryInfoDisplayer';
function LabStudentSummary(props) {
  const marticNO= props.match.params.id;
  const studentInfo=null;
  const {Option}= Select;
  //fake data
  const [sessions,setSessions]=useState([
      {
          sessionID: 'PLC',
          attendance: 'Present',
          remark: ''
      },
      {
          sessionID: 'PLC',
          attendance: 'Absent',
          remark: ''
      },
      {
          sessionID: 'PLC',
          attendance: 'Absent/valid reason',
          remark: ''
      },
  ]);


  const columns =[
      {
          title: 'Session ID',
          dataIndex: 'sessionID',
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
  
    // const [studentss, setStudents]=useState(null);

    // useEffect(() => {
    //     return ()=>{
    //         studentInfo=api.getStudentByMid(matricNO);
    //         setStudents(sessionInfo.students);
    //     }
    // }, []);

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
    // api.saveStudentChangesByMid(students,matricNO);
    console.log("succeeed");
  }

 return (
  <div>
      <EntryInfoDisplayer content={["studentInfo.name",marticNO,"studentInfo.email"]} header={["Name", "Matric No", "Email"]}/>
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
