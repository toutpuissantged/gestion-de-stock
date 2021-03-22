import React, { useState } from 'react'


function addNewClient(State){

  console.log('new client added');
}

function RemoveClient(id,State){

  let Client=State.client
  const index=Client.findIndex((client)=>{
    return client.id===id
  })
  console.log(index);
  Client.splice(index,1)
  //setState({client:Client})
  
}

function App() {

  let State={
    client:[
      {id:1,nom:'gedeon'},
      {id:2,nom:'hugo'},
      {id:3,nom:'dovortex'},
    ]
  }

  return (
    <div className="App">
      <div className="col-6">
        <h1 className="bg-info text-light text-center mb-5 p-3">Gestion de la clientel</h1>
        <h3 ><span className="bg-info text-light text-center m-3 p-3"> liste de client</span></h3>
        <ul className="m-5">
          {
            State.client.map(client=>(
              <li>{client.nom} <button className="btn btn-danger m-1" onClick={()=>RemoveClient(client.id,State)} >x</button> </li>
            ))
          }
        </ul>
        <div className="m-5" >
          <input type="text" className="form-control col-12 my-3" placeholder="nouveau client" />
          <button className="btn btn-info" onClick={()=>addNewClient(State)}>ajouter</button>
        </div>
      </div>
    </div>
  )
}

export default App
