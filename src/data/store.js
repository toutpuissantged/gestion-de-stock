
const data ={
    counter:0,
    temp:{
        "1":0
    },
    produits:[
        {
            id:0,
            name:'pc',
            stock:15,
            selected:true,
            categories:'electronique',
            description:'',
            price:150000,
            createdDate:'',


        },
        {
            id:1,
            name:'ps3',
            stock:20,
            selected:false,
            categories:'',
            description:'',
            price:80000,
            createdDate:'',
            
        },
        {
            id:2,
            name:'xbox',
            stock:10,
            selected:false,
            categories:'',
            description:'',
            price:90000,
            createdDate:'',
            
        },
    ],
    Search:{
        typing:'',
        autocomplete:[]
    },
    CurrentIndex:0,
    ProduitInfo:{}
}

export default data