//objet questionnaire
const questionnaire = [
  {
    id: 1,
    question: "Qu'est-ce-que Git? ",
    reponse: [
      "un service d'hébergement open-source",
      "un outil qui permet de traquer tous les fichiers d’un projet",
      "un cheval de Troie qui permet de surveiller le travail des développeurs",
      "un système de contrôle de version open source",
    ],
  },
  {
    id: 2,
    question:
      "Quelle commande permet d'associer le dépôt distant au dépôt local? ",
    reponse: [
      "git checkout ",
      "git push ",
      "git remote add origin ",
      "git init ",
    ],
  },
  {
    id: 3,
    question: "Qu'est-ce qu'une branche sur Git? ",
    reponse: [
      "un pointeur léger et déplaçable vers un commit",
      "une copie du projet dans laquelle il est possible de travailler sans incidence sur le projet principal",
      "un autre dépôt distant créé par un collaborateur",
      "la ramification latérale d'un tronc d'arbre",
    ],
  },
  {
    id: 4,
    question: "Qu'est-ce que le forking ",
    reponse: [
      "c'est une fonctionnalité proposée par Git",
      "consiste à créer une copie d’un projet disponible en open-source",
      "c'est une requête envoyée au propriétaire du projet ",
      "il permet de travailler librement sur ce projet sans affecter l’original",
    ],
  },
];

//définition des variables et constantes
let iteration = -1;
let startBouton = document.getElementById("start-btn");
let apparitionQuestion = document.getElementById("question-container");
let question = document.getElementById("question");
let reponse1 = document.getElementById("btn1");
let reponse2 = document.getElementById("btn2");
let reponse3 = document.getElementById("btn3");
let reponse4 = document.getElementById("btn4");
let validBouton = document.getElementById("valid-btn");
let nextBouton = document.getElementById("next-btn");
//fonctions

//fonction qui lance le jeu quand on clique sur le bonton Commencer le quizz
function startQuizz() {
  startBouton.classList.add("hide"); 
  nextBouton.classList.add("hide");
  apparitionQuestion.classList.remove("hide");
  iteration++;

  affichageQuestion(iteration);
}

//fonction qui affiche la question de l'objet
function affichageQuestion(i) {
 
  if (i !== questionnaire.length ) {
  //affichage du bouton valider
  validBouton.classList.remove("hide");
  //affichage des questions
  question.innerHTML = questionnaire[i].question;
  //affichages des 4 boutons réponses
  reponse1.innerHTML = questionnaire[i].reponse[0];
  reponse2.innerHTML = questionnaire[i].reponse[1];
  reponse3.innerHTML = questionnaire[i].reponse[2];
  reponse4.innerHTML = questionnaire[i].reponse[3];
 }
else{ 
   question.innerHTML = "Merci d'avoir répondu au questionnaire"; 
   startBouton.classList.add("hide");
   reponse1.classList.add("hide");
   reponse2.classList.add("hide");
   reponse3.classList.add("hide");
   reponse4.classList.add("hide");
 }

};

//fonction qui affiche le bouton suivant et la réponse après validation

function affichageReponse() {
  validBouton.classList.add("hide");
  nextBouton.classList.remove("hide");
}

//fontion qui change la couleur du bouton lorsque l'on le sélectionne

//fonction qui reinitailise les couleurs des boutons

//évènements
startBouton.onclick = startQuizz;
validBouton.onclick = affichageReponse;
nextBouton.onclick = startQuizz;