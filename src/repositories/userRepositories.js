import db from '../configs/databases.js';

db.run(`
    CREATE TABLE IF NOT EXISTS users (
        id          INTEGER     PRIMARY KEY     AUTOINCREMENT,
        userName    TEXT        UNIQUE          NOT NULL,
        email       TEXT        UNIQUE          NOT NULL,
        password    TEXT                        NOT NULL,
        avatar      TEXT
    )
    
    `)

function createUserRepository(newUser){
    return new Promise((res, rej) => {
        const {userName, email, password, avatar} = newUser
        db.run(
            `
                INSERT INTO users (userName, email, password, avatar)
                VALUES (?,?,?,?)
            `,
            [userName, email, password, avatar],
            (err) => {
                if(err){
                    rej(err)
                } else {
                    res({massage: 'Usuário criado com sucesso'});
                }
            }
        )
    })
}
function findUserByEmailRepository(email){
    return new Promise((res, rej) => {
        db.get(`
                    SELECT id,userName, email, avatar 
                    FROM users 
                    WHERE email = ?
                `, [email], (err, rows) => {
            if(err){
                rej(err)
            }else{
                res(rows)
            }
        })
    })
}

export default{
    createUserRepository, 
    findUserByEmailRepository
}