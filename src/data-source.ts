import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { CreateUser1707345967223 as CreateUserMigration } from "./migration/1707345967223-createUser"
import { CreatePost1707348716524 } from "./migration/1707348716524-createPost"
import { Post } from "./entity/Post"

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "database.sqlite",
    synchronize: true,
    logging: false,
    entities: [User, Post],
    migrations: [CreateUserMigration, CreatePost1707348716524],
    subscribers: [],
})
