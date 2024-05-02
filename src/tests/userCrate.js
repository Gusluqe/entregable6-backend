const User = require('../models/User')

const usercreate =  async () => {
    const user = {
        firstName: "gustavo",
        lastName: "luque",
        email: "gustavoluque90@gmail.com",
        password: "gustavo90",
        phone: "1165559614" 
    }

    await User.create(user)

}

module.exports = usercreate