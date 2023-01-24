import React, {useState} from 'react';
import Input from "../components/Input/Input";
import {FaLock, FaUser} from "react-icons/fa";

export default function DefaultInput() {
	const [input, setInput] = useState('');
	const [password, setPassword] = useState('');
	return (
		<div className="page">
			<h3>기본 (로그인)</h3>
			<Input label={<FaUser />} placeholder="아이디" value={input} onChange={(event) => setInput(event.target.value)} />
			<Input label={<FaLock />} placeholder="비밀번호" type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
		</div>
	);
}