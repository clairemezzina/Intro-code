$( document ).ready(function() {

function welcome() {
   $("#welcome").html('<h4>Bienvenue, <br> soyez pret à renouveler de nouveaux défis !</h4>');
};

  
function getUsername() {
    //affiche une boite de dialogue 
    var  user = prompt("Quel est ton prénom?", "");
    // la fonction se termine en retournant le nom récupéré par la boite de dialogue
    return user
};

function welcome() {
    var name= getUsername();
    $("#welcome").html('<h4>Bienvenue '+name+', <br> sois prêt(e) à renouveler de nouveaux défis ! </h4>');

};

function loadChallenges() {
  $.ajax(
        {url : 'https://api.myjson.com/bins/14evor',
        type: 'GET',
        dataType: 'json'} 
  )
  .done(function(data) {
    showChallenge(data);
  })
  .fail(function() {
    alert( "error" );
  });
}

function showChallenge(liste) {

  var data="";

  for ( var i=0; i < liste.length; i++) {
    data+='<div class="defi">';

    var challenge=liste[i];

    data+='<h2>'+challenge.nom+'</h2>';
    data+='<p>'+challenge.description+'</p>';
    data+='<iframe width="364" height="204" src="'+challenge.youtube+'" frameborder="0" allowfullscreen=""></iframe>'
    data+="</div>";
  }
  $("#defis").html(data);

}

welcome();

loadChallenges();

});