import React from "react";
import Table,{SelectColumnFilter} from "./Table";

const getData = () => [

  {
    name: "Jane",
    middle:"",
    lastname:"Cooper",
    sex: "Female",
    age:"14",
    email: "j.cooper@example.com",
    phonenumber: "(121)919-3458",
    department: "Optimization",
    status: "Active",
    role: "Patient",
  },
  {
    name: "Cody",
    middle:"Lee",
    lastname:"Fisher",
    sex: "Male",
    age:"19",
    email: "cody.fisher@example.com",
    phonenumber: "(412)347-6292",
    department: "Intranet",
    status: "Active",
    role: "Patient",
  },
  {
    name: "Esther",
    middle:"Lindel",
    lastname:"Howard",
    sex: "Female",
    age:"21",
    email: "esther.howard@example.com",
    phonenumber: "(210)182-1437",
    department: "Directives",
    status: "Active",
    role: "Patient",
  },
  {
    name: "Jenna",
    middle:"Bert",
    lastname:"Wilson",
    sex: "Female",
    age:"12",
    email: "jenna_b_w.wilson@example.com",
    phonenumber: "(919)231-4378",
    department: "Program",
    status: "Active",
    role: "Doctor",
  },
  {
    name: "Kris",
    middle:"",
    lastname:"Watson",
    sex: "Male",
    age:"32",
    email: "Wats_kris.watson@example.com",
    phonenumber: "(919)231-4377",
    department: "Mobility",
    status: "Active",
    role: "Admin",
    },
  {
    name: "Cameron",
    middle:"",
    lastname:"Williamson",
    sex: "Male",
    age:"50",
    email: "cameron.williamson@example.com",
    phonenumber: "(510)331-2540",
    department: "Security",
    status: "Active",
    role: "Patient",
  },
  {
    name: "Camille",
    middle:"Amanda",
    lastname:"Williamson",
    sex: "Female",
    age:"43",
    email: "cam.williamson@example.com",
    phonenumber: "(510)332-7640",
    department: "Security",
    status: "Inactive",
    role: "Patient",
  },
  
];





function App() {

 const columns = React.useMemo(() => [
    {
      Header: " First Name",
      accessor: "name",
    },
    {
      Header: " Middle Name",
      accessor: "middle",
    },
    {
      Header: " Last Name",
      accessor: "lastname",
    },
    {
      Header: "Gender",
      accessor: "sex",
    },
    {
      Header: "Age",
      accessor: "age",
    },
    {
      Header: "Contact Number",
      accessor: "phonenumber",
    },
    {
      Header: "Status",
      accessor: "status",
    },
    {
      Header: "Role",
      accessor: "role",
      Filter:SelectColumnFilter,
      filter:'includes',
    },

  ],[]);

 const data = React.useMemo(() => getData(), []);

  return (
    <>
      <h1> Hello React!</h1>
      <div>
        <Table columns= {columns} data={data} />
      </div>
    </>
  );
}

export default App;
