
//Travailler avec le DOM :
//Selecteur javascript
var obj = document.getElementById("id");
var obj = document.getElementsByClassName('rouge');

//Selecteur jquery
$(this).parents("ul").find(".faq_content").css('display', 'none').end().find("a").removeClass("open");
$(this).addClass("open").parent().next(".faq_content").css('display', 'block');


//Listener :
$('#element>ul>li').click(function() {
    alert($(this).val());
})
//Sur le code entier de la page :
$(document).on('click', function(){
  alert( $( this ).text() );
});

//Formulaires :
$("#bouton").on('click', function(){
    var client = {};
    client.nom = $("#nom").val();
    client.prenom = $("#prenom").val();
    client.email = $("#email").val();
    $.post('/client', client).done(function (){
        alert('OK');
    })
});


//Générer du code HTML :
tag = '<object type="application/x-shockwave-flash" data="' + pathTitreFlash
            + 'titre.swf?titre2=' + texte + '&amp;colorTXT=' + couleurTexte
            + '&amp;colorBG=' + couleurfondtexte
            + '" width="450" height="50"><param name="movie" value="' + pathTitreFlash
            + 'titre.swf?titre2=' + texte + '&amp;colorTXT=' + couleurTexte
            + '&amp;colorBG=' + couleurfondtexte
            + '" /><param name="wmode" value="transparent" /></object>';
titre.html(tag);

//Avec moteur de templating (ex: mustache, handlebar, undescore ...)
//Simple
var html = Mustache.render("<div>Hello {{name}}</div>", {name:'alex'});
//Html dans le dom + jquery :
$.Mustache.addFromDom('templateEnfants');
var modele = {enfants:enfants};
$('#htmlAjoutEnfant').mustache('templateEnfants', modele, {
    method : 'before'
});


//Visibilité, Isoler le code
var variableGlobale = ...
(function() {
    var variablePrivee = 'Ma variable privée';

    variableGlobale2 = {
      name : 'object visible en dehors de la closure'
    };

})

var uneClasse = funtion(){
    this.variablePublic = ...

    var variablePrive =

    this.functionPublique = function(){
        fonctionPrive();
    };

    function fonctionPrive() {

    }
}
uneClasse.fonctionPublique();

//Injection de dépendances : requirejs