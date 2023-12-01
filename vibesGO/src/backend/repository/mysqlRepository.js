const dbConfig = require('../config/dbConfig')


class MySQLRepository {
    constructor (db) {
        this.db = db
    }

    async create(query, arrayData) {
        return new Promise((resolve, reject)=> {
            this.db.query(query,arrayData, (err) => {
                if (err) {
                    reject({error: err});
                }
                resolve(true)
            });
        })
        
    }

    async delete() {

    }

    async update(){

    }

    async get(query){
        return new Promise((resolve, reject)=> {
            this.db.query(query, (err, data) => {

                resolve(data)

                if (err) {
                    reject({error: err});
                }
            });
        })
    }
}

const db = dbConfig()
const mySQLRepository = new MySQLRepository(db)

module.exports = {
    mySQLRepository
}