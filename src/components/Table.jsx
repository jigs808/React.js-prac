import React from 'react';
import './Table.css';

// arr =
// class Table extends Component {

//     render() {
//         let { tabledata} = this.props

function Table({ tabledata}) {
    

        
return ( 
        
    <table>
        {console.log(tabledata)}
        <thead>
            <tr>
                <th>Country Name</th>
                <th>Capital</th>
            </tr>
        </thead>
        <tbody>
        
        
                {/* {
                    // Object.keys() is imp for looping through objects
                Object.keys(tabledata).map( (result, index) => ( 
                <tr key={index}>
                    <td> {tabledata[result]['name'].common} </td>
                    <td> {tabledata[result]['capital']} </td>
                </tr>
                // console.log(tabledata[result]['capital'])
                
                )
                    
                    
            )
                } */}

                {tabledata && // this condition checks if Tabledata has got the value then Looping is continued
                    tabledata.map((res, index) => (
                    <tr key={index}>
                        <td> {res['name'].common} </td>
                        <td> {res['capital']} </td>
                    </tr>
                    ))
                }
                
        </tbody>
    </table>

    );
}


 
export default Table;