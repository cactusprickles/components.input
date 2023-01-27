import React from 'react';
import {InputType} from "../IconInput/IconInput";
import TitleInput from "../TitleInput/TitleInput";
import styles from './SelectInput.module.css';

type Props = InputType & {
	title: string;
	options?: string[];
	changeOption: (option: string) => void
}

export default function SelectInput({ title, value, changeOption, onChange, type = 'text', name = '', placeholder = ' ', disabled = false, options = [] }: Props) {
	const handleChangeOption = (option: string) => {
		changeOption(option);
	}
	return (
		<div className={styles.listInputContainer}>
			<TitleInput title={value ? title : '선택해주세요'} type={type} name={name} value={value} onChange={onChange} placeholder={placeholder} disabled={disabled} />
			{
				options && <ul>
					<li className={styles.title}>{title}</li>
					{
						options.map((option, index) => <li key={index} onClick={() => handleChangeOption(option)}>{option}</li>)
					}
				</ul>
			}
		</div>
	);
}