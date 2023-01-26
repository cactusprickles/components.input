import React, {useState} from 'react';
import {v4 as uuid} from "uuid";
import {FaEye, FaEyeSlash} from "react-icons/fa";
import {InputType} from "../IconInput/IconInput";
import styles from "./PasswordInput.module.css";

type Props = InputType;

export default function PasswordInput({ value, onChange, name = '', placeholder = '', disabled = false }: Props) {
	const id = uuid();
	const [type, setType] = useState('password');
	return (
		<div className={`${styles.passwordInputContainer} ${styles.solid}`}>
			<input id={id} type={type} name={name} value={value} onChange={onChange} placeholder={placeholder} disabled={disabled} />
			<span>
				{ type === 'password' ? <FaEye onClick={() => setType('text')} /> : <FaEyeSlash onClick={() => setType('password')} /> }
			</span>
		</div>
	);
}