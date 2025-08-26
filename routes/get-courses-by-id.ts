import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { db } from '../src/database/client.ts'
import { eq } from 'drizzle-orm'
import { courses } from '../src/database/schema.ts'
import z from 'zod'

export const  getCourseByIdRoute: FastifyPluginAsyncZod = async (server) => {
    server.get('/courses/:id', {
        schema: {
            tags: ['courses'],
            summary: 'Get Course By ID',
            params: z.object({
                id: z.uuid(),
            }),
            response: {
                200: z.object ({
                    courses: z.object({
                        id: z.uuid(),
                        title: z.string(),
                        description: z.string().nullable()
                    })
                }),
                404: z.null().describe('Course not found'),
            },
        },
    }, async (request, reply) => { 
    const courseId = request.params.id

    const result = await db
    .select()
    .from(courses)
    .where(eq(courses.id, courseId))

    if (result.length > 0) {
            return { courses: result[0] }
        } 

        return reply.status(404).send()
    })
}
