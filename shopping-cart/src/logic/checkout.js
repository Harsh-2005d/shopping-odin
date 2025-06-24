
const checkout= new Map();

function Checkout(id){
    
    if(checkout.has(id)){
        checkout.set(id,checkout.get(id)+1);
    }else{
        checkout.set(id,1);
    }
}
function Bill(data){
    let price=0;
    checkout.forEach((value,id)=>{
        price+=data[id-1].price*value;
    })
    return price;
}
export {Checkout,Bill}