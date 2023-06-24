const { User } = require('../DB_connection');

const login = async (req, res) => {
  try {
    const { email, password } = req.query;

    if (!email || !password)
      return res.status(400).json({ message: "Faltan datos" });

    const user = await User.findOne({
      where: {
        email: email,
      },
    });

    if (!user)
      return res.status(404).json({ message: "Usuario no encontrado." });

    if (user.password != password)
      return res.status(403).json({ message: "Contraseña incorrecta." });

    return res.status(200).json({
      access: true,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = login;



// const usersList = require('../utils/users');

// const userLogin  = (req,res)=>{
//     // const {email, password} = req.query
//     // const login= {
//     //     access : true && !!usersList
//     //         .filter(user=>user.email === email)
//     //         .filter(trylog=>trylog.password === password).length
//     // }
//     // res.json(login)


//     const { email, password } = req.query;

//     const valido = usersList.find(
//     (user) => user.email === email && user.password === password
//     );
//     if (valido) res.status(200).json({ access: true });
//     else res.status(200).json({ access: false });
// }


// module.exports = userLogin;