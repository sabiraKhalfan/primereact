import React from 'react'
import Table from '../component/Table'
export const columns=
[
    {field:"code", header:"Code" },
    {field:"name",header:"Name"},
    {field:"category",header:"Category"},
    {field:"quantity" ,header:"Quantity"},
    {field:"price", header:"Price"},
    {field:"rating",header:"Rating"}

];

    
    export const products = [
    {code:"0011",name:"Bamboo Watch",category: 'Accessories',quantity: 24,price:24000,rating:5},
    {code:"0012",name:"Black Watch",category: 'Accessories',quantity: 26,price:18000,rating:6},
    {code:"0021",name:"Blue Band",category: 'Fitness',quantity: 20,price:2000,rating:4},
    {code:"0031",name:"Blue T-shirt",category: 'Cloth',quantity: 50,price:550,rating:5},
    {code:"0013",name:"Blracelet",category: 'Accessories',quantity: 10,price:250,rating:5},
    {code:"0032",name:"Blue Jean",category: 'Cloth',quantity: 15,price:560,rating:6},
    {code:"0033",name:"White T shirt",category: 'Cloth',quantity: 15,price:560,rating:6},
    {code:"0014",name:"white Watch",category: 'Accessories',quantity: 50,price:5600,rating:6},
    {code:"0022",name:"Dumbells",category: 'Fitness',quantity: 10,price:2000,rating:6},
    {code:"0023",name:"Mat",category: 'Fitness',quantity: 15,price:560,rating:6},
    ];


    function PageOne() {

    return (
        <div className=' table-Contianer'>
            <Table
                columns={columns}
                data={products}
                paginator
                filter />
        </div>
    )
}

export default PageOne