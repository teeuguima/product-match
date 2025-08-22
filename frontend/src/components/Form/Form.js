// Form.js

import React, { useState } from 'react';
import { Preferences, Features, RecommendationType } from './Fields';
import { SubmitButton } from './SubmitButton';
import useProducts from '../../hooks/useProducts';
import useForm from '../../hooks/useForm';
import useRecommendations from '../../hooks/useRecommendations';
import { ResetFormButton } from './Fields/ResetFormButton';

function Form({ onSuccess }) {
  const { preferences, features, products } = useProducts();
  const [showFormClearFormButton, setShowFormClearButton] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const defaultValues = {
    selectedPreferences: [],
    selectedFeatures: [],
    selectedRecommendationType: '',
  };

  const { formData, handleChange, resetForm } = useForm(defaultValues);
  const { getRecommendations } = useRecommendations(products);

  const validateSchema = () => {
    const errors = {};

    if (formData.selectedPreferences.length === 0) {
      errors.selectedPreferences = "Selecione pelo menos uma preferência";
    }

    if (formData.selectedFeatures.length === 0) {
      errors.selectedFeatures = "Selecione pelo menos uma funcionalidade";
    }

    if (!formData.selectedRecommendationType) {
      errors.selectedRecommendationType = "Escolha um tipo de recomendação";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validateSubmitForm = validateSchema();

    if (Object.keys(validateSubmitForm).length > 0) {
      setErrors(validateSubmitForm);
      return;
    }

    setErrors({});

    setLoading(true);


    setTimeout(() => {
      const recommendations = getRecommendations(formData);
      onSuccess(recommendations);

      setLoading(false);
      setShowFormClearButton(true);
    }, 2000);
  };

  return (
    <form
      className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md"
      onSubmit={handleSubmit}
      onReset={() => {
        setShowFormClearButton(false);
        resetForm();
        onSuccess([]);
        setErrors({});
      }}
    >
      <div className="mb-4">
        <Preferences
          selectedPreferences={formData.selectedPreferences}
          preferences={preferences}
          onPreferenceChange={(selected) => {
            handleChange('selectedPreferences', selected);
          }}
        />
        {errors.selectedPreferences && (
          <p className="text-red-500 text-sm mt-1">
            {errors.selectedPreferences}
          </p>
        )}
      </div>

      <div className="mb-4">
        <Features
          selectedFeatures={formData.selectedFeatures}
          features={features}
          onFeatureChange={(selected) =>
            handleChange('selectedFeatures', selected)
          }
        />
        {errors.selectedFeatures && (
          <p className="text-red-500 text-sm mt-1">
            {errors.selectedFeatures}
          </p>
        )}
      </div>

      <div className="mb-4">
        <RecommendationType
          selectedRecommendationType={formData.selectedRecommendationType}
          onRecommendationTypeChange={(selected) => {
            handleChange('selectedRecommendationType', selected);
          }}
        />
        {errors.selectedRecommendationType && (
          <p className="text-red-500 text-sm mt-1">
            {errors.selectedRecommendationType}
          </p>
        )}
      </div>

      <p className="text-sm text-gray-500 mb-4">
        <sup className="text-red-500">*</sup> Campos obrigatórios
      </p>

      {showFormClearFormButton ? (
        <ResetFormButton text={"Nova recomendação"} />
      ) : (
        <SubmitButton text={"Obter recomendação"} loading={loading} disabled={loading} />
      )}
    </form>
  );
};

export default Form;
