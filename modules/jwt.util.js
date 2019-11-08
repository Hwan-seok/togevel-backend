const jwt = require("jsonwebtoken");

const TOKEN_SECRET = "khuthonhagisilta";
const generateToken = data => {
    const token = jwt.sign(data, TOKEN_SECRET, {
        algorithm: "HS256",
        expiresIn: 60 * 60 * 24 * 7
    });
    return token;
};

const verifyToken = token => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, TOKEN_SECRET, (err, decode) => {
            if (err) {
                // console.log("=========Token Helper: Can't decode token")
                resolve({ isValid: false });
            } else {
                const exp = new Date(decode.exp * 1000);
                const now = Date.now();
                if (exp < now) {
                    // console.log("=========Token Helper: Expired Token")
                    resolve({ isValid: false });
                } else {
                    // console.log("=========Token Helper: Token is valid")
                    resolve({ isValid: true, userInfo: decode });
                }
            }
        });
    });
};

module.exports = { generateToken, verifyToken };
