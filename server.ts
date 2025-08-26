import fastify from 'fastify'; //Criando servidor com Fastify.
import { fastifySwagger } from '@fastify/swagger';
import { fastifySwaggerUi } from '@fastify/swagger-ui';
import { validatorCompiler, serializerCompiler, type ZodTypeProvider, jsonSchemaTransform } from 'fastify-type-provider-zod';
import { createCoursesRoute } from './routes/post-courses.ts';
import { getCoursesRoute } from './routes/get-courses.ts';
import { getCourseByIdRoute } from './routes/get-courses-by-id.ts';

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
}).withTypeProvider<ZodTypeProvider>()

if(process.env.NODE_ENV === 'development') {
    server.register(fastifySwagger, {
    openapi:{
    info: {
        title: 'Desafio Node.js',
        version: '1.0.0',
        }
    },
    transform: jsonSchemaTransform,
})

server.register(fastifySwaggerUi, {
    routePrefix: '/docs'
})
}

server.register(createCoursesRoute)
server.register(getCoursesRoute)
server.register(getCourseByIdRoute)

server.setValidatorCompiler(validatorCompiler) //faz uma chegagem nos dados de entrada.
server.setSerializerCompiler(serializerCompiler) //converter os dados de saída de uma rota em outro formato.

server.listen ({port:3333}).then(() => { //Faz o código ouvir a porta 3333.
    console.log('HTTP server running!')
})