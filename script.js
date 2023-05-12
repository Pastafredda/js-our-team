// Creiamo un array con degli objects al suo interno
const team=[
    {
        'nome':'Wayne Barnett',
        'ruolo':'Founder & CEO',
        'foto':'wayne-barnett-founder-ceo.jpg'
    },

    {
        'nome':'Angela Caroll',
        'ruolo':'Chief Editor',
        'foto':'angela-caroll-chief-editor.jpg'
    },

    {
        'nome':'Walter Gordon',
        'ruolo':'Office Manager',
        'foto':'walter-gordon-office-manager.jpg'
    },

    {
        'nome':'Angela Lopez',
        'ruolo':'Social Media Manager',
        'foto':'angela-lopez-social-media-manager.jpg'
    },

    {
        'nome':'Scott Estrada',
        'ruolo':'Developer',
        'foto':'scott-estrada-developer.jpg'
    },

    {
        'nome':'Barbara Ramos',
        'ruolo':'Graphic Designer',
        'foto':'barbara-ramos-graphic-designer.jpg'
    },
    
];

console.log(team);

for(let i = 0; i < team.length; i++){

    // Facciamo tornare tutti gli elementi dell'array
    let teamIesimo= team[i];
    console.log(teamIesimo);

    // Facciamo tornare i valori dentro gli elementi
    for(let keyTeam in teamIesimo){
        console.log(teamIesimo[keyTeam]);
    }


}