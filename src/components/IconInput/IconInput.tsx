import React from "react";
import {v4 as uuid} from "uuid";
import styles from './IconInput.module.css';

export type InputType = {
	label?: React.ReactNode;
	value: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	type?: string;
	name?: string;
	placeholder?: string;
	disabled?: boolean;
}

type Props = InputType;

export default function IconInput({ label, value, onChange, type = 'text', name = '', placeholder = '', disabled = false }: Props) {
	const id = uuid();
	return (
		<div className={`${styles.inputContainer} ${styles.solid}`}>
			{label && <label htmlFor={id}>{label}</label>}
			<input id={id} type={type} name={name} value={value} onChange={onChange} placeholder={placeholder} disabled={disabled} />
		</div>
	);
}