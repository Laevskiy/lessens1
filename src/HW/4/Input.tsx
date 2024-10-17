type InputPropsType = {
	currentText: string // НУЖНО ПРОТИПИЗИРОВАТЬ
	setCurrentText: (a:string)=>void// НУЖНО ПРОТИПИЗИРОВАТЬ
};

export const Input = (props: InputPropsType) => {
	const onChangeHandler = (event: string) => {
		// НУЖНО ДОПИСАТЬ
		props.setCurrentText(event)
	};

	return (
		<input id={'hw04-input'} type="text" value={props.currentText} onChange={(e)=>onChangeHandler(e.target.value)} />
	);
};
