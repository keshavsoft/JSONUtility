let express = require("express");
let router = express.Router();

// let CommonMiddlewareJwtVerify = require("../../common/Jwt/Bs5");
let CommonMiddlewareJwtVerify = require("../../common/Jwt/ForLogin/UserCredentials");

let CommonUtility = require("./Routes/Utility")

router.use("/Utility",CommonMiddlewareJwtVerify.ForKeshavSoftRedirectToLogin, CommonUtility);

module.exports = router;