import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { db } from '../src/database/client.ts'
import { courses } from '../src/database/schema.ts'
import { z }from 'zod'

export const  createCoursesRoute: FastifyPluginAsyncZod = async (server) => {
    server.post('/courses', {
        schema: {
            tags: ['courses'],
            summary: 'Create a Course',
            body: z.object({
            title: z.string().min(5, 'Titulo precisa ter no minimo 5 caracteres'),
            }),
            response: {
                201: z.object({courseId: z.uuid()}).describe('Curso criado com sucesso.')
            }
        },
    }, async (request, reply) => { //Criar Cursos.
    const courseTitle = request.body.title

    const result = await db
    .insert(courses)
    .values({title:courseTitle})
    .returning()

    return reply.status(201).send({ courseId: result[0].id }) //Retorna um status caso esteja tudo correto.
})
}