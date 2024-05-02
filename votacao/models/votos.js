const db = require('../db');

class Voto {
  constructor(enqueteId, opcaoId) {
    this.enqueteId = enqueteId;
    this.opcaoId = opcaoId;
  }

  static vote(enqueteId, opcaoId) {
    return db.execute('INSERT INTO votos (enquete_id, opcao_id) VALUES (?, ?)', [enqueteId, opcaoId]);
  }

  static getVotesByOption(opcaoId) {
    return db.execute('SELECT COUNT(*) AS total_votes FROM votos WHERE opcao_id = ?', [opcaoId]);
  }
}

module.exports = Voto;