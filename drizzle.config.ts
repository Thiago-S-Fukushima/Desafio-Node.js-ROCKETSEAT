import { defineConfig } from 'drizzle-kit'

if(!process.env.DATABASE_URL) {
    throw new Error('DATABASE)URL env is requered.') //Necessário para não dar error na URL da DB.
}

export default defineConfig({
    dialect: 'postgresql', //Qual BD está sendo utilizado.
    dbCredentials: { //URL do postgres. 
        url: process.env.DATABASE_URL
    },
    out: './drizzle', //Cria uma pasta.
    schema: './src/database/schema.ts'
})