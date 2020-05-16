class Client {
    constructor(_main) {
        const SELF = this;

        this.Main = _main;

        // Le serveur central n'a pas trouvé d'intent lié à la demande.
        this.Main.IOClient.on("none", function(){
            SELF.Main.IOServer.sockets.emit("none");
        });
    }
}

module.exports = Client;