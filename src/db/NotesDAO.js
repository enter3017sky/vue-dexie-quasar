/**
 *
 * 資料存取物件（data access object，DAO）是為某種類型的資料庫或其他永續性機制提供一個抽象介面的物件
 * 物件關聯對映（英語：Object Relational Mapping，簡稱ORM，或O/RM，或O/R mapping）
 * 是一種程式設計技術，用於實現物件導向程式語言裡不同類型系統的資料之間的轉換
 *
 */

import db from './db';

export default class NotesDAO {
  constructor() {
    this.db = db;
  }

  static getInstance() {
    return new NotesDAO();
  }

  get() {
    return this.db.notes.toArray();
  }

  save(note) {
    if (note.id) {
      return this.db.notes.update(note.id, note);
    }
    return this.db.notes.add(note);
  }

  delete(note) {
    console.log(' delete ', note);
    return this.db.notes.delete(note.id);
  }

  getById(id) {
    return this.db.notes.where({ id }).first();
  }
}
