const express = require('express');
const router = express.Router();

const version = require('./version');

router.get('/', (request, response) => {
	response.header('Content-Type', 'application/json');
	response.send(JSON.stringify({
		message: 'Welcome to RESTful API',
		routers: {
			version: '/version'
		}
	}, null, 4));
});

router.use('/version', version);

module.exports = router;