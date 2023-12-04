const express = require('express');
const router = express.Router();

const app = require('../../package.json');

router.get('/', (request, response) => {
	response.header('Content-Type', 'application/json');
	response.send(JSON.stringify({
		version: app.version
	}, null, 4));
});

module.exports = router;