import { AppDataSource } from "./data-source"
import { User } from "./entity/User"

AppDataSource.initialize().then(async () => {
    console.log("Searching for current users...")
    const users = await AppDataSource.manager.find(User)
    console.log(users)

    console.log('Deleting existent users...');
    users.forEach(async u => {
        const usrDeleted = await AppDataSource.manager.delete(User, u.id)
        console.log(`Deleted : ${usrDeleted}`)
    })

    console.log("Inserting a new user into the database...")
    const user = new User()
    user.firstName = "Timber"
    user.lastName = "Saw"
    user.age = 25
    await AppDataSource.manager.save(user)
    console.log("Saved a new user with id: " + user.id)

    console.log("Updated usr at database...")
    user.age = 35
    await AppDataSource.manager.save(user)

    console.log("Here you can setup and run express / fastify / any other framework.")

}).catch(error => console.log(error))

