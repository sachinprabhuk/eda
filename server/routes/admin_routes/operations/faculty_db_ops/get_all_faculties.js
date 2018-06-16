const { faculty } = require('../../../../schemas/collections');

// { token: '.......' }
module.exports = (req, res) => {
	faculty.find({}, req.body.fields.join(" "))
	.then(data => res.json({data: data, error: null}))
	.catch(err => res.json({data: null, error: "error while fetching data!!"}));
};