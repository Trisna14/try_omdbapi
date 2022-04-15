let xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {

    if (xhr.readyState == 4 && xhr.status == 200) {
        let omdb = JSON.parse((this.responseText));
        let new_omdb = Object.entries(omdb);
        // console.log(omdb);
        // console.log(new_omdb[0][1]);

        const movie = document.getElementsByClassName('movie')[0];

        // for (let i = 0; i < 5;i++) {
            
        //     const div = document.createElement('div');
        //     console.log(div);
        //     movie.appendChild(div);
            
        // }

        new_omdb[0][1].forEach ((e) => {
            console.log(e.Title);
            console.log(e);

            const div = document.createElement('div');
            div.classList.add('movie_box');
            movie.appendChild(div);
            div.innerHTML = "<div class='thumb'><img src='"+e.Poster+"' alt=''></div><div class='text-data'><h4 class='title'>"+e.Title+"</h4><ul><li>"+e.Year+"</li><li>"+e.Type+"</li></ul></div>";

        });
        
    }
}

xhr.open('GET', 'https://www.omdbapi.com?apikey=a97702a5&s=harry', true);
xhr.send();
