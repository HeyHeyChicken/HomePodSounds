play("boot");

/* ############################################################################################ */
/* ### SOCKETS ################################################################################ */
/* ############################################################################################ */

// La GUI s'est connectée au serveur du client.
MAIN.Socket.on("connection", function() {
    play("boot");
});

// Le client est en train d'écouter la voix de l'utilisateur.
MAIN.Socket.on("start_stt", function() {
    play("listen");
});

// Le serveur central n'a pas trouvé d'intent lié à la demande.
MAIN.Socket.on("none", function() {
    play("invalid");
});

/* ############################################################################################ */
/* ### FUNCTION ############################################################################### */
/* ############################################################################################ */

function play(_name){
    MAIN.PlayAudio(MAIN.App.server.url + "/260458273/mp3/" + _name + ".mp3", 1, 100, false, true);
}