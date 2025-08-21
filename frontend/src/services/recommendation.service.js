// getRecommendations.js

const getRecommendations = (
  formData = { selectedPreferences: [], selectedFeatures: [], selectedRecommendationType: '' },
  products,
) => {
  /**
   * Crie aqui a lógica para retornar os produtos recomendados.
   */

  let rankedProducts = products.map(product => {
    let score = 0

    formData.selectedPreferences.forEach(pref => {
      if (product.preferences.includes(pref)) {
        score++
      }
    })

    formData.selectedFeatures.forEach(feat => {
      if (product.preferences.includes(feat)) {
        score++
      }
    })

    return { product, score }
  })

  if (formData.selectedRecommendationType === 'SingleProduct') {
    let recommendation = rankedProducts.reduce((accumulate, product) => {
      if (!accumulate) return product

      if (product.score > accumulate.score) {
        return product
      }

      if (product.score === accumulate.score) {
        return product
      }

      return accumulate;
    })
    return recommendation
  }

  else if (formData.selectedRecommendationType === 'MultipleProducts') {
    let recommendation = rankedProducts.filter((product => product.score > 0)).sort((a, b) => b.score - a.score)
    return recommendation
  }


};

export default { getRecommendations };
