//3. Use the same rest countries and print all countries name, region, sub region and population
//setting up http request
var xhr=new XMLHttpRequest();
xhr.open("GET","https://restcountries.com/v2/all");
xhr.send();

//Setting up a listner where server listens to our request 
xhr.onload=function(){
    //processes the request and server will return the data in response
    if(xhr.status>=200 && xhr.status<300){
       //converts raw into js notation format 
         var data=JSON.parse(xhr.response);
            // console.log(data);
            for(var i=0; i<data.length; i++){
                console.log(data[i].name);
                console.log(data[i].region);
                console.log(data[i].subregion);
                console.log(data[i].population);
            }
    }else{
        //you should print the error 
        console.log("Data is not available");
    }
}
// Output in browser console
/*Afghanistan
Asia
Southern Asia
40218234

Åland Islands
Europe
Northern Europe
28875

Albania
Europe
Southern Europe
2837743
.
.
.
*/
