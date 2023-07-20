import { IResolvers } from '@graphql-tools/utils';
import { v4 } from 'uuid';
import { GqlContext } from './GplContext';

interface User {
    id: string;
    username: string;
    description: string;
}

interface Todo {
    id: string;
    title: string;
    description: string;
}

const resolvers: IResolvers = {
    Query: {
        getUser: async (
            obj: any,
            args: {
                id: string;
            },
            ctx: GqlContext,
            info: any
        ) : Promise<User> => {
            return {
                id: v4(),
                username: 'dave',
                description: '',
            };
        },
        getTodos: async (
            parent: any,
            args: null,
            ctx: GqlContext,
            info: any
        ) : Promise<Array<Todo>> => {
            return [
                {
                    id: v4(),
                    title: 'First todo',
                    description: 'First todo description',
                },
                {
                    id: v4(),
                    title: 'Second todo',
                    description: 'Second todo description',
                },
                {
                    id: v4(),
                    title: 'Third todo',
                    description: 'Third todo description'
                },
            ];
        },
    },
};

export default resolvers;
