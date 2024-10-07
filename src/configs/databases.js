import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('Library_db.sqLite', (err) => {
    if(err) {
        console.error('Erro ao conectar ao banco de dados: ', err.message);
    }else{
        console.log('Conectado com o sucesso ao banco de dados SQLite.');
    }
})


export default db;