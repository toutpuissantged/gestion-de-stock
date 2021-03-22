import React, { useState } from 'react'

class Client extends React.Component{
    render(){
        let client =this.props.details
        return <li>
                {client.nom} 
                <button
                className="btn btn-danger m-1"
                onClick={()=>this.props.onDelete(client.id)}
                >x</button> 
                </li>
    }

}

export default Client