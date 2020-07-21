import React, { useState, FormEvent, ChangeEvent } from 'react';

interface AddTodoFormProps {
	addTodo: AddTodo;
}

const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo }) => {
	const [newTodo, setNewTodo] = useState('');
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setNewTodo(e.target.value);
	};
	const handleSumbit = (e: FormEvent<HTMLButtonElement>) => {
		e.preventDefault();
		addTodo(newTodo);
		setNewTodo('');
	};
	return (
		<form>
			<input type='text' value={newTodo} onChange={handleChange} />
			<button type='submit' onClick={handleSumbit}>
				Add Todo
			</button>
		</form>
	);
};

export default AddTodoForm;
