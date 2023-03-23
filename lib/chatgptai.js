const config = require('../config.js')
const axios = require('axios')
const API_KEY = config.OPENAI_API_KEY
//'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'
async function krizaigpt(prompt) {
	const response = await axios({
		method: 'post',
		url: 'https://api.openai.com/v1/engines/text-davinci-003/completions',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${API_KEY}`,
		},
		data: {
			prompt: prompt,
			max_tokens: 1024,
			n: 1,
			stop: null,
			temperature: 0.5,
		},
	})

	return response.data.choices[0].text
}

module.exports = {
krizaigpt
}
