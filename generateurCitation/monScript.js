
let tabCitation = [
'“Connaître son ignorance est la meilleure part de la connaissance.”',
'“Un ami c’est une route, un ennemi c’est un mur.”',
'“Point n’est besoin d’élever la voix quand on a raison.”',
'“Une méthode fixe n’est pas une méthode.”',
'“Quand on suit quelqu’un de bon, on apprend à devenir bon ; quand on suit un tigre, on apprend à mordre.”',
'“Trop de colle ne colle plus, trop de sucre n’adoucit plus.”',
'“Mieux vaut les critiques d’un seul que l’assentiment de mille.”',
'“La porte la mieux fermée est celle qu’on peut laisser ouverte.”',
'“Nous aurons le destin que nous aurons mérité.”',
'“L’imagination est plus importante que le savoir.”',
'“Rare est le nombre de ceux qui regardent avec leurs propres yeux et qui éprouvent avec leur propre sensibilité.”',
'“Un homme qui lit trop et qui fait trop peu d’efforts cérébraux prend vite des habitudes de paresse d’esprit.”',
'“La vie, c’est comme une bicyclette, il faut avancer pour ne pas perdre l’équilibre.”',
'“Placez votre main sur un poêle une minute et ça vous semble durer une heure. Asseyez vous auprès d’une jolie fille une heure et ça vous semble durer une minute.C’est ça la relativité.”',
'“Soit A un succès dans la vie. Alors A = x + y + z, où x = travailler, y = s’amuser, z = se taire.”',
'“Les machines un jour pourront résoudre tous les problèmes, mais jamais aucune d’entre elles ne pourra en poser un !”',
'“La connaissance s’acquiert par l’expérience, tout le reste n’est que de l’information.”',
];

let nbrAleatoire = 0;
let monText = document.querySelector(".text");

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let affichage = () => {
    nbrAleatoire = getRandomInt(tabCitation.length);
    monText.innerHTML = tabCitation[nbrAleatoire];
}

