
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

let card= document.querySelector(".card")

for(let i = 0; i < team.length; i++){

    // Facciamo tornare tutti gli elementi dell'array
    let teamIesimo= team[i];
    
    let nomeMembro = teamIesimo.nome;
    let ruoloMembro= teamIesimo.ruolo;
    let fotoMembro= teamIesimo.foto;

    let elCard =` <div class="card">
                        <div class="card-image">
                            <img/ src="${fotoMembro}" alt="">
                        </div>
                        <div class="info">
                            <h5>${nomeMembro}</h5>
                            <span>${ruoloMembro}</span>
                        </div>
                    </div>`
    
    card.innerHTML += elCard
    

    // Facciamo tornare i valori dentro gli elementi
    for(let keyTeam in teamIesimo){
        console.log(teamIesimo[keyTeam]);
        
    }
}
