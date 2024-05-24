// const invitati=[ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni',  'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello'];


// const invitatiAndOrdine=[];

// invitati.map((element) => {

//     return element + {}

    

// });


for (let index=0; index<invitati.length; index++){

    invitatiAndOrdine.push({"guestName" : invitati[index] , "tabeleName" : "Tavolo Vip" , "place" : index } )
    

}

// console.log(invitatiAndOrdine);


const studenti=[


    {

        id:213,

        name:"Giuseppina della Rovere",

        grades:78

    },

    {

        id:110,

        name:"Paola Cortellessa ",

        grades:96

    },

    {

        id:250,

        name:" Andrea Mantegna ",

        grades:48

    },

    {

        id:145,

        name:"Gaia Borromini",

        grades:74

    },
    {

        id:196,

        name:"Luigi Grimaldello",

        grades:68

    },
    {

        id:102,

        name:"Piero della Francesca ",

        grades:50

    },
    {

        id:120,

        name:"Francesca da Polenta",

        grades:84

    },

]

for(let index=0; index<studenti.length; index++){

    

    studenti[index].name=studenti[index].name.toUpperCase()
}



const studentiVoti=studenti.filter((element) => element.grades > 70);

console.log(studentiVoti)


const studentiVotiId=studenti.filter((element) => element.grades > 70 && element.id > 120);

console.log(studentiVotiId)