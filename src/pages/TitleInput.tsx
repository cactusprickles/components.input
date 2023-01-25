import {useState} from "react";
import TitleInputComponent from "../components/TitleInput/TitleInput";

export default function TitleInput() {
	const [input, setInput] = useState('');
	const [password, setPassword] = useState('');
	return (
		<div className="page">
			<h3>Title Input</h3>
			<TitleInputComponent title="이메일 또는 휴대전화" value={input} onChange={(event) => setInput(event.target.value)} />
			<TitleInputComponent title="비밀번호 입력" type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
		</div>
	);
}