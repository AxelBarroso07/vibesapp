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

    async get(){

    }
}

module.exports = {
    MySQLRepository
}