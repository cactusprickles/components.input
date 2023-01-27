import React, {useState} from 'react';
import SelectInputComponent from '../components/SelectInput/SelectInput';

const options = [
	'딸기',
	'망고',
	'귤',
	'파인애플',
	'사과'
];

export default function SelectInput() {
	const [input, setInput] = useState('');
	return (
		<div className="page">
			<h3>Select Input</h3>
			<SelectInputComponent title="과일" options={options} value={input} changeOption={setInput} onChange={() => {}} />
		</div>
	);
}