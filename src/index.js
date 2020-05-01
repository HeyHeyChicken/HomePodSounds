const LIBRARIES = {
  Skill: require("../../../Libraries/Skill")
};

class HomePodSound extends LIBRARIES.Skill {
  constructor(_main, _settings) {
    super(_main, _settings);
    const SELF = this;

    this.Main.Manager.addAction("none", function(_intent, _socket){
      _socket.emit("none");
    });
  }
}

module.exports = HomePodSound;
