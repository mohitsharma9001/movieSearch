// slideshow img

slide();
var slideMovie = [
    "https://assets.thehansindia.com/h-upload/2021/12/09/1126712-kgf.webp",
"https://i.ytimg.com/vi/Q1NKMPhP8PY/maxresdefault.jpg",
"https://i.ytimg.com/vi/k-POG1-Cp1k/maxresdefault.jpg",
"https://i.ytimg.com/vi/tQ0mzXRk-oM/maxresdefault.jpg",
"https://images.thedirect.com/media/article_full/thor-4-natalie-portman-poster.jpg",


];

var start = 0;

function slide() {
  setInterval(slideShow, 2000);
}

function slideShow() {
  start = start % 5;
  

  document.querySelector("#slide>img").src = slideMovie[start];
  start++;
}






//API connect

    var API_KEY = "2d1bfc00";
    
    async function getData(){
      
        var movie = document.querySelector("#movie").value;
        let res = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&t=${movie}`);

        
        let data = await res.json();
        displayData(data)
         console.log(data);
    }
   
    //  box append into div



     function displayData(data){
//  event.preventDefault()
        // data.forEach(function(data) {
            // container.innerHTML = "";
            var box = document.createElement('div');
            box.setAttribute('class','box')
            var img= document.createElement('img')
            img.src = data.Poster

            var title = document.createElement('h2')
            title.innerText = data.Title

            var release = document.createElement('p');
            release.innerText = data.Released

            var rating =document.createElement('p');
            rating.innerText = data.imdbRating

            var actor = document.createElement('p');
            actor.innerText = data.Actors

            var writer = document.createElement('p');
            writer.innerText = data.Writer


            var rec = document.getElementById("rec");

                if(Number(data.imdbRating) > 8.5){
                    rec.innerText = "RECOMMENDED"
                }else{
                    rec.innerText = "";
                }


           box.append(img,title,release,rating,actor,writer,rec);
           document.querySelector('#container').append(box)
          
            
        // });

     }