
// Creiamo un array con degli objects al suo interno
const team=[
    {
        'nome':'Wayne Barnett',
        'ruolo':'Founder & CEO',
        'foto':'img/wayne-barnett-founder-ceo.jpg'
    },

    {
        'nome':'Angela Caroll',
        'ruolo':'Chief Editor',
        'foto':'img/angela-caroll-chief-editor.jpg'
    },

    {
        'nome':'Walter Gordon',
        'ruolo':'Office Manager',
        'foto':'img/walter-gordon-office-manager.jpg'
    },

    {
        'nome':'Angela Lopez',
        'ruolo':'Social Media Manager',
        'foto':'img/angela-lopez-social-media-manager.jpg'
    },

    {
        'nome':'Scott Estrada',
        'ruolo':'Developer',
        'foto':'img/scott-estrada-developer.jpg'
    },

    {
        'nome':'Barbara Ramos',
        'ruolo':'Graphic Designer',
        'foto':'img/barbara-ramos-graphic-designer.jpg'
    },
    
];

console.log(team);

let cardImage= document.querySelector(".card-image");
const info= document.querySelector(".info");

for(let i = 0; i < team.length; i++){

    // Facciamo tornare tutti gli elementi dell'array
    let teamIesimo= team[i];
    const item =`<img src="${teamIesimo["foto"]}" alt="image">`;
    cardImage.innerHTML+= item;

    const infoCard=`<h5>${teamIesimo["nome"]}</h5> <span>${teamIesimo["ruolo"]}</span>`;
    info.innerHTML+= infoCard;
    

    // Facciamo tornare i valori dentro gli elementi
    for(let keyTeam in teamIesimo){
        console.log(teamIesimo[keyTeam]);
        
    }
}
