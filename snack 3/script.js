const biciDaCorsa = [
    {
        nome: "Pinarello Dogma F12",
        peso: 5
    },
    {
        nome: "Specialized S-Works Tarmac",
        peso: 4
    },
    {
        nome: "Cannondale SuperSix EVO",
        peso: 10
    },
    {
        nome: "Trek Emonda SLR",
        peso: 7
    },
    {
        nome: "Giant TCR Advanced SL",
        peso: 5 
    }
];




let biclettaLeggera=biciDaCorsa.reduce((minore,biciDaCorsa)=> biciDaCorsa.peso< minore.peso ? biciDaCorsa : minore);

const {nome,peso}= biclettaLeggera

console.log(`la bici da corsa pi leggere è : ${nome} ed pesa ${peso}`)








