import React from 'react'
import Table from '../component/Table'



export const columns=[
    {field:"code", header:"Code" },
    {field:"name",header:"Name"},
    {field:"category",header:"Category"},
    {field:"quantity" ,header:"Quantity"}
  ];
  
  
  export const products=[
    {code:"0011",name:"Bamboo Watch",category: 'Accessories',quantity: 24},
      {code:"0012",name:"Black Watch",category: 'Accessories',quantity: 26},
      {code:"0021",name:"Blue Band",category: 'Fitness',quantity: 20},
      {code:"0031",name:"Blue T-shirt",category: 'Cloth',quantity: 50,},
      {code:"0013",name:"Bracelet",category: 'Accessories',quantity: 10,},
      {code:"0032",name:"Blue Jean",category: 'Cloth',quantity: 15},
      {code:"0033",name:"White T shirt",category: 'Cloth',quantity: 15},
      {code:"0014",name:"white Watch",category: 'Accessories',quantity: 50},
      {code:"0022",name:"Dumbells",category: 'Fitness',quantity: 10},
      {code:"0023",name:"Mat",category: 'Fitness',quantity: 15},
    
  ]
function PageTwo() {
    
    
    return (
        <div className='table-Contianer'>
            <Table
                data={products}
                columns={columns}
                sortable />
        </div>
    )
}

export default PageTwo