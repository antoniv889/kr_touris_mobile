import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { HttpClient } from '@angular/common/http';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { BehaviorSubject, Observable } from 'rxjs';

export interface User {
  id: number,
  username: string,
}
 
@Injectable({
  providedIn: 'root'
})

export class StorageService {
  users = new BehaviorSubject([]);

  private database: SQLiteObject;
  private dbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);
 
  developers = new BehaviorSubject([]);
  products = new BehaviorSubject([]);
 
  constructor(private plt: Platform, private sqlitePorter: SQLitePorter, private sqlite: SQLite, private http: HttpClient) {
    this.plt.ready().then(() => {
      this.sqlite.create({
        name: 'user.db',
        location: 'default'
      })
      .then((db: SQLiteObject) => {
          this.database = db;
          this.seedDatabase();
      });
    });
  }
 
  seedDatabase() {
    this.http.get('assets/data.sql', { responseType: 'text'})
    .subscribe(sql => {
      this.sqlitePorter.importSqlToDb(this.database, sql)
        .then(_ => {
          this.loadUser();
          this.dbReady.next(true);
        })
        .catch(e => console.error(e));
    });
  }
  deleteUser(id) {
    return this.database.executeSql('DELETE FROM user WHERE id = ?', [id]).then(_ => {
      this.loadUser();
    });
  }
  getDatabaseState() {
    return this.dbReady.asObservable();
  }
 
  getUser(): Observable<User[]> {
    return this.users.asObservable();
  }
  loadUser() {
      return this.database.executeSql('SELECT * FROM user', []).then(data => {
        let users: User[] = [];
        if (data.rows.length > 0) {
          for (let i = 0; i < data.rows.length; i++) {
            users.push({ 
              id: data.rows.item(i).id,
              username: data.rows.item(i).username, 
             });
          }
        }
        this.users.next(users);
      });
  }
  addUser(id,username) {
      let data = [id,username];
      return this.database.executeSql('INSERT INTO user (id,username) VALUES (?,?)', data).then(data => {
        this.loadUser();
      });
  }
}