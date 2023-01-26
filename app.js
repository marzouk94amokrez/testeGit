// require("dotenv").config();
// const express = require("express");
// const app = express();
// const userRouter = require("./api/users/user.router");

// app.use(express.json());

// app.use("/api/users", userRouter);
// const port = process.env.PORT || 4000;
// app.listen(port, () => {
//   console.log("server up and running on PORT :", port);
// });


const {
  createUser,
  login,
  getUserByUserId,
  getUsers,
  updateUsers,
  deleteUser,
  sendMailer
} = require("./function");
const express = require("express")

const app = express()
app.use(express.json())
const readline = require("readline").createInterface({input: process.stdin,output: process.stdout})
const stateUser = {
                  force: Math.floor(Math.random() * 100 + 1),
                  PointDeVie: Math.floor(Math.random() * 100 + 1)}

const monstres = ["magicien", "Zombie", "Vampir", "Hyde"]
const stateMonstre = {
        force: Math.floor(Math.random() * 100 + 1),
        pointDeVie: Math.floor(Math.random() * 100 + 1), 
        typeDeMonstre: monstres[Math.floor(Math.random() * monstres.length)],
}
const secondChoice = {1: "Battre ⚔ ",2: "Sauvegarder ⏸ ",3: "Quitter ✖ "}
const firstChoice = {1: "Commencer ✅",2: "Charger ▶ ", 3: "Quitter ❌"}
function Battre() { 
                    console.log(stateMonstre)
                    stateUserCopy = stateUser
                    stateMonstreCopy = stateMonstre
                    let i = 1
                    while (stateUser.force > 0 && stateMonstre.force > 0) {
                        let attackMonstre = Math.floor(Math.random() * 10 + 1)
                        let attackUser = Math.floor(Math.random() * 10 + 1)
                        console.log("+-------------+")
                        console.log("__________| tour : " + i + "  |___________") 
                        console.log(" +-------------+")
                        stateUser.force = stateUser.force - attackMonstre
                        stateMonstre.force = stateMonstre.force - attackUser 
                        console.log( "user lost : " + attackMonstre +" 😭 " +"( user : " + (stateUser.force > 0 ? stateUser.force : 0) + " 🩸 )" )
                        console.log( "monstre force : " +attackUser + " 👻 " + "(Monstre : " + (stateMonstre.force > 0 ? stateMonstre.force : 0) + " 💧 )" )
                        i = i + 1
                  }
                    if (stateUser.force <= 0) { 
                         console.log("Aie aie aie ! vous avez perdu la pertie 💀")} 
                    else {
                         console.log("Bravooo! Vous avez réussi à battre le monstre 👏")
                    }
                  }

function start() { 
                    console.log(" +----------------------+")
                    console.log(" _____________ | Let's Goo ! | _____________")
                    console.log(" +----------------------+")
                    console.log(stateUser, secondChoice)
                    readline.question("Veuillez choisir un choix (saisir un chiffre):",
                    (name) => {if (name == 1) {
                    Battre()
                    }
                    if (name == 2) {
                    Sauvegarder()
                    }
                    if (name == 3) {
                    exit()}
                    readline.close()} )
                  }
function load() {}
function exit() {
                  process.exit()
                }

function Sauvegarder() {
  console.log("Merci pour la partie (la partie est sauvegardée avec succées)")
                    console.log(firstChoice)
                    readline.question( "Veuillez choisir un choix (saisir un chiffre):", (name) => {
                      if (name == 1) {
                            start()
                        }
                      if (name == 2) {
                            load()
                          }
                      if (name == 3) {
                      exit()
                       }
                    } )
                  }
function main() {
            console.log(" +----------------------+")
            console.log(" _____________ | Bienvenue  | _____________")
            console.log("  +----------------------+")
            console.log(firstChoice)
            readline.question( "Veuillez choisir un choix (saisir un chiffre):", 
            (name) => {
            if (name == 1) {
              start()
              }else
            if (name == 2) {
                 load()
             }else
            if (name == 3) {
            exit() 
          }else
          {main()}
            }
            )};




(function (exports, require, module, __filename, __dirname) {  main()})()