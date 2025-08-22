import { render, screen } from '@testing-library/react';
import RecommendationList from './RecommendationList';
import mockRecommendations from '../../mocks/mockRecommendations';

describe('RecommendationList', () => {
    test('Deve renderizar todos os produtos passados via props', () => {
        render(<RecommendationList recommendations={mockRecommendations} />);

        expect(screen.getByText('RD Mentor AI')).toBeInTheDocument();
        expect(screen.getByText('RD Station Marketing')).toBeInTheDocument();
    });

    test('Deve renderizar mensagem vazia se não houver produtos', () => {
        render(<RecommendationList recommendations={[]} />);
        expect(screen.getByText(/Nenhuma recomendação encontrada/i)).toBeInTheDocument();
    });
});
