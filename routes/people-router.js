const express = require('express')
const router = express.Router()
const peopleCtrl = require('../controllers/people-controller')

router.get("/", peopleCtrl.index);

router.post("/", peopleCtrl.create)


// PEOPLE SHOW ROUTE
router.get("/:id", peopleCtrl.getOne);

// PEOPLE DELETE ROUTE
router.delete("/:id", peopleCtrl.delete);

// PEOPLE UPDATE ROUTE
router.put("/:id", peopleCtrl.update);

module.exports = router

