 var items=[65, 51, 25, 31, 45, 55, 36, 28, 18, 53, 48, 80, 85, 91, 53, 69, 21, 35, 40]
//  for(var i = 0; i < items.length; i++){
//     var item = items[i];
//     if(item > 48){
//         continue
//     }
//     console.log(item);
//  }
 var i =0;
 while( i < items.length){
    var item=items[i];
    i++
    if(item > 53){
        continue
    }
    console.log(item);
 }