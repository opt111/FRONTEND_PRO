import React, { useState } from 'react';

const storageKey = 'resume-todos';

function readTasks() {
	return JSON.parse(localStorage.getItem(storageKey) || '[]');
}

export default function Todo() {
	const [tasks, setTasks] = useState(readTasks);
	const [text, setText] = useState('');

	const saveTasks = (nextTasks) => {
		setTasks(nextTasks);
		localStorage.setItem(storageKey, JSON.stringify(nextTasks));
	};

	const addTask = (event) => {
		event.preventDefault();

		if (!text.trim()) {
			return;
		}

		saveTasks([
			...tasks,
			{ id: Date.now(), text: text.trim(), done: false },
		]);
		setText('');
	};

	const toggleTask = (taskId) => {
		saveTasks(tasks.map((task) => (
			task.id === taskId ? { ...task, done: !task.done } : task
		)));
	};

	const removeTask = (taskId) => {
		saveTasks(tasks.filter((task) => task.id !== taskId));
	};

	return (
		<main>
			<h1>TODO</h1>
			<form onSubmit={addTask}>
				<label htmlFor="task">Текст завдання</label>
				<input
					id="task"
					value={text}
					onChange={(event) => setText(event.target.value)}
				/>
				<button type="submit">Додати</button>
			</form>

			{tasks.length === 0 && <p>Список порожній</p>}

			<ul>
				{tasks.map((task) => (
					<li key={task.id}>
						<input
							type="checkbox"
							checked={task.done}
							aria-label={`Виконано: ${task.text}`}
							onChange={() => toggleTask(task.id)}
						/>
						<span>{task.text}</span>
						<button type="button" onClick={() => removeTask(task.id)}>
							Видалити
						</button>
					</li>
				))}
			</ul>

			<p>Усього завдань: {tasks.length}</p>
		</main>
	);
}
