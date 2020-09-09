const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Le serveur est allumé et fonctionne");
});

module.exports = router;