const db = require('../db');

class Enquete {
  constructor(titulo, data_inicio, data_fim) {
    this.titulo = titulo;
    this.data_inicio = data_inicio;
    this.data_fim = data_fim;
  }

  static getAll() {
    return db.execute('SELECT * FROM enquetes');
  }

  static getById(id) {
    return db.execute('SELECT * FROM enquetes WHERE id = ?', [id]);
  }

  static create(enquete) {
    const { titulo, data_inicio, data_fim } = enquete;
    return db.execute('INSERT INTO enquetes (titulo, data_inicio, data_fim) VALUES (?, ?, ?)', [titulo, data_inicio, data_fim]);
  }

  static update(id, enquete) {
    const { titulo, data_inicio, data_fim } = enquete;
    return db.execute('UPDATE enquetes SET titulo = ?, data_inicio = ?, data_fim = ? WHERE id = ?', [titulo, data_inicio, data_fim, id]);
  }

  static delete(id) {
    return db.execute('DELETE FROM enquetes WHERE id = ?', [id]);
  }
}

module.exports = Enquete;