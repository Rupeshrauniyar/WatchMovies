var item = document.querySelector(".item");

fetch('https://my-json-server.typicode.com/rupeshrauniyar/film/film')
    .then(res => res.json())
    .then(data => {
        var clutter = "";
        data.forEach(function(data, index) {
            clutter += `<a href="watch.html"><div class="container" id="${index}">
                            <div class="img-container">
                                <img src="${data.img}" alt="">
                            </div>
                            <div class="title">
                                <h4>${data.title}</h4>
                                <span>${data.year}</span>
                            </div></a>
                        </div>`;
                
        });
        item.innerHTML = clutter;
        
        // Add click event listener to each container
    var containers = document.querySelectorAll('.container');
    containers.forEach(container => {
    container.addEventListener('click', function(dets) {
    var iframeSrc = data[dets.currentTarget.id].url;
    window.location.href = 'watch.html?iframeSrc=' + encodeURIComponent(iframeSrc);
   
});

});
});      
