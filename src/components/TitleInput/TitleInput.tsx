import { v4 as uuid } from 'uuid';
import {InputType} from '../IconInput/IconInput';
import styles from './TitleInput.module.css';

type Props = InputType & {
	title: string
}

export default function TitleInput({ title, value, onChange, type = 'text', name = '', placeholder = ' ', disabled = false }: Props) {
	const id = uuid();
	return (
		<div className={`${styles.titleInputContainer} ${styles.solid}`}>
			<label htmlFor={id}>{title}</label>
			<input id={id} type={type} name={name} value={value} onChange={onChange} placeholder={placeholder} disabled={disabled} />
		</div>
	);
}