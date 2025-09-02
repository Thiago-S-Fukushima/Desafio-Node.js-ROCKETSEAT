import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { db } from '../src/database/client'
import { eq } from 'drizzle-orm'
import { courses } from '../src/database/schema'
import z from 'zod'

export const deleteCourseRoute: FastifyPluginAsyncZod = async (server) => {
  server.delete('/courses/:id', {
    schema: {
      tags: ['courses'],
      summary: 'Deletar curso por ID',
      params: z.object({
        id: z.uuid(),
      }),
      response: {
        204: z.null().describe('Curso deletado com sucesso'),
        404: z.null().describe('Curso não encontrado'),
      },
    },
  }, async (request, reply) => {
    const courseId = request.params.id

    const result = await db.delete(courses).where(eq(courses.id, courseId))

    if (result.rowCount && result.rowCount > 0) {
      return reply.status(204).send()
    }

    return reply.status(404).send()
  })
}