import { Entity, PrimaryGeneratedColumn, Column, Unique, ManyToOne } from "typeorm"
import { User } from "./User"

@Entity()
@Unique(["title"])
export class Post {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    text: string

    @ManyToOne(() => User, (user) => user.posts, {
        onDelete: "CASCADE"
    })
    user: User

}