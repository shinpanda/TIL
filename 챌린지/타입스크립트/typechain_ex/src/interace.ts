/*
type Team = "red" | "blue" | "yellow"
type Health = 1 | 5 | 10

interface Player {
    nickname: string,
    team: Team,
    health: Health
}
*/
interface User {
    name: string
}

interface Player extends User {

}

const nico: Player = {
    name: "nico"
}