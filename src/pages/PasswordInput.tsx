import {useState} from "react";
import PasswordInputComponent from '../components/PasswordInput/PasswordInput';

export default function PasswordInput() {
	const [password, setPassword] = useState('');
	return (
		<div className="page">
			<h3>Password Input</h3>
			<PasswordInputComponent placeholder="비밀번호 입력" value={password} onChange={({target}) => setPassword(target.value)} />
		</div>
	);
}