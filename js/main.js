//var mySelf= '{"firstName":"akshat", "lastName": "Sharma", "age":"27"}';
//var myObject=JSON.parse(mySelf);
//console.log(mySelf);
//console.log(myObject);
//console.log(JSON.stringify(myObject));
var xhr=new XMLHttpRequest();
console.log(xhr.readyState);
xhr.open('GET','data.json',true);


xhr.send();
console.log(xhr.readyState);
xhr.onreadystatechange=function(){
    console.log(xhr.readyState);

}

xhr.onload=function(){
    console.log("inside success");
 if(xhr.status==200){
     var data=JSON.parse(xhr.responseText)
    console.log(data);
 }
}
xhr.onerror=function(){
    console.log("inside error");
    console.log(xhr.responseText);
}

