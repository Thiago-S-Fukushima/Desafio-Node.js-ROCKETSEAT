import fastify from 'fastify' //Criando servidor com Fastify.
import crypto from 'node:crypto'
import{ db} from './src/database/client.ts'
import{ courses } from './src/database/schema.ts'

const server = fastify({
    logger: {
        transport: {
        target: 'pino-pretty',
        options: {
            translateTime: 'HH:MM:ss Z',
            ignore: 'pid,hostname',
            },
        },
    },
})


//Criando rotas.

server.get('/courses', async (request, reply) => { 
    const result = await db.select().from(courses)
    return reply.send({ result })
})

/*
server.get('/courses/:id', (request, reply) => { 
    type Params = {
        id: string
    }

    const params = request.params as Params
    const courseId = params.id
    
    const course = courses.find(course => course.id === courseId)

    if (course) {
        return { course }
    } 

    return reply.status(404).send()
})

server.post('/courses', (request, reply) => { //Criar Cursos.

    type Body = {
        title: string
    }

    const courseId = crypto.randomUUID() //Gerando um ID aleatório.

    const body = request.body as Body
    const courseTitle = body.title
    
    if (!courseTitle) {
        return reply.status(400).send({ menssagem: 'Titulo obrigatório' })
    }

    courses.push({ id: courseId, title: courseTitle }) //Adiciona um novo Curso

    return reply.status(201).send({ courseId }) //Retorna um status caso esteja tudo correto.
})
*/

server.listen ({port:3333}).then(() => {
    console.log('HTTP server running!')
})