let laoka = ['Atody , potikena ,pomme fritte' ,'Paty(presto , illico) be rony' ,'Paty sy atody sauce' , 'Anana sy patsa' ,'Atody sy Patsa' , 'Atody sy ananambo' ,'Potikena sauce' ,'Pomme fritte' ,'geba' ,'Hena sy poivron' , 'Potikena sy poivron' , 'Voamaina sy potikena' ,'carotte sy hena' ,'Patsa' ,'Voanjo Endasina' ,'Ndana mividy lasopy' ,'Ataovo Petisy' , 'Trondro' , 'Anana de asio zumbo' ,'Voamaina sy hena' ,'Corgette sy potikena' ,'Legume sy potikena' , 'Atody sy Voatabia' ,'Kitoza sy traka' ,'Potikena sy Pomme de Terre']



let generate_met = document.querySelector('#generate_met')//on recupere le generate_met dans le html
let generate_btn = document.querySelector('#generate_btn')

generate_btn.addEventListener(('click') , tady_laoka)

//une foction pour generer
function tady_laoka(){

    let laoka_random = Math.floor(Math.random()* laoka.length)  
    generate_met.textContent = laoka[laoka_random]

}




