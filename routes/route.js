const express = require("express");
const router = express.Router();

// auth routes
const { register, login } = require("../controllers/auth");
const { checkAuthorizationHeaders, authorizeUser } = require("../middlewares/authenticate");


router.post("/register", register);
router.post("/login", checkAuthorizationHeaders, login);

    
// schema1 routes
const { createSchema1, updateSchema1, deleteSchema1, getSchema1, getAllSchema1 } = require('../controllers/schema1');
// 
router.post("/schema1/create", checkAuthorizationHeaders,authorizeUser("createschema1") ,createSchema1);
router.put("/schema1/update/:id", checkAuthorizationHeaders,authorizeUser("updateschema1"), updateSchema1);
router.delete("/schema1/delete/:id", checkAuthorizationHeaders, authorizeUser("deleteschema1"), deleteSchema1);
router.get("/schema1/get/:id", checkAuthorizationHeaders, authorizeUser("readschema1"), getSchema1);
router.get("/schema1/getAll", checkAuthorizationHeaders, authorizeUser("readschema1"), getAllSchema1);

  
module.exports = router;
