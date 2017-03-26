//var mySelf= '{"firstName":"akshat", "lastName": "Sharma", "age":"27"}';
//var myObject=JSON.parse(mySelf);
//console.log(mySelf);
//console.log(myObject);
//console.log(JSON.stringify(myObject));
var xhr = new XMLHttpRequest();
console.log(xhr.readyState);
xhr.open('GET', 'data.json', true);
xhr.send();
console.log(xhr.readyState);
xhr.onreadystatechange = function () {
    console.log(xhr.readyState);
}
xhr.onload = function () {
    console.log("inside success");
    if (xhr.status == 200) {
        var presidents = JSON.parse(xhr.responseText);
        var presidentEl;
        presidents.forEach(function (president) {
            presidentEl = `
                        <div class="card" style="width: 20rem;"> <img class="card-img-top" src=${president.url} alt=${getFullName(president)}>
                            <div class="card-block">
                                <h4 class="card-title">${getFullName(president)}</h4>
                                <p class="card-text">${president.served}</p>
                            </div>
                        </div>`;
            
            document.getElementById('presidents').innerHTML = document.getElementById('presidents').innerHTML + presidentEl;
        });
    }
    $('#presidents').slick({
         infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3
    });
}

function getFullName(president) {
    return president.firstName + " " + president.middleName + " " + president.lastName;
}
xhr.onerror = function () {
    console.log("inside error");
    console.log(xhr.responseText);
}