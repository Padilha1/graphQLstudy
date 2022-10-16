import "reflect-metadata";

import path from 'node:path';
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { Appointments } from "./resolvers/Appointments";


async function bootstrap(){
    const schema = await buildSchema({
        resolvers:[
            Appointments,
        ],
        emitSchemaFile: path.resolve(__dirname, 'schema.gql')
    })
    const server = new ApolloServer({
        schema,
    })

    const {url} = await server.listen()

    console.log(`Http server running on ${url}`)
}

bootstrap()