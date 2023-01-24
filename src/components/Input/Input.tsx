import React from "react";
import styles from './Input.module.css';

type Props = {
	label?: React.ReactNode;
	value: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	type?: string;
	name?: string;
	placeholder?: string;
	disabled?: boolean;
}

export default function Input({ label, value, onChange, type = 'text', name = '', placeholder = '', disabled = false }: Props) {
	return (
		<div className={`${styles.inputContainer} ${styles.solid}`}>
			{label && <label>{label}</label>}
			<input type={type} name={name} value={value} onChange={onChange} placeholder={placeholder} disabled={disabled} />
		</div>
	);
}