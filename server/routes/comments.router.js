const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {rejectUnauthenticated} = require('../modules/authentication-middleware');

//GET route for image
router.get('/', rejectUnauthenticated, (req, res) => {
    const id = req.query.id
    pool.query(`SELECT * FROM "comments" 
    JOIN "user" on "user"."id" = "comments"."user_id"
    WHERE "brewery_id" = $1;`, [id])
        .then(results => res.send(results.rows))
        .catch(error => {
            console.log('Error GETTING shelf:', error);
            res.sendStatus(500);
    });
});

module.exports = router;