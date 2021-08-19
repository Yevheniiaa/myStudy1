
"use strict";

/*
 let numberOfFilms;

function start() {
    numberOfFilms = +prompt("How many movies have you already seen?", "0");

    while (numberOfFilms == null || numberOfFilms == "" || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("How many movies have you already seen?", "0");
    }
}

start();



 const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};


function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt("What's the last movie you watched?", "");  
        const b = prompt("How do you score this movie?", "");
        
        
        if (a == null || b == null || a.length > 50 || a == "" || b == "") {
            i--;
            console.log("error");
        } else {
            personalMovieDB.movies[a] = b;   
            console.log("done");
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (numberOfFilms < 10) {
            console.log("You have seen quite a few movies!");
        } else if (numberOfFilms <= 30 && numberOfFilms >= 10) {
            console.log("You are a classical viewer!"); 
        } else if (numberOfFilms > 30) {
            console.log("You a real movie fan");
        } else {
            console.log("Error");
    }
}

detectPersonalLevel();

function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}

showMyDB();

/*
function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);
*/

/*
function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        let question = prompt(`Your favourite genre is under number ${i}`, "");
       
        if ( question != null && question != "" ) {
            personalMovieDB.genres.push(question);     
        //personalMovieDB.genres[i - 1] = question;
        } else {
            i--;
        }
    } 
}

writeYourGenres();

*/



/*let i = 0;
while (i < 2) {
    i++;
    const a = prompt("What's the last movie you watched?", "");  
    const b = prompt("How do you score this movie?", "");
        
    if (a == null || b == null || a.length > 50 || a == "" || b == "") {
        i--;
        console.log("error");
    } else {
        personalMovieDB.movies[a] = b;   
        console.log("done");
    }
}
console.log(personalMovieDB);
   
let i = 0;
do {
    i++;
    const a = prompt("What's the last movie you watched?", "");  
    const b = prompt("How do you score this movie?", "");
    
    if (a == null || b == null || a.length > 50 || a == "" || b == "") {
        i--;
        console.log("error");
    } else {
        personalMovieDB.movies[a] = b;   
        console.log("done");
    }
    
} while (i < 2);
console.log(personalMovieDB);
*/

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        this.count = +prompt("How many movies have you already seen?", "0");

        while (this.count == null || this.count == "" || isNaN(this.count)) {
            this.count = +prompt("How many movies have you already seen?", "0");
        }
    },
    rememberMyFilms: function() {
    	for (let i = 0; i < 2; i++) {
        const a = prompt("What's the last movie you watched?", "");  
        const b = prompt("How do you score this movie?", "");
        
          if (a == null || b == null || a.length > 50 || a == "" || b == "") {
            i--;
            console.log("error");
        } else {
            this.movies[a] = b;   
            console.log("done");
        }
    	}
   },
     detectPersonalLevel: function() {
     	if (this.count < 10) {
            console.log("You have seen quite a few movies!");
        } else if (this.count <= 30 && this.count >= 10) {
            console.log("You are a classical viewer!"); 
        } else if (this.count > 30) {
            console.log("You a real movie fan");
        } else {
            console.log("Error");
      }
   },
    showMyDB: function(hidden) {
    		 if (!hidden) {
        console.log(personalMovieDB);
      }
    },
    toggleVisibleMyDB: function() {
	 		/*if (personalMovieDB.privat) {
	 			personalMovieDB.privat = false;
	 		} else {
	 			personalMovieDB.privat = true;
	 		} */
	 		 this.privat = !this.privat;
	 },
    writeYourGenres: function() {
    	for (let i = 1; i <= 3; i++) {
        let question = prompt(`Your favourite genre is under number ${i}`, "");
       
        if ( question != null && question != "" ) {
            this.genres.push(question);     
        //personalMovieDB.genres[i - 1] = question;
        } else {
            i--;
            console.log("Write it again");
        }
			
      }


      personalMovieDB.genres.forEach((item, i) => {
				console.log(`Favourite genre #${i + 1} is ${item} `);
			});

    },


};
personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.showMyDB(personalMovieDB.privat);
personalMovieDB.writeYourGenres();