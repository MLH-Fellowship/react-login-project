import React from 'react'
import Table, { SelectColumnFilter } from './Table'


const getData = () => { 
  const data = [
    {
      name: 'Lydia Farag',
      email: 'farag.lydia@gmail.com',
      title: 'MLH OS Fellow @ MSKCC',
      department: 'Optimization',
      status: 'Active',
      role: 'Admin',
      age: 20,
      linkedin: https://www.linkedin.com/messaging/thread/2-MjcwNTg2MWQtYjliMy00NTY0LWE0ZmEtODlkNGE5ZTk5MzkyXzAxMA==/
    }, 
    
    {
      name: 'Jennifer Flores',
      email: '',
      title: 'MLH OS Fellow @ MSKCC',
      department: 'Optimization',
      status: 'Active',
      role: 'Admin',
      age: 20,
      linkedin: 
    }, 
      {
      name: 'Christian Petricaa',
      email: 'petricca@gmail.com',
      title: 'Person',
      department: 'Student ',
      status: 'Active',
      role: 'Admin',
      age: 20,
      linkedin: https:/
    }, 
    {
      name: '',
      email: 'lyds@gmail.com',
      title: 'MLH',
      department: 'Optimization',
      status: 'Active',
      role: 'Admin',
      age: 20,
      linkedin: 
    },
   ]
  return [...data, ...data, ...data]
}

function App() {

  const columns = React.useMemo(() => [
    {
      Header: "Name",
      accessor: 'name',
    },
    {
      Header: "Title",
      accessor: 'title',
    },
    {
      Header: "Status",
      accessor: 'status',
    },
    {
      Header: "Age",
      accessor: 'age',
    },
    {
      Header: "Role",
      accessor: 'role',
      Filter: SelectColumnFilter,  // new
      filter: 'includes',
    },
  ], [])
  
  
  const data = React.useMemo(() => getData(), [])
  
  
  return (
    <>
      <h1>Hello React!</h1>
      <div>
        <Table columns={columns} data={data} />
      </div>
    </>
  );
}

export default App;
    
    









      
      
