module.exports = {
  extends: 'lighthouse:default',
  settings: {
    onlyCategories: ['performance'],
    onlyAudits: ['first-meaningful-paint','speed-index-metric'],
	output: 'json'
  }
} 