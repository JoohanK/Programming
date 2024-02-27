const DropDown = () => {
	/**
        Alla events skickar ett object som jag nedan kallar e
        Detta objekt e innehåller en massa data om eventet
        Titta i konsollen på hur e ser ut!
     */
	const handleChange = (e) => {
		console.log(e);
	};

	return (
		<select onChange={handleChange}>
			<option value="svar-a">A</option>
			<option value="svar-b">B</option>
			<option value="svar-c">C</option>
		</select>
	);
};

export default DropDown;
