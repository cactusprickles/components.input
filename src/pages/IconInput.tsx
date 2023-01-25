import React, {useState} from 'react';
import {FaLock, FaUser} from "react-icons/fa";
import IconInputComponent from "../components/IconInput/IconInput";

export default function IconInput() {
	const [input, setInput] = useState('');
	const [password, setPassword] = useState('');
	return (
		<div className="page">
			<h3>Icon Input</h3>
			<IconInputComponent label={<FaUser />} placeholder="아이디" value={input} onChange={(event) => setInput(event.target.value)} />
			<IconInputComponent label={<FaLock />} placeholder="비밀번호" type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
		</div>
	);
}