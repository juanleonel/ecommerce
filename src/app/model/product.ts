export class Product {

    sale: boolean = false;

    constructor(public id: string, public name: string, public price: number, public image:string, public quantity: number){

    }
    
    isSale(){
        return this.isSale;
    }

    isQuantityValid(){
        
        if(this.quantity <= 0){
            return false;
        }

        return true;
    }
}
