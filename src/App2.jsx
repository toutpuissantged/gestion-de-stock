import React, { useState } from 'react'
import ClientComponent from './Client'
import NewClientComponent from './NewClient'

class App extends React.Component{

    constructor(){
        super()
        //this.clientImput=React.createRef()
        this.state=
        {
            client:[
              {id:1,nom:'gedeon'},
              {id:2,nom:'hugo'},
              {id:3,nom:'dovortex'},
            ],
        }
        
    }  

    addNewClient(nom){
        let client = this.state.client.slice()
        let id =client[client.length-1].id+1
        const newClient = {
            id,
            nom 
        }
        client.push(newClient)
        this.setState({client:client}) 
        //console.log(this.clientImput.current.value);
      }
      
    RemoveClient(id){
      
        let clients=this.state.client.slice()
        console.log(clients);
        const index=clients.findIndex((client)=>{
          return client.id===id
        })
        console.log(index);
        clients.splice(index,1)
        this.setState({client:clients})
        
      }

    render(){
        let State=this.state
        let nom='gedeon'

        return <div className="App">
        <div className="col-6">
          <h1 className="bg-info text-light text-center mb-5 p-3">Gestion de la clientel</h1>
          <h3 ><span className="bg-info text-light text-center m-3 p-3"> liste de client</span></h3>
          <ul className="m-5">
            {
              State.client.map(client=>(
               <ClientComponent  key={client.id} details={client} onDelete={(client)=>this.RemoveClient(client)} />
              ))
            }
          </ul>
          <div className="m-5" >
            <NewClientComponent onAddNew={(nom)=>this.addNewClient(nom)} />
          </div>
        </div>
      </div>
    }

}

export default App