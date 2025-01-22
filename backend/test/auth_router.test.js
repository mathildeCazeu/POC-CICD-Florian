const request = require('supertest')
const app = require('../api/app')
const DB = require('../api/db.config')

describe('AUTH ROUTE', () => {
    afterAll( async () => {
        await DB.sequelize.close() //permet de fermer la connexion de la db après les tests pour éviter qu'elle tourne encore
    })

    describe('TRY LOGIN WITH BAD DATA', () => {
        it('Should return 400 /=> missing parameter', async () => {
            const response = await request(app)
                .post('/auth/login')
                .send({
                    // email: 'admin@admin.admin',
                    password: 'nimda',
                })
            expect(response.status).toBe(400)
        })

        it('Should return 401 /=> bad email', async () => {
            const response = await request(app)
                .post('/auth/login')
                .send({
                    email: 'admin@TRUC.admin',
                    password: 'nimda',
                })
            expect(response.status).toBe(401)
        })

        it('Should return 401 /=> bad pwd', async () => {
            const response = await request(app)
                .post('/auth/login')
                .send({
                    email: 'admin@admin.admin',
                    password: 'dsjk',
                })
            expect(response.status).toBe(401)
        })
    })

    describe('TRY TO LOG AND GET TOKEN', () => {
        it('Should return 200 with token', async () => {
            const response = await request(app)
            .post('/auth/login')
            .send({
                email: 'admin@admin.admin',
                password: 'nimda',
            })
            expect(response.status).toBe(200)
            expect(response.body).toHaveProperty('access_token');
        })
    })
})