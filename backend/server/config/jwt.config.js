// This is midlware that we create. It contain a function call authenticate.
// It goal is to check i our user have a cookies(Avalide cooki from or website) and decode it

const jwt = require("jsonwebtoken");

module.exports.authenticate = (req, res, next) => {
    jwt.verify(req.cookies.usertoken, process.env.SECRET_KEY, (err, payload) => {
        if (err) {
            res.status(401).json({ verified: false });
        } else {
            next();
        }
    });
}