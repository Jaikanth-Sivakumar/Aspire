export class products{
    productName:String;
    productPrice:number;
    productCategory:String;
    productDescription:String;
    productImage:String;

    constructor(productName:String, productPrice:number, productCategory:String, productDescription:String, productImage:String){
        this.productName=productName;
        this.productPrice=productPrice;
        this.productCategory=productCategory;
        this.productDescription=productDescription;
        this.productImage=productImage;
    }
}