import {User} from "../Models/models.js"

export const userSeed = async ()=>
     ([
        await User.create({name: "Ash Ketchup", password: "puebloPaleta", mail: "ash@gmail.com"}),
        await User.create({name: "Misty", password: "ciudadCeleste", mail: "misty@gmail.com"}),
        await User.create({name: "Broock", password: "enfermeraJoy", mail: "piedrita@gmail.com"},),
        await User.create({name: "Chakira", password: "wakawaka", mail: "ciegasordamuda@gmail.com"}),
        await User.create({name: "Chayane", password: "hayqsertorero", mail: "salome@gmail.com"}),
        await User.create({name: "kuka", password: "yaDeBebeHay", mail: "unaFotoDePeron@gmail.com"}),
        await User.create({name: "Ash Ketchup", password: "puebloPaleta", mail: "ashito@gmail.com"}),
       
       /*  {name: "Papanatas", password: "chaskibum", mail: "ash@gmail.com"}, */
      
    ])

    await userSeed()