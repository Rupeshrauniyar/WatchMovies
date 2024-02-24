var clutter = ""


fetch('https://my-json-server.typicode.com/rupeshrauniyar/film/film')

.then(res => {
return res.json();
})
.then(data => {   
data.forEach(data => {



clutter +=`<div class="container">
<a href="${data.href}"><div class="img-container">
 <img src="${data.img}" alt="Film Image">
</div>
<div class="title">
<h4>${data.title}</h4>
<span>${data.year}</span>
</div></a>
</div>`




})

document.querySelector(".item").innerHTML = clutter

});




