const db = require('../db');

class Opcao {
  constructor(enqueteId, opcao) {
    this.enqueteId = enqueteId;
    this.opcao = opcao;
  }

  static getAllByEnqueteId(enqueteId) {
    return db.execute('SELECT * FROM opcoes WHERE enquete_id = ?', [enqueteId]);
  }

  static create(opcao) {
    const { enqueteId, opcao } = opcao;
    return db.execute('INSERT INTO opcoes (enquete_id, opcao) VALUES (?, ?)', [enqueteId, opcao]);
  }

  static update(id, opcao) {
    const { enqueteId, opcao } = opcao;
    return db.execute('UPDATE opcoes SET enquete_id = ?, opcao = ? WHERE id = ?', [enqueteId, opcao, id]);
  }

  static delete(id) {
    return db.execute('DELETE FROM opcoes WHERE id = ?', [id]);
  }
}

module.exports = Opcao;