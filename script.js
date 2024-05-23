const invitati=[ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni',  'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello'];


const invitatiAndOrdine=[];

invitati.map((element) => {

    return element + {}

    

});


for (let index=0; index<invitati.length; index++){

    invitatiAndOrdine.push({"guestName" : invitati[index] , "tabelename" : "Tavolo Vip" , "place" : index } )
    
    
    console.log(invitatiAndOrdine[index].guestName);
}

// console.log(invitatiAndOrdine);




