
import React, { Component ,useEffect,useState} from 'react';
import Table from './components/Table';

// class App extends Component {
//   constructor(props) {
//     super();
//     this.state = { JsonData:"" }
//   }

//   async componentDidMount() {
//     console.log("run after")
//     await fetch('https://restcountries.com/v3.1/all'
    
//     )
//       .then(response => response.json())
//       .then(data => {
//         // console.log(data)
//         this.setState({ JsonData: data })
//       });
    

//   }

//   render() {
//     // console.log(this.state.JsonData)
//     return (
//       <Table
//         tabledata={this.state.JsonData}
//         // secpros={"secondprop"}
//         // updatedata = {()=>this.setState}
//       />
//      );
//   }
// }

function App() {
  const [tableData, setTableData] = useState();

  useEffect(() => {
    const getData = async () => {
      const res = await fetch('https://restcountries.com/v3.1/all');
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json()
      
      // console.log(data)
      setTableData(data)
    }
    getData()
  },[])

  return (
    <div className='App'>
      <Table tabledata={tableData} />
    </div>
  );
}

export default App;
