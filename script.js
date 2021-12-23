//var
url1='https://newsapi.org/v2/everything?q=Apple&from=2021-12-19&sortBy=popularity&apiKey=22258211780d49d4ba1b1b80c8eda67e'
url2='https://api.weatherbit.io/v2.0/current?city=Riyadh&key=23613dd34b1f4334a0280e3d2831a380';
//selector
const searchbut=document.querySelector('#searchCity');


//call functions
getNews(url1);
getWeather(url2);

//functions
//------------------------------------------
//1-function of get News information
function  getNews(link){
fetch(link)
    .then(res=>res.json())
    .then(data=> {
       const html=data.articles.map(       
                article=>{
    
                    return' <div class="card col-4" style="width: 18rem;"><img src="'+article.urlToImage+'" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">'+article.title+'</h5><p class="card-text">'+article.content+'</p><a href="'+article.url+'" class="btn btn-primary">read more</a></div></div>'      
                }
        ).join('');
       document.querySelector('#app').innerHTML=html;

    })
    .catch(error=>console.log('error'));
};

//2-function of get weather information
    function  getWeather(link){
    fetch(link)
    .then(res=>res.json())
    .then(data=> {
      console.log(data)
        const html=data.data.map(
            WeatherData=>{
            document.querySelector('#city_name').innerHTML=WeatherData.city_name;
            document.querySelector('#ob_time').innerHTML=WeatherData.ob_time;
            document.querySelector('#temp').innerHTML=WeatherData.temp+" °C";

            }
        ).join('');
    })
    .catch(error=>console.log('error'))
    };


//event listener
 searchbut.addEventListener("click",function(){
 const searchInput= document.getElementById('searchCityInput');
 url3 = 'https://api.weatherbit.io/v2.0/current?city='+searchInput.value+'&key=23613dd34b1f4334a0280e3d2831a380';
 getWeather (url3);
 });