import { useRef } from "react";

const Form = ({
	entityName,
	inputName,
	entityWorkforce,
	inputWorkforce,
	entityAffected,
	inputAffected
}) => {
	const inputNameRef = useRef();
	const inputWorkforceRef = useRef();
	const inputAffectedRef = useRef();

	return (
		<form className="input-form">
			<div className="form-control">
				<label>Entity:</label>
				<input defaultValue="Entity name" ref={inputNameRef} type="text" />
			</div>
			<div className="form-control">
				<label>Workforce:</label>
				<input
					ref={inputWorkforceRef}
					value={entityWorkforce}
					onChange={(e) => inputWorkforce(e.target.value)}
					type="text"
					placeholder="Total workforce"
				/>
			</div>
			<div className="form-control">
				<label>Affected:</label>
				<input
					ref={inputAffectedRef}
					value={entityAffected}
					onChange={(e) => inputAffected(e.target.value)}
					type="text"
					placeholder="Affected employees"
				/>
			</div>
		</form>
	);
};

export default Form;
