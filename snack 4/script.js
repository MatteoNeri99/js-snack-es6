const squadre=[
    { nome: "Juventus", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Milan", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Inter", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Roma", puntiFatti: 0, falliSubiti: 0 },
    { nome: "Napoli", puntiFatti: 0, falliSubiti: 0 }
];


const squadreDue=[];

function numeroRandom (min, max){

    return Math.floor(Math.random() * ((max + 1 ) - min)+ min);
    
};


for(let index=0;  index<squadre.length; index++){
    squadre[index].puntiFatti=numeroRandom(1,100);

    squadre[index].falliSubiti=numeroRandom(1,100);

    const {nome,falliSubiti}=squadre[index];
    console.log(nome,falliSubiti)

    squadreDue.push({nome,falliSubiti})

};

console.log(squadreDue);