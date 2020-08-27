import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const nayoks=['razzak','alamgir','salman']
    const products=[{name:'photoshop', price:'$99'},
                    {name:'ellastrator',price:'$20'},
                    {name:'templeRun',price:'$5'}]
    // const nayoksName=nayoks.map(nayok=>nayok)
    // console.log(nayoksName);
    return (
        <div className = "App" >
        <header className = "App-header" >
        <p>I am a react person</p>

        <Counter></Counter>
        <Users></Users>

        <ul>
            {
                nayoks.map(nayok=><li>{nayok}</li>)
            }
            {
                products.map(product=><li>{product.name}</li>)
            }
            {
                products.map(product=><Product product={product}></Product>)
            }
            {/* <li>{nayoks[0]}</li>
            <li>{nayoks[1]}</li>
            <li>{nayoks[2]}</li> */}
        </ul>
       <Product product={products[0]}></Product>
       <Product product={products[1]}></Product>
       <Product product={products[2]}></Product>

        {/* <Person bf="Sakib khan" gf="Apu Bissus"></Person>
        <Person bf="Bapparaz" gf="Chakakhor"></Person>
        <Person bf="Rayhan" gf="M3"></Person> */}

        </header >
        </div>
    );
}
// function Person(profileAll){
    // const style={
    //     border:"2px solid green",
    //     margin: "10px",
    //     width: "400px",
    //     color: "red",
    //     backgroundColor: "yellow",
    //     padding: "10px",
    //     borderRadius: "50%"
    // }
    function Counter(){
        const [count, setCount]=useState(100);
        //const handleIncrease=()=>setCount(count+1);
        return(
            <div>
                <h1>Count: {count}</h1>
                <button onClick={()=>setCount(count-1)}>Decrease</button>
                <button onClick={()=>setCount(count+1)}>Increase</button>
            </div>
        )
    }

    function Users(){
        const [users,setUsers]=useState([]);
        useEffect(()=>{
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(res=>res.json())
            .then(data=>setUsers(data))
        },[])
        return(
            <div>
                <h3>Dynamic Users: {users.length}</h3>
                <ul>
                    {
                        users.map(user=><li>{user.name}</li>)
                    }
                </ul>
            </div>
        )
    }

    function Product(profileAll){
        const style2={
            border:'2px solid gray',
            borderRadius:'5px',
            backgroundColor: 'green',
            height:'200px',
            width:'200px'
    }

    
    
    return (
<div style={style2}>
    <h3>{profileAll.product.name}</h3>
    <h5>{profileAll.product.price}</h5>
    <button>Buy Now</button>
</div>
    );
    }

export default App;