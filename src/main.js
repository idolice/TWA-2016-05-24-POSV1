//TODO: Please write code in this file.
function printInventory(inputs) {

    var products=[];

    function hasBarcode(barcode){
        for(var m=0;m<products.length;m++){
            if(products[m].barcode==barcode){
            return m;
          }
       }
        return -1;
    }

    function setValue(product,input){
        product.num=1;
        product.name=input.name;
        product.barcode=input.barcode;
        product.unit=input.unit;
        product.price=input.price;

    }

    function printResult(product){
            var sum=product.num*product.price;
            var singleString="名称："
                         +product.name
                         +"，数量："
                         +product.num
                         +product.unit
                         +"，单价："
                         +product.price.toFixed(2)
                         +"(元)，小计："
                         +sum.toFixed(2)
                         +"(元)"
                         +"\n";
            var result=new Object();
            result.str=singleString;
            result.sum=sum;
            return result;

    }

    for(var i=0;i<inputs.length;i++){
        var product =new Object();
        if((j=hasBarcode(inputs[i].barcode))!=-1)
           {
             products[j].num++;
           }
        else{
              setValue(product,inputs[i]);
              products.push(product);
       }

    }

    var total=0;
    var beginString="***<没钱赚商店>购物清单***\n";
    var text=beginString;

    for(var j=0;j<products.length;j++){
        text=text+printResult(products[j]).str;
        total=total+printResult(products[j]).sum;
    }
    var endString="----------------------\n"+"总计："+total.toFixed(2)+"(元)"+"\n"+"**********************";
    text+=endString;
    console.log(text);


}