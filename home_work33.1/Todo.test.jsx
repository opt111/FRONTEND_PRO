import '@testing-library/jest-dom/vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import Todo from './Todo';

beforeEach(() => {
	localStorage.clear();
});

describe('TODO', () => {
	it('показує заголовок TODO', () => {
		render(<Todo />);

		expect(screen.getByRole('heading', { name: 'TODO' })).toBeInTheDocument();
	});

	it('дозволяє вводити літери та цифри', () => {
		render(<Todo />);
		const input = screen.getByLabelText('Текст завдання');

		fireEvent.change(input, { target: { value: 'Завдання 123' } });

		expect(input).toHaveValue('Завдання 123');
	});

	it('не додає завдання без тексту', () => {
		render(<Todo />);

		fireEvent.click(screen.getByRole('button', { name: 'Додати' }));

		expect(screen.getByText('Список порожній')).toBeInTheDocument();
		expect(screen.getByText('Усього завдань: 0')).toBeInTheDocument();
	});

	it('додає завдання та очищає поле', () => {
		render(<Todo />);
		const input = screen.getByLabelText('Текст завдання');

		fireEvent.change(input, { target: { value: 'Нова задача' } });
		fireEvent.click(screen.getByRole('button', { name: 'Додати' }));

		expect(screen.getByText('Нова задача')).toBeInTheDocument();
		expect(input).toHaveValue('');
		expect(screen.getByText('Усього завдань: 1')).toBeInTheDocument();
	});

	it('позначає завдання виконаним', () => {
		render(<Todo />);
		fireEvent.change(screen.getByLabelText('Текст завдання'), {
			target: { value: 'Виконати тест' },
		});
		fireEvent.click(screen.getByRole('button', { name: 'Додати' }));

		const checkbox = screen.getByRole('checkbox', {
			name: 'Виконано: Виконати тест',
		});
		fireEvent.click(checkbox);

		expect(checkbox).toBeChecked();
	});

	it('видаляє завдання', () => {
		render(<Todo />);
		fireEvent.change(screen.getByLabelText('Текст завдання'), {
			target: { value: 'Видалити це завдання' },
		});
		fireEvent.click(screen.getByRole('button', { name: 'Додати' }));
		fireEvent.click(screen.getByRole('button', { name: 'Видалити' }));

		expect(screen.queryByText('Видалити це завдання')).not.toBeInTheDocument();
		expect(screen.getByText('Список порожній')).toBeInTheDocument();
	});
});
