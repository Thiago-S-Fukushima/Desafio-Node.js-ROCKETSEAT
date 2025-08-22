/*
const fastify = require('fastify') //Criando servidor com Fastify.
const crypto = require('crypto')

const server = fastify()


const courses = [
    { id: '1', title: 'Curso de React Native' },
    { id: '2', title: 'Curso de Node.js' },
    { id: '3', title: 'Curso de Kotlin' }
]

//Criando rotas.

server.get('/courses', () => { //Puxa uma lista os Cursos.
    return { courses }
})

server.get('/courses/:id', (request, reply) => { //Seleciona um curso especifico pelo ID.
    const courseId = request.params.id
    
    const course = courses.find(course => course.id === courseId)

    if (course) {
        return { course }
    } 

    return reply.status(404).send()
})

server.post('/courses', (request, reply) => { //Criar Cursos.

    const courseTitle = request.body.title
    const courseId = crypto.randomUUID() //Gerando um ID aleatório.
 
    if (!courseTitle) {
        return reply.status(400).send({ menssagem: 'Titulo obrigatório' })
    }

    courses.push({ id: courseId, title: courseTitle }) //Adiciona um novo Curso

    return reply.status(201).send({ courseId }) //Retorna um status caso esteja tudo correto.
})

server.listen ({port:3333}).then(() => {
    console.log('HTTP server running!')
})
*/