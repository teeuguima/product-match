import React from 'react';
import Checkbox from '../../shared/Checkbox';
import { RECOMMENDATION_TYPE } from '../../../services/recommendation/types';


function RecommendationType({ onRecommendationTypeChange, selectedRecommendationType }) {
  return (
    <div className="mb-4">
      <h2 className="text-lg font-bold mb-2">Tipo de Recomendação<sup className="text-red-500">*</sup>:</h2>
      <div className="flex items-center">
        <Checkbox
          type="radio"
          name="recommendationType"
          value={RECOMMENDATION_TYPE.singleProduct}
          checked={selectedRecommendationType === RECOMMENDATION_TYPE.singleProduct}
          onChange={() => onRecommendationTypeChange(RECOMMENDATION_TYPE.singleProduct)}
          className="mr-2"
        />
        <label htmlFor="SingleProduct" className="mr-4">Produto Único</label>

        <Checkbox
          type="radio"
          name="recommendationType"
          value={RECOMMENDATION_TYPE.multipleProduct}
          checked={selectedRecommendationType === RECOMMENDATION_TYPE.multipleProduct}
          onChange={() => onRecommendationTypeChange(RECOMMENDATION_TYPE.multipleProduct)}
          className="mr-2"
        />
        <label htmlFor="MultipleProducts">Múltiplos Produtos</label>

      </div>
    </div>
  );
}

export default RecommendationType;
