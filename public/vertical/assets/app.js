/*
 *Lionnel nawej
 */

/*
data pour la connexion
*/
var reponseTraitementData = "";
var dataConnexion = "";
var dataBons = "";
var numBons = "";
var numBonsIncrement = "entree";
var typeValue = "";
var choixx = "0";
var totalimportation = 0;
var nbrepatrouille = 0;
var countson = 0;



$(document).ready(function() {
        // alert("d");
        /*  affichageActualites();
          affichageLeagues();
          affichageArticles();
          affichageCalendriers();*/
        //alert("dd");
        /* informationUsers();
         */
        console.clear();
    })
    //alert("d");




function connexionUsers() {
    var domain = "https://backend.wazaimport.wazait.com/App/data/connexion/";
    var datasId = ["password", "email"];
    traitementData(datasId);
    if (reponseTraitementData == "nickel") {
        var datas = {};
        datas.password = $("#password").val();
        datas.email = $("#email").val();
        querySend(datas, domain);
    }
}


/*
Enregistrement d'une importation
*/
function videChamp() {
    // alert('d');
    $("#type").val("");
    $("#client_id").append("<option></option>");
    $("#transporteur").append("<option></option>");
    $("#nif").val("");
    $("#position_tarifaire").val("");
    $("#cotation").val("");
    $("#fob").val("");
    $("#fret").val("");
    $("#num_bl_lta").val("");
    //  $("#moyen_expedition").val(dataimportations[i].nommoyen_expedition);
    $("#moyen_expedition").append("<option ></option>");
    //$("#transporteur").val(dataimportations[i].nomtransporteur);
    $("#date_arrivee").val("");
    //$("#port_destination").val(dataimportations[i].nomportdestination);
    $("#port_destination").append("<option ></option>");
    $("#numero_av").val("");
    // $("#fournisseur").val(dataimportations[i].nomfournisseur);
    $("#fournisseur").append("<option ></option>");
    $("#nombre_colis").val("");
    $("#nature_marchandise").val("");
    $("#poids_kg").val("");
    $("#lieu_livraison").val("");
    $("#date_livraison").val("");
    $("#statut").val("");
    $("#observation").val("");
    $("#user_id").val("");
}



function enregistrerSite() {
    var domain = "https://backend.chezyo.net/all/insertion/insertSites/";
    var datasId = ["nom", "adresse", "telephone", "heure_patrouille", "code"];
    traitementData(datasId);

    if (reponseTraitementData == "nickel") {
        var datas = {};
        datas.nom = $("#nom").val();
        datas.adresse = $("#adresse").val();
        datas.telephone = $("#telephone").val();
        datas.code = $("#code").val();
        datas.heure_patrouille = $("#heure_patrouille").val();
        querySend(datas, domain);
    }
}

function enregistrerPointSurveillance() {
    var domain = "https://backend.chezyo.net/all/insertion/insertPointag/";
    var datasId = ["nom", "site_id", "code"];
    traitementData(datasId);

    if (reponseTraitementData == "nickel") {
        var datas = {};
        datas.nom = $("#nom").val();
        datas.site_id = $("#site_id").val();
        datas.code = $("#code").val();
        querySend(datas, domain);
    }
}

function affichagePatrouilles() {
    //alert("d");
    var domain = "https://backend.chezyo.net/all/view/viewPatrouilles/";
    var datasId = ["date_enre", "site_id"];
    traitementData(datasId);

    if (reponseTraitementData == "nickel") {
        var datas = {};
        datas.date_enre = $("#date_enre").val();
        datas.site_id = $("#site_id").val();

        querySend(datas, domain);
    }
}

function affichagePatrouillesClient() {
    //alert("d");
    var domain = "https://backend.chezyo.net/all/view/viewAllsPatrouilles/";

    var datas = {};
    datas.test = "rien";
    querySend(datas, domain);
}

function rechercherPatrouilles(code_patrouille) {
    //alert("d");
    var domain = "https://backend.chezyo.net/all/view/searchPatrouilles/";
    var datasId = ["date_enre", "site_id"];
    traitementData(datasId);

    if (reponseTraitementData == "nickel") {
        var datas = {};
        datas.code_patrouille = code_patrouille;
        querySend(datas, domain);
    }
}

function affichageAllPatrouilles() {
    //alert("d");
    var domain = "https://backend.chezyo.net/all/view/viewAllPatrouilles/";

    var datas = {};
    datas.test = "rien";
    querySend(datas, domain);

}

function affichageAllsPatrouilles() {
    //alert("d");
    var domain = "https://backend.chezyo.net/all/view/viewAllsPatrouilles/";

    var datas = {};
    datas.test = "rien";
    querySend(datas, domain);

}

function enregistrerAgent() {
    var domain = "https://backend.chezyo.net/all/insertion/insertAgents/";
    var datasId = ["nom", "postnom", "prenom", "adresse", "fonction", "grade", "telephone", "site_id", "username", "password", "code"];
    traitementData(datasId);

    if (reponseTraitementData == "nickel") {
        var datas = {};
        datas.nom = $("#nom").val();
        datas.postnom = $("#postnom").val();
        datas.prenom = $("#prenom").val();
        datas.adresse = $("#adresse").val();
        datas.fonction = $("#fonction").val();
        datas.grade = $("#grade").val();
        datas.telephone = $("#telephone").val();
        datas.username = $("#username").val();
        datas.password = $("#password").val();
        datas.site_id = $("#site_id").val();
        datas.code = $("#code").val();
        // alert("d");
        querySend(datas, domain);
    }
}

function affichageSites() {
    //alert("e");
    var option = {};

    option.url = "https://backend.chezyo.net/all/view/viewSites/";
    option.type = "GET";
    option.success = function(reponse) {
        site = reponse.reponse.sites;
        var tailleM = site.length;
        $("#nombresite").text(tailleM);
        site.reverse();
        for (var i = 0; i < site.length; i++) {
            $("#site_id").append("<option value=" + site[i].site_id + ">" + site[i].nom + "</option>");
            $("#tableSites").append("<tr ><td>" + i + "</td><td>" + site[i].nom + " </td><td>" + site[i].adresse + " </td><td>" + site[i].telephone + "</td><td>" + site[i].code + "</td><td>" + site[i].heure_patrouille + "</td><td><span class=' fas fa-trash' style='cursor:pointer;'onclick='allDelete(" + site[i].site_id + ")'></span></td></tr>");

        }
    }

    $.ajax(option);

}

function affichagePointSurveillances() {
    //alert("e");
    var option = {};

    option.url = "https://backend.chezyo.net/all/view/viewPointag/";
    option.type = "GET";
    option.success = function(reponse) {
        pointags = reponse.reponse.pointag;
        var tailleM = pointags.length;
        $("#nombrepoint").text(tailleM);
        pointags.reverse();
        for (var i = 0; i < pointags.length; i++) {
            // $("#site_id").append("<option value="+site[i].site_id+">"+site[i].nom+"</option>") ;  
            $("#tablePointSurveillances").append("<tr ><td>" + i + "</td><td>" + pointags[i].tag_id + " </td><td>" + pointags[i].nom + " </td><td>" + pointags[i].code + "</td><td>" + pointags[i].site_id + "</td><td><span class=' fas fa-trash' style='cursor:pointer;'onclick='allDelete(" + pointags[i].pointag_id + ")'></span></td></tr>");

        }
    }

    $.ajax(option);

}

function affichageAgents() {
    //alert("e");
    var option = {};

    option.url = "https://backend.chezyo.net/all/view/viewAgents/";
    option.type = "GET";
    option.success = function(reponse) {
        agent = reponse.reponse.agents;
        var tailleM = agent.length;
        $("#nombreagent").text(tailleM);
        agent.reverse();
        for (var i = 0; i < agent.length; i++) {
            // $("#site_id").append("<option value="+site[i].site_id+">"+site[i].nom+"</option>") ;  
            $("#tableAgents").append("<tr ><td>" + i + "</td><td>" + agent[i].nom + " " + agent[i].postnom + " " + agent[i].prenom + "</td><td>" + agent[i].adresse + " </td><td>" + agent[i].code + "</td><td>" + agent[i].telephone + "</td><td>" + agent[i].fonction + "</td><td>" + agent[i].username + "</td><td>" + agent[i].site_id + "</td><td><span class=' fas fa-trash' style='cursor:pointer;'onclick='allDelete(" + agent[i].agent_id + ")'></span></td></tr>");

        }
    }

    $.ajax(option);

}
/*
function affichagePatrouilles(){
    //alert("e");
     var option={};
 
     option.url="https://backend.chezyo.net/all/view/viewPatrouilles/";
     option.type="GET";
     option.success=function(reponse)
     {      
      patrouilless=reponse.reponse.patrouilles;   
       var tailleM=patrouilless.length;
       $("#nombrepatrouilles").text(tailleM);
       agent.reverse();  
       for(var i=0; i<agent.length; i++)
       {
       //$(".tours").append("<option value="+site[i].site_id+">"+site[i].nom+"</option>") ;  
        //$("#tableAgents").append("<tr ><td>"+i+"</td><td>"+agent[i].nom+ " " +agent[i].postnom+" " +agent[i].prenom+"</td><td>"+agent[i].adresse+" </td><td>"+agent[i].code+"</td><td>"+agent[i].telephone+"</td><td>"+agent[i].fonction+"</td><td>"+agent[i].username+"</td><td>"+agent[i].site_id+"</td><td><span class=' fas fa-trash' style='cursor:pointer;'onclick='allDelete("+agent[i].agent_id+")'></span></td></tr>");
     
      }
     }
     
      $.ajax(option);    
   
}
*/


function affichageData(domain, datas) {
    var options = {};
    options.data = datas;
    options.url = domain;
    options.type = "GET";

    options.success = function(accuseReception) {
        //console.log(accuseReception);
        reponse = accuseReception.reponse.status;
        typeReponse = accuseReception.reponse.type;
        message = accuseReception.reponse.message;

        dataarticles = accuseReception.reponse.articles;
        dataactualites = accuseReception.reponse.actualites;
        datacalendriers = accuseReception.reponse.calendriers;
        dataleagues = accuseReception.reponse.leagues;
        //datasupporteurs=accuseReception.reponse.supporteurs;

    };
    options.error = function(reponse) {
        console.log(reponse);
    };
    $.ajax(options);
}
//totalimportation=2;
//alert(totalimportation);
function enregistrerImportation() {
    var type = $("#type").val();

    if (type > 0) {
        //var transpo= $("#transporteur").val();
        //  alert(transpo); return false
        var domain = "https://backend.wazaimport.wazait.com/App/data/modifierImportation/";
    } else {
        // alert("insert"); return false
        var domain = "https://backend.wazaimport.wazait.com/App/data/enregistrerImportation/";
    }
    var datasId = ["client_id", "nif", "position_tarifaire", "cotation", "fob", "fret", "num_bl_lta", "moyen_expedition", "transporteur", "date_arrivee",
        "port_destination", "numero_av", "fournisseur", "nombre_colis", "nature_marchandise", "poids_kg", "lieu_livraison", "date_livraison",
        "statut", "observation", "user_id"
    ];
    traitementData(datasId);
    if (reponseTraitementData == "nickel") {
        var datas = {};
        datas.importation_id = $("#type").val();
        datas.client_id = $("#client_id").val();
        datas.nif = $("#nif").val();
        datas.position_tarifaire = $("#position_tarifaire").val();
        datas.cotation = $("#cotation").val();
        datas.fob = $("#fob").val();
        datas.fret = $("#fret").val();
        datas.num_bl_lta = $("#num_bl_lta").val();
        datas.moyen_expedition = $("#moyen_expedition").val();
        datas.transporteur = $("#transporteur").val();
        datas.date_arrivee = $("#date_arrivee").val();
        datas.port_destination = $("#port_destination").val();
        datas.numero_av = $("#numero_av").val();
        datas.fournisseur = $("#fournisseur").val();
        datas.nombre_colis = $("#nombre_colis").val();
        datas.nature_marchandise = $("#nature_marchandise").val();
        datas.poids_kg = $("#poids_kg").val();
        datas.lieu_livraison = $("#lieu_livraison").val();
        datas.date_livraison = $("#date_livraison").val();
        datas.statut = $("#statut").val();
        datas.observation = $("#observation").val();
        datas.user_id = $("#user_id").val();
        querySend(datas, domain);
    }
}

function receptionImportation(dataimportations) {
    $("#table_importation_recherche").html("");
    //alert(choixx);
    for (var i = 0; i < dataimportations.length; i++) {
        if (choixx == "1") {
            //alert("oui");
            $("#table_importation").html("");
            //console.log(dataimportations);
            for (var i = 0; i < dataimportations.length; i++) {
                $("#table_importation").append("<tr><td>" + dataimportations[i].importation_id + "</td><td>" + dataimportations[i].nomclient + "</td><td>" +
                    dataimportations[i].nif + "</td><td>" + dataimportations[i].position_tarifaire + "</td><td>" + dataimportations[i].cotation + "</td><td>" +
                    dataimportations[i].fob + "</td><td>" + dataimportations[i].fret + "</td><td>" + dataimportations[i].num_bla_lta + "</td><td>" +
                    dataimportations[i].statut + "</td><td ><span style='cursor:pointer;'onclick='importationDetail(" + dataimportations[i].importation_id + ")' data-toggle='modal' data-target='.bd-example-modal-lg-detail' class='fa fa-eye'></span> &nbsp;<span class=' fa fa-edit' data-toggle='modal' data-toggle='modal' data-target='.bd-example-modal-lg' style='cursor:pointer;'onclick='importationUpdate(" + dataimportations[i].importation_id + ")'></span> &ensp;<span class=' fa fa-trash' style='cursor:pointer;'onclick='importationDelete(" + dataimportations[i].importation_id + ")'></span></td></tr>");

            }
        } else {

        }
        $("#rechercheFournisseur").html(dataimportations[i].nomfournisseur);
        $("#rechercheClient").html(dataimportations[i].nomclient);
        $("#rechercheTransporteur").html(dataimportations[i].nomtransporteur);
        $("#rechercheExpedition").html(dataimportations[i].nommoyen_expedition);
        $("#rechercheDestination").html(dataimportations[i].nomportdestination);
        $("#rechercheDatearrivee").html(dataimportations[i].date_arrivee);
        $("#rechercheNumeroav").html(dataimportations[i].numero_av);
        $("#rechercheNombrecolis").html(dataimportations[i].nombre_colis);
        $("#rechercheNaturemarchandise").html(dataimportations[i].nature_marchandise);
        $("#recherchePoidskg").html(dataimportations[i].poids_kg);
        $("#rechercheLieulivraison").html(dataimportations[i].lieu_livraison);
        $("#rechercheDatelivraison").html(dataimportations[i].date_livraison);
        $("#rechercheObservation").html(dataimportations[i].observation);
        $("#rechercheDateenregistrement").html(dataimportations[i].date_enregistrement);

        //valeur

        //  $("#client_id").val(dataimportations[i].client_id);
        $("#client_id").append("<option value=" + dataimportations[i].client_id + ">" + dataimportations[i].client + "</option>");
        $("#transporteur").append("<option value=" + dataimportations[i].transporteur_id + ">" + dataimportations[i].nomtransporteur + "</option>");
        $("#nif").val(dataimportations[i].nif);
        $("#position_tarifaire").val(dataimportations[i].num_bla_lta);
        $("#cotation").val(dataimportations[i].cotation);
        $("#fob").val(dataimportations[i].fob);
        $("#fret").val(dataimportations[i].fret);
        $("#num_bl_lta").val(dataimportations[i].num_bla_lta);
        //  $("#moyen_expedition").val(dataimportations[i].nommoyen_expedition);
        $("#moyen_expedition").append("<option value=" + dataimportations[i].moyen_expedition_id + ">" + dataimportations[i].moyen_expedition + "</option>");
        //$("#transporteur").val(dataimportations[i].nomtransporteur);
        $("#date_arrivee").val(dataimportations[i].date_arrivee);
        //$("#port_destination").val(dataimportations[i].nomportdestination);
        $("#port_destination").append("<option value=" + dataimportations[i].port_destination_id + ">" + dataimportations[i].port_destination + "</option>");
        $("#numero_av").val(dataimportations[i].numero_av);
        // $("#fournisseur").val(dataimportations[i].nomfournisseur);
        $("#fournisseur").append("<option value=" + dataimportations[i].fournisseur_id + ">" + dataimportations[i].fournisseur + "</option>");
        $("#nombre_colis").val(dataimportations[i].nombre_colis);
        $("#nature_marchandise").val(dataimportations[i].nature_marchandise);
        $("#poids_kg").val(dataimportations[i].poids_kg);
        $("#lieu_livraison").val(dataimportations[i].lieu_livraison);
        $("#date_livraison").val(dataimportations[i].date_livraison);
        $("#statut").val(dataimportations[i].statut);
        $("#observation").val(dataimportations[i].observation);
        $("#user_id").val(dataimportations[i].client_id);
        $("#type").val(dataimportations[i].importation_id);
    }
}

function poserClients(datas) {
    //console.log(datas);
    var divRow = $("#allclients");
    var element = $("#clientsDiv");
    divRow.html("");
    $("#totalClients").text(datas.length);
    for (var i = 0; i < datas.length; i++) {

        var el = element.clone();
        var client_id = datas[i].client_id;
        el.find(".nomclient").html(datas[i].nom + " " + datas[i].postnom);
        el.find(".images").html("<img src='img/dossier.png' alt='" + datas[i].nom + "' style='cursor:pointer ; width:90%' onclick='voirDetail(" + client_id + ")'>")
        divRow.append(el);

    }
    divRow.show();
}

function poserTotal(datas) {
    $("#totalEntree").text("$" + datas[0].totalEntree);
    $("#totalSortie").text("$" + datas[0].totalSortie);
    var totalcaisse = datas[0].totalEntree - datas[0].totalSortie;
    $("#totalCaisse").text("$" + totalcaisse);
}

function poserClientCloture(datas) {
    //console.log(datas);
    var divRow = $("#allclientsCloture");
    var element = $("#clientsDivCloture");
    divRow.html("");
    $("#totalClientsCloture").text(datas.length);
    for (var i = 0; i < datas.length; i++) {
        var el = element.clone();
        var client_id = datas[i].client_id;
        el.find(".nomclientCloture").html(datas[i].nom + " " + datas[i].postnom);
        el.find(".imagesCloture").html("<img src='img/dossier-archive.png' alt='" + datas[i].nom + "' style='cursor:pointer ; width:90%' onclick='actifClient(" + client_id + ")'>")
        divRow.append(el);

    }
    divRow.show();
}

function cloturerClient() {
    var domain = "https://backend.wazaimport.wazait.com/App/data/clientCloture/";
    if (confirm("Voulez vous cloturer ce dossier?") == true) {
        var datas = {};
        datas.client_id = localStorage.getItem('idRecherche');
        querySend(datas, domain);
        $("#imgDoc").hide();
        $("#cardFact").hide();
        $("#imgDocc").show();
    } else {
        swal("Merci dossier non cloturé", "error", "error");
    }

}

function actifClient(client_id) {
    var domain = "https://backend.wazaimport.wazait.com/App/data/clientActif/";

    if (confirm("Voulez vous reouvir ce dossier?") == true) {
        var datas = {};
        datas.client_id = client_id;
        querySend(datas, domain);
    } else {
        swal("Merci dossier non ouvert", "error", "error");
    }
}

function poserBillets(datas) {
    //console.log(datas);
    var divRow = $("#allbillets");
    var element = $("#billetsDiv");
    divRow.html("");
    $("#totalBillets").text(datas.length);
    for (var i = 0; i < datas.length; i++) {
        var el = element.clone();

        el.find(".nomclient").html(datas[i].email);
        divRow.append(el);

    }
    divRow.show();
}

function poserFacturation(datas) {
    $("#table_facturation").html("");
    $("#totalFacturations").text(datas.length);
    for (var i = 0; i < datas.length; i++) {
        $("#table_facturation").append("<tr><td>" + (i + 1) + "</td><td>" + datas[i].date_enregistrement + "</td><td>" +
            "Bon " + datas[i].type + " " + datas[i].numero + "</td><td>" + datas[i].beneficiaire + "</td><td>" +
            datas[i].designation + "</td><td>" + datas[i].quantite + "</td><td>" +
            datas[i].prix_unitaire + "</td><td>" + datas[i].prix_total + "</td><td><span class='btn btn-danger mdi mdi-close' onclick=supprimerFacturation(" + datas[i].facturation_id + ")></span></td></tr>");
    }

}

function poserFacturationClient(datas) {
    $("#table_facturation_client").html("");
    for (var i = 0; i < datas.length; i++) {
        $("#table_facturation_client").append("<tr><td>" + (i + 1) + "</td><td>" + datas[i].date_enregistrement + "</td><td>" +
            "Bon " + datas[i].type + " " + datas[i].numero + "</td><td>" + datas[i].beneficiaire + "</td><td>" +
            datas[i].designation + "</td><td>" + datas[i].quantite + "</td><td>" +
            datas[i].prix_unitaire + "</td><td>" + datas[i].prix_total + "</td><td><span class='btn btn-danger mdi mdi-close' onclick=supprimerFacturation(" + datas[i].facturation_id + ")></span></td></tr>");
    }

}

function importationDetail(importation_id) {
    // console.log(client_id);
    choixx = "0";
    //alert(choixx);
    var domain = "https://backend.wazaimport.wazait.com/App/data/rechercherImportation/";
    var datas = {};
    if (importation_id == 'rien') {
        datas.valeur = $("#valeur").val;
        datas.clef = $("#clef").val;
    } else {
        datas.valeur = importation_id;
        datas.clef = "importation_id";
    }
    querySend(datas, domain);
}

function importationUpdate(importation_id) {
    // console.log(client_id);
    choixx = "0";
    //alert(importation_id);
    var domain = "https://backend.wazaimport.wazait.com/App/data/rechercherImportation/";
    var datas = {};
    if (importation_id == 'rien') {
        datas.valeur = $("#valeur").val;
        datas.clef = $("#clef").val;
    } else {
        datas.valeur = importation_id;
        datas.clef = "importation_id";
    }
    querySend(datas, domain);
}

function importationDelete(importation_id) {
    if (confirm("Voulez vous supprimer cet enregistrement?") == true) {
        var datas = {};
        datas.importation_id = importation_id;
        var domain = "https://backend.wazaimport.wazait.com/App/data/supprimerImportation/";
        querySend(datas, domain);
    } else {
        swal("Merci enregistrement non supprimé", "error", "error");
    }
}

function parametreDelete(parametre, parametre_id) {
    if (parametre == "expedition") {
        parametre = "moyen_expedition";
    }
    if (confirm("Voulez vous supprimer cet enregistrement?") == true) {
        var datas = {};
        datas.parametre_id = parametre_id;
        datas.parametre = parametre;
        var domain = "https://backend.wazaimport.wazait.com/App/data/supprimerParametre/";
        querySend(datas, domain);
    } else {
        swal("Merci enregistrement non supprimé", "error", "error");
    }
}


/*
Developpeur:Lionnel nawej kayembe
Fonction qui gere toutes les fonctions de données, 
elle verifie les valeurs de toutes les données saisies dans le val des id
Methode standard pour le controle de toutes les valeurs de champs
*/



function traitementData(datas) {
    for (var i = 0; i < datas.length; i++) {
        if ($("#" + datas[i]).val() == "") {
            swal("Veuillez remplir le (la) " + datas[i], "Erreur remplissage", "error");
            return false;
        } else if ($("#" + datas[i]).val() == "undefined") {
            swal("Ce (cette) " + datas[i] + " a ete supprime", "Erreur fichier non existant", "error");
            return false;
        } else if (i == datas.length - 1) {
            reponseTraitementData = "nickel";
        } else {

        }
    }
}
/*
*Modele standard de transmission de data vers le front-end
*En utilisant du ajax
basequerysend*/
function changeColors() {}
var names = [];

function querySend(datas, domain) {
    var query = {};
    query.url = domain;
    query.data = datas;
    query.type = "POST";
    query.success = function(accuseReception) {
        //console.log(accuseReception);
        reponse = accuseReception.reponse.status;
        typeReponse = accuseReception.reponse.type;
        message = accuseReception.reponse.message;
        /*dataRecu        =accuseReception.reponse.data;
        dataRecu2       =accuseReception.reponse.datas;*/

        //var nbrepatrouille=0;


        if (reponse == "success") {
            if (typeReponse == "allpatrouilles") {

                pat = accuseReception.reponse.patrouilles;
                var tailleM = pat.length;
                // $("#nombrepoint").text(tailleM);
                //pat.reverse();  
                $("#v-pills-tab").html(" ");
                $("#nombretour").text(tailleM);
                $("#datepatrouille").text(datas.date_enre);
                for (var i = 0; i < pat.length; i++) {
                    $("#v-pills-tab").append("<br> <a onclick='rechercherPatrouilles(" + pat[i].code_patrouille + ")' class='nav-link waves-effect waves-light btn btn-outline-primary' id='v-pills-home-tab' data-toggle='pill' href='#v-pills-home' role='tab' aria-controls='v-pills-home' aria-selected='true'>Tour " + i + "</a>");
                    //console.clear(); return false;
                }
            }
            if (typeReponse == "recallpatrouilles") {
                patr = accuseReception.reponse.patrouille;

                // $("#nombrepoint").text(tailleM);
                //pat.reverse();  
                $("#tableTours").html(" ");
                /*$("#nombretour").text(tailleM);
                $("#datepatrouille").text(datas.date_enre);*/
                for (var i = 0; i < patr.length; i++) {
                    $("#tableTours").append("<tr ><td>" + i + "</td><td>" + patr[i].nom_agent + " " + patr[i].postnom_agent + " " + patr[i].prenom_agent + "</td><td>" + patr[i].nompointag + " </td><td>" + patr[i].code_patrouille + "</td><td>" + patr[i].nomsite + "</td><td>" + patr[i].heure_point + "</td></tr>");
                    //console.clear(); //return false;
                }


            } else if (typeReponse == "rectoutpatrouilles") {

                patrs = accuseReception.reponse.patrouille;
                var tailleM = patrs.length;

                nbrepatrouille = patrs.length;

            } else if (typeReponse == "rectouspatrouilles") {
                patrs = accuseReception.reponse.patrouille;
                tailleM = 0;
                var tailleM = patrs.length;

                patrs.reverse();

                $("#tablesPatrouilles").html(" ");
                /*$("#nombretour").text(tailleM);
                $("#datepatrouille").text(datas.date_enre);*/
                for (var i = 0; i < patrs.length; i++) {

                    $("#tablesPatrouilles").append("<tr id=test" + i + " ><td>" + i + "</td><td>" + patrs[i].nomsite + " </td><td>" + patrs[i].nompointag + "</td><td>" + patrs[i].heure_point + "</td></tr>");
                    //console.clear(); //return false;

                    $("#test0").css("background-color", "#a5040d");
                    $("#test0").css("color", "#ffffff");

                }
                // setTimeout(changeColors, 2000);
                setTimeout(affichageAllsPatrouilles, 2000);


                /*
                avant cetait ca
                                patrs = accuseReception.reponse.patrouille;
                                tailleM = 0;
                                var tailleM = patrs.length;
                */


                if (tailleM > nbrepatrouille) {
                    $("#test0").css("background-color", "#f8f9fa");
                    $("#test0").css("color", "#606265");

                    let audio = new Audio("son.mp3");
                    audio.play();
                    nbrepatrouille = tailleM;
                    // console.log(tailleM);
                    // console.log(JSON.stringify(patrs));
                    var index = tailleM - 1;
                    // alert(patrs[index].nompointag);

                    var nomsites = patrs[index].nomsite;

                    var nompointags = patrs[index].nompointag;
                    console.log(JSON.stringify(patrs[index])),
                        names.push(nompointags);

                    //$("#tablesPatrouilles").html(" ");
                    /*$("#nombretour").text(tailleM);
                    $("#datepatrouille").text(datas.date_enre);*/
                    //  $("#tablesPatrouilles").html(" ");
                    affichagePatrouillesClient();
                    /*
                    for (var i = 0; i < patrs.length; i++) {
                        $("#tablesPatrouilles").append("<tr style='background-color:red; color:white' ><td>" + i + "</td><td>" + patrs[index].nomsite + " </td><td>" + patrs[index].nompointag + "</td><td>" + patrs[index].heure_point + "</td></tr>");
                        
                    }
*/
                    $("#divMessage").show();
                    $("#textMessage").html("");
                    $("#textMessage").html(`Patrouille en cours \n site ${nomsites} au point de surveillance ${names}`);

                } else {

                    // console.log("ajoute" + tailleM + "pas ajoute" + nbrepatrouille);
                }
                // console.log(tailleM);

            } else {


                swal(message, reponse, 'success');
                $("#tableSites").append("<tr style='background-color:#283179; color:white' ><td>-</td><td>" + datas.nom + " </td><td>" + datas.adresse + " </td><td>" + datas.telephone + "</td><td>" + datas.code + "</td><td>" + datas.heure_patrouille + "</td><td><span class=' fas fa-trash' style='cursor:pointer;'onclick='allDelete()'></span></td></tr>");
                $("#tablePointSurveillances").append("<tr  style='background-color:#283179; color:white' ><td>-</td><td>- </td><td>" + datas.nom + " </td><td>" + datas.code + "</td><td>" + datas.site_id + "</td><td><span class=' fas fa-trash' style='cursor:pointer;'onclick='allDelete()'></span></td></tr>");
                $("#tableAgents").append("<tr style='background-color:#283179; color:white' ><td>-</td><td>" + datas.nom + " " + datas.postnom + " " + datas.prenom + "</td><td>" + datas.adresse + " </td><td>" + datas.code + "</td><td>" + datas.telephone + "</td><td>" + datas.fonction + "</td><td>" + datas.username + "</td><td>" + datas.site_id + "</td><td><span class=' fas fa-trash' style='cursor:pointer;'onclick='allDelete(" + datas.agent_id + ")'></span></td></tr>");
            }
            //console.clear();

        } else {
            swal(message, typeReponse, 'error');
            console.clear();
        }
    }
    query.error = function(erreur) {
        // console.log(erreur);
        // swal("Une erreur est survenue veuillez contacterl'administrateur pour en savoir plus", "Erreur Application code 001", "error");
    }
    $.ajax(query);
}

function choix() {
    //alert(choixx);
    choixx = "1";

    var select = document.getElementById("key"),

        index = select.selectedIndex;

    var key = select.options[index].value;

    var domain = "https://backend.wazaimport.wazait.com/App/data/rechercherImportation/";
    var datasId = ["valeur"];
    traitementData(datasId);
    var datas = {};
    datas.valeur = $("#valeur").val();
    datas.clef = key;
    querySend(datas, domain);

}

function affichageArticles() {

    var articleRow = $("#all_article");
    var element = $("#articleDiv");
    articleRow.html("");
    var article = [];


    var articleEndRow = $("#all_four_article");
    var elemente = $("#articleFourDiv");
    articleEndRow.html("");


    var option = {};

    option.url = "https://backend.dcmp.groupepaixservice.net/all/view/viewArticles/";
    option.type = "GET";
    option.success = function(reponse) {
        //console.log(reponse.reponse.articles);
        article = reponse.reponse.articles;
        articles = reponse.reponse.articles;
        var tailleM = article.length;

        var x = article.length - 1;

        var totalArticle = article.length;
        $("#totalArticle").text(totalArticle);

        $("#dernierLibelle").text(article[x].libelle);
        $("#dernierPrix").text(article[x].prix);


        $("#dernierImage").html("<img alt='img02' style='width:50%'  src=" + article[x].image + "  />");


        article.reverse();

        //+ articles.reverse(); 

        var fourEnds = articles.length - 2;
        fourEndss = articles.length - fourEnds;
        //alert(fourEnds);
        if (articles.length <= 1) {

            fourEndss = articles.length;
        }
        for (var ex = 0; ex < fourEndss; ex++) {
            var ele = elemente.clone();

            ele.find("#articleFourType").text(articles[ex].type);
            ele.find("#articleFourPrix").text(articles[ex].prix + " $");
            ele.find("#articleFourLibelle").text(articles[ex].libelle);
            ele.find("#articleFourLibelle2").text(articles[ex].libelle);


            ele.find("#articleFourImage").html("<img alt='img02'   src=" + articles[ex].image + "  />");



            articleEndRow.append(ele);

        }


        for (var i = 0; i < article.length; i++) {

            var el = element.clone();

            el.find("#libelle").text(article[i].libelle);
            el.find("#type").text(article[i].type);
            el.find("#prix").text(article[i].prix + "$");
            //  el.find("#date").text(article[i].date_enregistrement);  
            // var dates=article[i].date_enregistrement;
            //  var dts= new Date(article[i].date_enregistrement);
            // console.log(dts);
            el.find("#image").html("<img alt='img02'  src=" + article[i].image + "  />");
            //el.find("#cardarticle").html(' <a data-fancybox="gallery" href='+article[i].image+' class="gallery-div"><figure><img src='+article[i].image+' alt="gallery1"/> <figcaption><svg xmlns="https://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/> </svg> </figcaption> </figure> </a>');  
            el.find("#description").text(article[i].description);
            // el.find("#comment").html("<div style='display:none; margin-left:10px;' id='com"+citation[i].citation_id+"'> <div class='search-box'><input type='text' placeholder='Ecrivez votre commentaire' style='width:80%;' class='commentair' > <button class='fas fa-paper-plane' style='color:blue; height:27px; ' onclick='cliqueComment()'></button></div></div>");
            // el.find("#textCitation").text(citation[i].titre);  
            $("#tableArticles").append("<tr ><td>" + article[i].date_enregistrement + "</td><td>" + article[i].libelle + " </td><td>" + article[i].prix + " </td><td>" + article[i].description + "</td><td><span class=' fas fa-trash' style='cursor:pointer;'onclick='allDelete(" + article[i].article_id + ")'></span></td></tr>");

            articleRow.append(el);
        }
    }

    $.ajax(option);
    articleRow.show();
    articleEndRow.show();
}

function affichageActualites() {
    // alert("d");

    var actualiteRow = $("#all_actualite");
    var element = $("#actualiteDiv");
    actualiteRow.html("");
    var actualite = [];

    var actualiteEndRow = $("#all_four_actualite");
    var elemente = $("#actualiteFourDiv");
    actualiteEndRow.html("");


    var option = {};

    option.url = "https://backend.dcmp.groupepaixservice.net/all/view/viewActualites/";
    option.type = "GET";
    option.success = function(reponse) {
        //console.log(reponse.reponse.actualites);
        actualite = reponse.reponse.actualites;
        actualites = reponse.reponse.actualites;
        var tailleM = actualite.length;

        var totalActualite = actualite.length;
        $("#totalActualite").text(totalActualite);

        var x = actualite.length - 1;

        //alert(x);

        $("#dernierActusTitre").text(actualites[x].titre);
        $("#dernierActusDate").text(actualites[x].date_enregistrement);
        $("#dernierActusDescription").text(actualites[x].description);
        $("#dernierActusImage").html("<img alt='img02'   src=" + actualites[x].image + "  />");


        actualite.reverse();



        var fourEnds = actualites.length - 4;
        fourEndss = actualites.length - fourEnds;
        // alert(fourEnds);
        if (actualites.length <= 3) {

            fourEndss = actualites.length;
        }



        for (var ex = 0; ex < fourEndss; ex++) {

            //alert(fourEnds);
            var ele = elemente.clone();

            ele.find("#actualiteFourTitre").text(actualites[ex].titre);
            ele.find("#actualiteFourDate").text(actualites[ex].date_enregistrement);
            ele.find("#actualiteFourDescription").text(actualites[ex].description);


            ele.find("#actualiteFourImage").html("<img alt='img02'   src=" + actualites[ex].image + "  />");



            actualiteEndRow.append(ele);

        }

        //actualite.reverse();

        for (var i = 0; i < actualite.length; i++) {

            var el = element.clone();

            el.find("#titre").text(actualite[i].titre);
            el.find("#date").text(actualite[i].date_enregistrement);
            // var dates=actualite[i].date_enregistrement;
            //  var dts= new Date(actualite[i].date_enregistrement);
            // console.log(dts);

            el.find("#imageActualite").html("<img alt='img02'  src=" + actualite[i].image + "  />");
            el.find("#description").text(actualite[i].description.substr(0, 112) + " ...");
            // el.find("#comment").html("<div style='display:none; margin-left:10px;' id='com"+citation[i].citation_id+"'> <div class='search-box'><input type='text' placeholder='Ecrivez votre commentaire' style='width:80%;' class='commentair' > <button class='fas fa-paper-plane' style='color:blue; height:27px; ' onclick='cliqueComment()'></button></div></div>");
            // el.find("#textCitation").text(citation[i].titre);  
            $("#tableActualites").append("<tr ><td>" + actualite[i].date_enregistrement + "</td><td>" + actualite[i].titre + " </td><td>" + actualite[i].type + " </td><td>" + actualite[i].description + "</td><td><span class=' fas fa-trash' style='cursor:pointer;'onclick='allDelete(" + actualite[i].actualite_id + ")'></span></td></tr>");

            actualiteRow.append(el);
        }
    }

    $.ajax(option);
    actualiteRow.show();
    actualiteEndRow.show();

}

function affichageMedias() {
    // alert("d");

    var mediaRow = $("#all_media");
    var element = $("#mediaDiv");
    mediaRow.html("");
    var media = [];

    var mediaEndRow = $("#all_four_media");
    var elemente = $("#mediaFourDiv");
    mediaEndRow.html("");


    var option = {};

    option.url = "https://backend.dcmp.groupepaixservice.net/all/view/viewMedias/";
    option.type = "GET";
    option.success = function(reponse) {
        //console.log(reponse.reponse.medias);
        media = reponse.reponse.medias;
        medias = reponse.reponse.medias;
        var tailleM = media.length;

        var totalMedia = media.length;
        $("#totalMedia").text(totalMedia);

        media.reverse();


        //  medias.reverse(); 

        var fourEnds = medias.length - 2;
        fourEndss = medias.length - fourEnds;
        //alert(fourEnds);
        if (medias.length <= 1) {

            fourEndss = medias.length;
        }
        for (var ex = 0; ex < fourEndss; ex++) {
            var ele = elemente.clone();

            ele.find("#mediaFourTitre").text(medias[ex].titre);
            ele.find("#mediaFourDate").text(medias[ex].date_enregistrement);
            ele.find("#mediaFourDesctiption").text(medias[ex].description);


            ele.find("#mediaFourImage").html("<img alt='img02'   src=" + medias[ex].image + "  />");


            ele.find("#articleFourImage").html("<img alt='img02'   src=" + medias[ex].image + "  />");



            mediaEndRow.append(ele);

        }
        for (var i = 0; i < media.length; i++) {

            var el = element.clone();

            el.find("#titre").text(media[i].titre);
            el.find("#date").text(media[i].date_enregistrement);
            // var dates=media[i].date_enregistrement;
            //  var dts= new Date(media[i].date_enregistrement);
            // console.log(dts);

            el.find("#cardmedia").html(' <a data-fancybox="gallery" href=' + media[i].image + ' class="gallery-div"><figure><img src=' + media[i].image + ' alt="gallery1"/> <figcaption><svg xmlns="https://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/> </svg> </figcaption> </figure> </a>');
            //  el.find("#description").text(media[i].description.substr(0, 112)+" ...");
            // el.find("#comment").html("<div style='display:none; margin-left:10px;' id='com"+citation[i].citation_id+"'> <div class='search-box'><input type='text' placeholder='Ecrivez votre commentaire' style='width:80%;' class='commentair' > <button class='fas fa-paper-plane' style='color:blue; height:27px; ' onclick='cliqueComment()'></button></div></div>");
            // el.find("#textCitation").text(citation[i].titre);  
            $("#tableMedias").append("<tr ><td>" + media[i].date_enregistrement + "</td><td>" + media[i].titre + " </td><td>" + media[i].type + " </td><td>" + media[i].description + "</td><td><span class=' fas fa-trash' style='cursor:pointer;'onclick='allDelete(" + media[i].actualite_id + ")'></span></td></tr>");
            mediaRow.append(el);
        }
    }

    $.ajax(option);
    mediaRow.show();
    mediaEndRow.show();

}

function affichageLeagues() {
    //alert("e");
    var option = {};

    option.url = "https://backend.dcmp.groupepaixservice.net/all/view/viewLeagues/";
    option.type = "GET";
    option.success = function(reponse) {
        //console.log(reponse.reponse.articles);
        league = reponse.reponse.leagues;
        var tailleM = league.length;
        league.reverse();
        for (var i = 0; i < league.length; i++) {
            $("#site").append("<option>" + league[i].libelle + " " + league[i].saison + " </option>");
        }
    }

    $.ajax(option);

}

function affichageCalendriers() {
    //alert("dd");
    var matchEndRow = $("#all_four_match");
    var element = $("#matchFourDiv");
    matchEndRow.html("");
    var option = {};

    option.url = "https://backend.dcmp.groupepaixservice.net/all/view/viewCalendriers/";
    option.type = "GET";
    option.success = function(reponse) {
        //console.log(reponse.reponse.medias);
        calendrier = reponse.reponse.calendriers;

        var x = calendrier.length - 1;
        var totalMatch = calendrier.length;
        $("#totalMatch").text(totalMatch);
        $("#prochainDate").text(calendrier[x].date);
        $("#prochainHeure").text(calendrier[x].heure);
        $("#prochainCluba").text(calendrier[x].cluba);
        $("#prochainClubb").text(calendrier[x].clubb);
        $("#prochainStade").text(calendrier[x].stade);
        $("#prochainLeague").text(calendrier[x].league_id);

        $("#prochainImagea").html("<img alt='img02' style='width:30px'  src=" + calendrier[x].imagea + "  />");
        $("#prochainImageb").html("<img alt='img02'style='width:30px'  src=" + calendrier[x].imageb + "  />");

        calendrier.reverse();
        var fourEnd = calendrier.length - 4;
        fourEnds = calendrier.length - fourEnd;
        //alert(fourEnd);


        //var match=[];
        if (calendrier.length <= 3) {

            fourEnds = calendrier.length;
        }


        for (var ec = 0; ec < fourEnds; ec++) {
            var el = element.clone();

            el.find("#matchFourDate").text(calendrier[ec].date);

            el.find("#matchFourCluba").text(calendrier[ec].cluba);
            el.find("#matchFourClubb").text(calendrier[ec].clubb);
            el.find("#matchFourStade").text(calendrier[ec].stade + " ");

            el.find("#matchFourImagea").html("<img alt='img02' style='width:60px'  src=" + calendrier[ec].imagea + "  />");
            el.find("#matchFourImageb").html("<img alt='img02'style='width:60px'  src=" + calendrier[ec].imageb + "  />");


            matchEndRow.append(el);
            //alert(calendrier[ec].cluba);
        }

        //var tableM="calendriers";

        for (var i = 0; i < calendrier.length; i++) {
            // alert("d");
            $("#tableCalendriers").append("<tr ><td>" + calendrier[i].date + "</td><td> <a href='#' class='btn ms-ti'>" + calendrier[i].cluba + " <span>vs</span> " + calendrier[i].clubb + " </a></td><td>" + calendrier[i].heure + "</td><td>" + calendrier[i].league_id + "</td><td>" + calendrier[i].stade + "</td></tr>");
            $("#tableAdminMatch").append("<tr ><td>" + calendrier[i].date + "</td><td> <a href='#' class='btn ms-ti'>" + calendrier[i].cluba + " <span>vs</span> " + calendrier[i].clubb + " </a></td><td>" + calendrier[i].heure + "</td><td>" + calendrier[i].league_id + "</td><td>" + calendrier[i].scorea + " - " + calendrier[i].scoreb + "</td></td><td>" + calendrier[i].stade + "</td> <td><span class=' fas fa-trash' style='cursor:pointer;'onclick='allDelete(" + calendrier[i].calendrier_id + ")'></span></td><td><span class=' fas fa-check' style='cursor:pointer;'onclick='calendriersScore(" + calendrier[i].calendrier_id + ")'></span></td></tr>");

        }


    }
    matchEndRow.show();
    $.ajax(option);

}

function affichageCalendriersJoue() {


    var option = {};

    option.url = "https://backend.dcmp.groupepaixservice.net/all/view/viewCalendriersJoue/";
    option.type = "GET";
    option.success = function(reponse) {
        //console.log(reponse.reponse.matchs);
        match = reponse.reponse.calendriers;
        matchs = reponse.reponse.calendriers;
        var totalMatchJoue = match.length;
        $("#totalMatchJoue").text(totalMatchJoue);
        match.reverse();


        // matchs.reverse(); 


        //alert(match.length);
        for (var x = 0; x < match.length; x++) {
            // alert(x);
            $("#tableAdminMatchs").append("<tr ><td>" + match[x].date + "</td><td> <a href='#' class='btn ms-ti'>" + match[x].cluba + " <span>vs</span> " + match[x].clubb + " </a></td><td>" + match[x].heure + "</td><td>" + match[x].league_id + "</td><td>" + match[x].scorea + " - " + match[x].scoreb + "</td></td><td>" + match[x].stade + "</td> <td><span class=' fas fa-trash' style='cursor:pointer;'onclick='allDelete(" + match[x].calendrier_id + ")'></span></td><td><span class=' fas fa-check' style='cursor:pointer;'onclick='calendriersScore(" + match[x].calendrier_id + ")'></span></td></tr>");
        }
    }

    $.ajax(option);


}

function allDelete(parametre_id) {
    //alert($("#tables").val());
    if (confirm("Voulez vous supprimer cet enregistrement?") == true) {
        var datas = {};
        datas.tables = $("#tables").val();
        datas.parametre_id = parametre_id;
        // var domain="https://backend.dcmp.groupepaixservice.net/all/delete/deleteActualites/";
        // querySend(datas,domain);
    } else {
        swal("Merci enregistrement non supprimé", "error", "error");
    }
}

function calendriersScore(parametre_id) {
    //alert($("#tables").val());
    if (confirm("Voulez vous valider ce score?") == true) {
        var datas = {};
        datas.tables = $("#tables").val();
        datas.scorea = $("#scoreClubA").val();
        datas.scoreb = $("#scoreClubB").val();
        datas.parametre_id = parametre_id;
        var domain = "https://backend.dcmp.groupepaixservice.net/all/delete/deleteCalendriers/";
        querySend(datas, domain);
    } else {
        swal("Merci enregistrement non supprimé", "error", "error");
    }
}
/*
 *Gestion des local storage
 */

/*function creationLocalstorage(datasUsers){
    
    for(var i=0; i<datasUsers.length; i++)
    {  
        localStorage.setItem('userId',datasUsers[i].user_id);
        localStorage.setItem('userName', datasUsers[i].noms);
        localStorage.setItem('userRole',datasUsers[i].role);
        pathRediction();
    }      
}*/

/*
*
Gestion de redirection
*/
function informationUsers() {
    $(".nomss").text(localStorage.getItem('userName'));
    $(".roless").text(localStorage.getItem('userRole'));
}

function pathRediction() {
    // alert(localStorage.getItem('userId'));
    if (localStorage.getItem('userId') == null) {
        alert("Vous etes pas autorisé à acceder à cette application");
        window.location = "login.html";
        return false;

    } else {

    }
}