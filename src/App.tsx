import Input from "./components/Input/Input";
import {useState} from "react";
import {FaLock, FaUser} from "react-icons/fa";

export default function App() {
	const [input, setInput] = useState('');
	const [password, setPassword] = useState('');
	return (
		<div>
			<Input label={<FaUser />} placeholder="아이디" value={input} onChange={(event) => setInput(event.target.value)} />
			<Input label={<FaLock />} placeholder="비밀번호" type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
		</div>
	);
}
