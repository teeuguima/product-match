// getRecommendations.js

import { RECOMMENDATION_TYPE } from "./types";

const rankingScore = (product, selectedPreferences, selectedFeatures) => {
  let score = 0;

  selectedPreferences.forEach((pref) => {
    if (product.preferences?.includes(pref)) score++;
  });

  selectedFeatures.forEach((feat) => {
    if (product.features?.includes(feat)) score++;
  });

  return score;
};

const getRecommendations = (
  formData,
  products,
) => {
  /**
   * Crie aqui a lógica para retornar os produtos recomendados.
   */

  const { selectedPreferences = [], selectedFeatures = [], selectedRecommendationType = '' } = formData;

  let rankedProducts = products.map((product) => ({
    ...product,
    score: rankingScore(product, selectedPreferences, selectedFeatures),
  }));

  let recommendation = null;

  switch (selectedRecommendationType) {
    case RECOMMENDATION_TYPE.singleProduct: {
      recommendation = rankedProducts.reduce((best, current) => {
        if (!best) return current;

        if (current.score > best.score) {
          return current;
        }

        if (current.score === best.score) {
          return current;
        }

        return best;
      })
      return [recommendation];
    }

    case RECOMMENDATION_TYPE.multipleProduct: {
      recommendation = rankedProducts.filter((product => product.score > 0)).sort((a, b) => b.score - a.score)
      return recommendation;
    }
    default:
      return [];
  };
};

export default { getRecommendations };
