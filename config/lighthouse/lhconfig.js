module.exports = {
  extends: 'lighthouse:default',
  settings: {
    onlyCategories: ['accessibility'],
    onlyAudits: ['first-meaningful-paint','speed-index-metric'],
  }
} 