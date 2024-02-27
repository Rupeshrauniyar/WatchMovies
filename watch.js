var item = document.querySelector(".item");
var clutter =""
fetch('https://my-json-server.typicode.com/rupeshrauniyar/film/film')

.then(res => {
        return res.json();
    })
    .then(data => {   
        var clutter = "";
        data.forEach(function(movie, index) {
            clutter += `
                <a href="watch.html?id=${index}">
                    <div class="container" id="${index}">
                        <div class="img-container">
                            <img src="${movie.img}" alt="">
                        </div>
                        <div class="title">
                            <h4>${movie.title}</h4>
                            <span>${movie.year}</span>
                        </div>
                    </div>
                </a>`;
        });
        item.innerHTML = clutter;
    });
console.log(clutter)