const express = require("express")
const {graphqlHTTP} = require("express-graphql")
const {buildSchema} = require("graphql")
const Hero = require("./Hero.js")
const hero = new Hero()

const app = express()

let schema = buildSchema(`
type Hero {
    id: Int
    superhero: String
    publisher: String
    alter_ego: String
    first_appearance: String
    characters: String
}
type Query {
    heroes: [Hero]
}
type Mutation {
    createHero(superhero: String, publisher: String,alter_ego: String,first_appearance: String,characters: String): Hero
    deleteHero(id: Int): Hero
}
`)


const root = {
    heroes: ()=> hero.getHeroes(),
    createHero: (data) => hero.createHero(data),
    deleteHero: (id) => hero.deleteHero(id)
}

app.use("/api", graphqlHTTP({
    schema: schema,
    rootValue:root
}))

app.listen(8080,()=> console.log("Server up"))


