import {User} from "../Models/models.js"

export const userSeed = async ()=>
     ([
        await User.create({name: "Ash Ketchup", password: "puebloPaleta", mail: "ash@gmail.com", rolId: 1}),
        await User.create({name: "Misty", password: "ciudadCeleste", mail: "misty@gmail.com", rolId: 2}),
        await User.create({name: "Broock", password: "enfermeraJoy", mail: "piedrita@gmail.com", rolId: 2},),
        await User.create({name: "Chakira", password: "wakawaka", mail: "ciegasordamuda@gmail.com", rolId: 3}),
        await User.create({name: "Chayane", password: "hayqsertorero", mail: "salome@gmail.com", rolId: 3}),
        await User.create({name: "kuka", password: "yaDeBebeHay", mail: "unaFotoDePeron@gmail.com", rolId: 3}),
        await User.create({name: "Ash Ketchup", password: "puebloPaleta", mail: "ashito@gmail.com", rolId: 3}),
        await User.create({name: "Papanatas", password: "chaskibum", mail: "ash@gmail.com", rolId: 3}),
       
      
      
    ])

    await userSeed()