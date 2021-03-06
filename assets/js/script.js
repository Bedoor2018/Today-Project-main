//var
url1 =
  "https://newsapi.org/v2/everything?q=all&from=2021-12-15&to=2021-12-19&sortBy=popularity&page=1&pageSize=5&apiKey=2d850823b2fb4e028fb093a6502cec85";
url2 =
  "https://api.weatherbit.io/v2.0/current?city=Riyadh&key=23613dd34b1f4334a0280e3d2831a380";
url4 =
  "https://newsapi.org/v2/everything?q=all&from=2021-12-23&to=2021-12-25&sortBy=popularity&page=1&pageSize=3&apiKey=2d850823b2fb4e028fb093a6502cec85";


//selector
const searchbut = document.querySelector("#searchCity");
const TechnologyCat = document.querySelector("#Technology");
const HealthCat = document.querySelector("#Health");
const AllCat = document.querySelector("#all");
const BusinessCat = document.querySelector("#Business");
const SportCat = document.querySelector("#Sport");
const one=document.querySelector('#one');
const tow=document.querySelector('#tow');
const three=document.querySelector('#three');
//call functions
getNews(url1);
getWeather(url2);
getLastNews(url4);
//functions
//------------------------------------------
//1-function of get News information
function getNews(link) {
  var x=0;
  var z="";
  fetch(link)
    .then(res => res.json())
    .then(data => {
      console;
data.articles.map(article => {
            z +='<div class="row"><div class="col-sm-4 grid-margin"><div class="position-relative"><div class="rotate-img"><img src="'+article.urlToImage+'" class="img-fluid"/></div><div class="badge-positioned"><span class="badge badge-danger font-weight-bold">Flash news</span></div></div></div><div class="col-sm-8  grid-margin"><h2 class="mb-2 font-weight-600">'+ article.title+'</h2><p class="mb-0">'+article.content +' </p><div class="fs-13 mb-2"><a class="mr-2" href="'+article.url+'">read more </a></div></div></div>';
        })
        .join("");
      document.querySelector("#app").innerHTML = z;
    })
    .catch(error => console.log("error"));
};

//2-function of get weather information
function getWeather(link) {
  fetch(link)
    .then(res => res.json())
    .then(data => {
      const html = data.data
        .map(WeatherData => {
          document.querySelector("#city_name").innerHTML =
            WeatherData.city_name;
          document.querySelector("#ob_time").innerHTML = WeatherData.ob_time;
          document.querySelector("#temp").innerHTML = WeatherData.temp + " ??C";
        })
        .join("");
    })
    .catch(error => console.log("error"));
};



//3-function of get laast News information
function getLastNews(link) {
  var z=" <h2>Latest news</h2>";
  var x=0;
  fetch(link)
    .then(res => res.json())
    .then(data => {
data.articles.map(article => {

            z += '<div class="d-flex border-bottom-blue pt-3 pb-4 align-items-center justify-content-between"><div class="pr-3"><h5>'+article.title+'</h5><div class="fs-12"><span class="mr-2">Photo </span>10 Minutes ago</div></div><div class="rotate-img"><img src="'+article.urlToImage+'"alt="thumb" class="img-fluid img-lg"/></div></div>';
        
        })
        .join("");
      document.querySelector("#lastNews").innerHTML = z;
    })
    .catch(error => console.log("error"));
};

//event listener
searchbut.addEventListener("click", function() {
  const searchInput=document.querySelector('#searchCityInput');
  url3 =
    "https://api.weatherbit.io/v2.0/current?city=" +
    searchInput.value +
    "&key=23613dd34b1f4334a0280e3d2831a380";
  getWeather(url3);
});

TechnologyCat.addEventListener("click", function() {
    const disabledButtons=document.querySelectorAll('.disabled');
    const activeButtons=document.querySelectorAll('.active');
    activeButtons.forEach(element => {
        element.classList.remove('active')
    });
    TechnologyCat.classList.add('active');
  url3 =
    "https://newsapi.org/v2/everything?q=Technology&from=2021-12-15&to=2021-12-19&sortBy=popularity&page="+ disabledButtons.value+"&pageSize=5&apiKey=2d850823b2fb4e028fb093a6502cec85";
  getNews(url3);
});

HealthCat.addEventListener("click", function() {
    const activeButtons=document.querySelectorAll('.active');
    const disabledButtons=document.querySelectorAll('.disabled');
    activeButtons.forEach(element => {
        element.classList.remove('active')
    });
    HealthCat.classList.add('active');
  url3 =
    "https://newsapi.org/v2/everything?q=Health&from=2021-12-15&to=2021-12-19&sortBy=popularity&page="+ disabledButtons.value+"&pageSize=5&apiKey=2d850823b2fb4e028fb093a6502cec85";
  getNews(url3);
});

AllCat.addEventListener("click", function() {
    const activeButtons=document.querySelectorAll('.active');
    const disabledButtons=document.querySelectorAll('.disabled');
    activeButtons.forEach(element => {
        element.classList.remove('active')
    });
    AllCat.classList.add('active');
  url3 =
    "https://newsapi.org/v2/everything?q=all&from=2021-12-15&to=2021-12-19&sortBy=popularity&page="+ disabledButtons.value+"&pageSize=5&apiKey=2d850823b2fb4e028fb093a6502cec85";
  getNews(url3);
});
BusinessCat.addEventListener("click", function() {
    const activeButtons=document.querySelectorAll('.active');
    const disabledButtons=document.querySelectorAll('.disabled');
    activeButtons.forEach(element => {
        element.classList.remove('active')
    });
    BusinessCat.classList.add('active');
    url3 =
      "https://newsapi.org/v2/everything?q=Business&from=2021-12-15&to=2021-12-19&sortBy=popularity&page="+ disabledButtons.value+"&pageSize=5&apiKey=2d850823b2fb4e028fb093a6502cec85";
    getNews(url3);
  });


  SportCat.addEventListener("click", function() {
    const activeButtons=document.querySelectorAll('.active');
    const disabledButtons=document.querySelectorAll('.disabled');
    activeButtons.forEach(element => {
        element.classList.remove('active')
    });
    SportCat.classList.add('active');
    url3 =
      "https://newsapi.org/v2/everything?q=Sport&from=2021-12-15&to=2021-12-19&sortBy=popularity&page="+ disabledButtons.value+"&pageSize=5&apiKey=2d850823b2fb4e028fb093a6502cec85";
    getNews(url3);
  });


  one.addEventListener("click", function() {
    const disabledButtons=document.querySelectorAll('.disabled');
    disabledButtons.forEach(element => {
        element.classList.remove('disabled')
    });
    one.classList.add('disabled');
    url3 =
      "https://newsapi.org/v2/everything?q=all&from=2021-12-15&to=2021-12-19&sortBy=popularity&page=1&pageSize=5&apiKey=2d850823b2fb4e028fb093a6502cec85";
    getNews(url3);
  });

  tow.addEventListener("click", function() {
    console.log("hi in addEventListener on tow")
    const disabledButtons=document.querySelectorAll('.disabled');
    disabledButtons.forEach(element => {
        element.classList.remove('disabled')
    });
    tow.classList.add('disabled');
    url3 =
      "https://newsapi.org/v2/everything?q=all&from=2021-12-15&to=2021-12-19&sortBy=popularity&page=2&pageSize=5&apiKey=2d850823b2fb4e028fb093a6502cec85";
    getNews(url3);
  });

  three.addEventListener("click", function() {
    const disabledButtons=document.querySelectorAll('.disabled');
    disabledButtons.forEach(element => {
        element.classList.remove('disabled')
    });
    three.classList.add('disabled');
    url3 =
      "https://newsapi.org/v2/everything?q=all&from=2021-12-15&to=2021-12-19&sortBy=popularity&page=3&pageSize=5&apiKey=2d850823b2fb4e028fb093a6502cec85";
    getNews(url3);
  });


