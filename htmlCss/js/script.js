
function searchButton(){
    var search = document.getElementById("search").value;
if(search == ""){
    alert('Please type in a search keyword in the search box');
}else{
    alert('You searched for ' + '"'+ search + '"');
}
}

function lucky(){
    alert('Wrong button! Click on the search button');
}
