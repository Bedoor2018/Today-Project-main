fetch('https://newsapi.org/v2/everything?q=Apple&from=2021-12-19&sortBy=popularity&apiKey=22258211780d49d4ba1b1b80c8eda67e')
.then(res=>res.json())
.then(data=> {
    console.log(data)
    const html=data.articles.map(
        article=>{

            return' <div class="card col-4" style="width: 18rem;"><img src="'+article.urlToImage+'" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">'+article.title+'</h5><p class="card-text">'+article.content+'</p><a href="'+article.url+'" class="btn btn-primary">read more</a></div></div>'
        }
    ).join('');
    document.querySelector('#app').innerHTML=html;
})
.catch(error=>console.log('error'))

