import { envs } from "./envs.plugin";


describe('envs.plugin.ts', () => {
    
    
    test('should return env options', () => {


        // console.log(envs);
        expect( envs ).toEqual({
            PORT: 3000,
            MAILER_SERVICE: 'gmail',
            MAILER_EMAIL: 'santinodonato1@gmail.com',
            MAILER_SECRET_KEY: 'quws yosp hkdv vjrv',
            PROD: false,
            MONGO_URL: 'mongodb://santino:123456789@localhost:27018',
            MONGO_DB_NAME: 'NOC-TEST',
            MONGO_USER: 'santino',
            MONGO_PASS: '123456789',
            POSTGRES_URL: 'postgresql://postgres:123456789@localhost:5432/NOC'
        });

    });

    test('should return error if not found env', async() => {

        jest.resetModules();
        process.env.PORT = 'ABC';

        try {
            await import('./envs.plugin');
            expect(true).toBe(false);

        } catch (error) {
            expect(`${error}`).toContain('"PORT" should be a valid integer');
        }

    });
})