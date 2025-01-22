const request = require('supertest')
const app = require('../api/app')
const DB = require('../api/db.config')

describe('MAIN_ROUTER', () => {

    afterAll( async () => {
        await DB.sequelize.close() //permet de fermer la connexion de la db après les tests pour éviter qu'elle tourne encore
    })

    describe('TRY GET', () => {
        it('Should return 200', async() => {
            const response = await request(app).get('/')
            expect(response.status).toBe(200)
        })

        it('Should return 501', async() => {
            const response = await request(app).get('/1234567')
            expect(response.status).toBe(501)
        })
    }); 

    describe('TRY PUT', () => {
        it('Should return 501 /=> put on djskdjskjd', async() => {
            const response = await request(app).put('/123457')
            expect(response.status).toBe(501)
        })

        it('Should return 501 /=> put on /', async() => {
            const response = await request(app).put('/')
            expect(response.status).toBe(501)
        })
    })
})