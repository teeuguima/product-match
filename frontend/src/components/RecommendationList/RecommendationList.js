import React from 'react';

function RecommendationList({ recommendations }) {
  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Lista de Recomendações:</h2>

      {recommendations?.length === 0 && <p>Nenhuma recomendação encontrada.</p>}


      <ul>
        {recommendations?.map((recommendation, index) => (
          <li key={index} className="mb-2">
            <p className="font-semibold">{recommendation.name}</p>

            {recommendation.features?.length > 0 && (
              <ul className="list-disc list-inside ml-4 text-sm text-gray-700">
                {recommendation.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            )}

          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecommendationList;
