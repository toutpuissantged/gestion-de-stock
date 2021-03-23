import React  from 'react'
import store from '../data/store'

class App extends React.Component{

    constructor(){
        super()
        this.state=store
        this.state.ProduitInfo=this.state.produits[0]
    } 

    ManageStock(mode){
        const Args=['Add','Remove']
        let ProduitInfo=this.state.ProduitInfo
        let produits=this.state.produits
        const InitStock=ProduitInfo.stock
        let CurrentIndex=this.state.CurrentIndex
        const MaxStock=100
        const MinStock=0

        if(mode===Args[0] && InitStock<MaxStock ) {
            ProduitInfo.stock++
        }
        else if (mode==Args[1] && InitStock>MinStock ) {
            ProduitInfo.stock--
        }
        else{
            return 0
        }
        produits[CurrentIndex].stock=ProduitInfo.stock
        this.setState({produits})
        this.setState({ProduitInfo})
    }

    Typing(e){
        //console.log(e);
        const newChar=e.nativeEvent.data
        let Search = this.state.Search
        if(newChar==null){
            return 0
        }
        Search.typing+=newChar
        this.setState({Search})
        this.Autocomplete(Search.typing)
    }
    Autocomplete(terme){
        const produits=this.state.produits.slice()
        let Search=this.state.Search
        
        let chosed=produits.map((produit)=>{
            //console.log(produit.name);
            const name=produit.name
            //console.log(name.indexOf(terme))
            ////console.log(name.search(terme));
            
            if(name.indexOf(terme)!=-1 ){
                return produit
            }
            
        })
        
        chosed=chosed.filter((chose)=>{
            if(chose!=undefined) return chose
        })
        //console.log(chosed);
        Search.autocomplete=chosed
        this.setState({Search})
    }


    ShowProduit(e){
        let produits=this.state.produits.slice()
       //console.log(e.target.id);
        let ProduitInfo=[]
        let myid=e.target.id

        let index =produits.map((produit,index)=>{  
            produit.selected=false
            if(myid==produit.id) {
               //console.log(index);
                return index
            } 
        })
       //console.log(index);
        let NewIndex=index.filter((index)=>{
            if(index!=undefined || index===0) return index
        })
        
        if(index[0]==0) NewIndex=0
       //console.log(NewIndex);
        ProduitInfo =produits[NewIndex]
        ProduitInfo.selected=true
        this.setState({CurrentIndex:NewIndex})
        this.setState({ProduitInfo})

    }
    render(){
        const ProduitInfo=this.state.ProduitInfo
        let typing =this.state.Search.typing.slice()
        return <div className="App container">
        <div className="col-12">
            <div id="title" className="bg-primary text-center p-3 my-3 text-light">
                <h2>Stok3r</h2>
                <h5>gerer facilement vos stock de produit</h5>
            </div>
        <div className="row  offset-8 col-4">
            <div class="input-group col-12">
                <input type="text" className="form-control" onChange={(e)=>{this.Typing(e)}} value={typing}  placeholder="rechercher ici"  aria-describedby="button-addon2"/>
                <div className="input-group-append">
                    <button className="btn btn-primary" type="button" id="button-addon2"><i className="fas fa-search"></i></button>
                </div>
            </div>
            <div class="list-group position-absolute m-5 col-8">
                {this.state.Search.autocomplete.map((produit)=>{
                return <a href="#" key={produit.id} Id={produit.id}  onClick={(e)=>{this.ShowProduit(e)}} className="list-group-item list-group-item-action" >{produit.name}</a>
                })}
            </div>
        </div> 
        
        <div className="row my-3">
            <div className="list-group col-4">
            {this.state.produits.map((produit)=>{
               //console.log(produit.id);
                let produitId=produit.id
                return <a href="#" key={produit.id} Id={produit.id}  onClick={(e)=>{this.ShowProduit(e)}}  className={produit.selected?'active list-group-item list-group-item-action':'list-group-item list-group-item-action'}>{produit.name}</a>
            })}
            </div>
            <div className="row shadow text-bold pr-3">
                <div className="col-9">
                    <p>identifient du produit : {ProduitInfo.id}</p>
                    <h6>nom du produit : {ProduitInfo.name}</h6>
                    <p>categories : {ProduitInfo.categories}</p>
                    <p>description :{ProduitInfo.description}</p>
                    <p>stock restent : {ProduitInfo.stock}</p>
                    <p>prix : {ProduitInfo.price} FCFA</p>
                    <p>date de creation : {ProduitInfo.createdDate}</p>
                </div>
                <div className="col-3">
                    <center className="row">
                    <button onClick={()=>{this.ManageStock('Add')}} className="btn btn-primary col-12 my-2">augmenter</button>
                    <button onClick={()=>{this.ManageStock('Remove')}} className="btn btn-danger text-center col-12">diminuer</button>
                    </center>
                    
                </div>
            </div>
        </div>
        
        </div> 
      </div>
    }

}

export default App