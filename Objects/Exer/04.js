function solve(arr=[]) {

    let movies=[];

    while (arr.length>0) {
        let data=arr.shift();
        let movieData=data.split(' ');

        if(movieData.includes('addMovie')){
            movieData.shift();
            let name=movieData.join(' ');
            let obj={
                name:name,
            }
            movies.push(obj);
        }else if(movieData.includes('directedBy')){
           let index=movieData.indexOf('directedBy');
           let name=movieData.slice(0,index).join(' ');
           let director=movieData.slice(index+1,movieData.length).join(' ');
           
           for (const movie of movies) {
                  if(movie.name===name){
                      movie.director=director;
                  }
           }
           
        }else if(movieData.includes('onDate')){
            let index=movieData.indexOf('onDate');
           let name=movieData.slice(0,index).join(' ');
           let date=movieData.slice(index+1,movieData.length).join('');
           
           for (const movie of movies) {
                  if(movie.name===name){
                      movie.date=date;
                  }
           }
        }
    }
    
    let result=JSON.stringify(movies);
    console.log(result);
    
    
    
}

solve([

    'addMovie Fast and Furious',

    'addMovie Godfather',

    'Inception directedBy Christopher Nolan',

    'Godfather directedBy Francis Ford Coppola',

    'Godfather onDate 29.07.2018',

    'Fast and Furious onDate 30.07.2018',

    'Batman onDate 01.08.2018',

    'Fast and Furious directedBy Rob Cohen'

    ]);