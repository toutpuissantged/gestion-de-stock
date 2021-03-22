import React, { useState } from 'react'

class NewClientComponent extends React.Component{
    constructor(){
        super()
        this.state={
            nouveauClient:''
        }
        this.data=''
        
    }
    handleChange(event){
        const value = event.target.value
        //console.log(event);
        this.setState({nouveauClient:value})
        this.data=value
    }
    
    addNewClient(){
        let nom=this.state.nouveauClient.slice()
        //const nom = state.nouveauClient
        this.setState({nouveauClient:''})

      }

    render(){

        let client =this.props.details
        let nouveauClient=this.state.nouveauClient.slice()
        //let nom =this.addNewClient()
        let data=this.data
        return <div>
        <input onChange={(e)=>this.handleChange(e)} value={nouveauClient} type="text" className="form-control col-12 my-3" placeholder="nouveau client" />
        <button className="btn btn-info" onClick={()=>this.props.onAddNew()}>ajouter</button>
        </div>
    }

}

export default NewClientComponent