
let getHomePage = (req,res) => {
    //return res.send('hello controller');
    return res.render('homePage.ejs');
}

let getUser =  (req, res) => {
    return res.render('user/login.ejs');
}

module.exports = {
    getHomePage: getHomePage,
    getUser: getUser,
}