module.exports = {
  extends: 'lighthouse:default',
  settings: {
    onlyCategories: ['seo', 'performance', 'accessibility', 'best-practices'],
    onlyAudits: ['first-meaningful-paint','speed-index-metric']}
} 