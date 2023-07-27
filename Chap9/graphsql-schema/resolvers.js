"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const db_1 = require("./db");
const resolvers = {
    Query: {
        getUser: (obj, args, ctx, info) => __awaiter(void 0, void 0, void 0, function* () {
            return {
                id: (0, uuid_1.v4)(),
                username: 'dave',
                description: '',
            };
        }),
        getTodos: (parent, args, ctx, info) => __awaiter(void 0, void 0, void 0, function* () {
            return [
                {
                    id: (0, uuid_1.v4)(),
                    title: 'First todo',
                    description: 'First todo description',
                },
                {
                    id: (0, uuid_1.v4)(),
                    title: 'Second todo',
                    description: 'Second todo description',
                },
                {
                    id: (0, uuid_1.v4)(),
                    title: 'Third todo',
                    description: 'Third todo description'
                },
            ];
        }),
    },
    Mutation: {
        addTodo: (parent, args, ctx, info) => __awaiter(void 0, void 0, void 0, function* () {
            db_1.todos.push({
                id: (0, uuid_1.v4)(),
                title: args.title,
                description: args.description
            });
            return db_1.todos[db_1.todos.length - 1];
        }),
    }
};
exports.default = resolvers;