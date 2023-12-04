function notFound(request, response, next) {
	response.status(404);

	const error = new Error('Not found');
	next(error);
}

function errorHandler(error, request, response, next) {
	const statusCode = response.statusCode !== 200 ? response.statusCode : 500;

	response.status(statusCode);
	response.header('Content-Type', 'application/json');
	response.send(JSON.stringify({
		message: error.message
	}, null, 4));
}

module.exports = {
	notFound,
	errorHandler
}