import { useEffect, useRef } from "react";
import Button from "./Button";
import { FaPlusSquare, FaEdit, FaEraser } from "react-icons/fa";

const Input = ({
	addEntity,
	editEntity,
	entities,
	resetSelectEntity,
	clearForm
}) => {
	const entityName = useRef("");
	const entityWorkforce = useRef("");
	const entityAffected = useRef("");

	const selectedValues = useRef({
		selectedName: "",
		selectedWorkforce: "",
		selectedAffected: ""
	});

	const selectedId = useRef(null);

	const inputNameRef = useRef();
	const inputWorkforceRef = useRef();
	const inputAffectedRef = useRef();

	useEffect(() => {
		let values = {
			selectedName: "",
			selectedWorkforce: "",
			selectedAffected: ""
		};
		for (let i = 0; i < entities.length; i++) {
			if (entities[i].isSelected) {
				values = {
					selectedName: entities[i].name,
					selectedWorkforce: entities[i].workforce,
					selectedAffected: entities[i].affected
				};
			}
		}
		selectedValues.current = values;
		inputNameRef.current.value = selectedValues.current.selectedName;
		inputWorkforceRef.current.value = selectedValues.current.selectedWorkforce;
		inputAffectedRef.current.value = selectedValues.current.selectedAffected;
	}, [entities]);

	const addClick = () => {
		resetSelectEntity();
		entityName.current = inputNameRef.current.value;
		entityWorkforce.current = inputWorkforceRef.current.value;
		entityAffected.current = inputAffectedRef.current.value;

		let threshold;
		let massDismissal;
		let socialPlan;
		let thresholdColor;
		let massDismissalColor;
		let socialPlanColor;
		let colYellow = "#fcff96";
		let colGreen = "#96ff98";
		let colRed = "#ffa896";
		let colGray = "#b5b5b5";

		// Check threshold?
		if (entityWorkforce.current < 21) {
			threshold = "N/A";
			thresholdColor = colGray;
		}
		if (entityWorkforce.current >= 21 && entityWorkforce.current <= 99) {
			threshold = 10;
			thresholdColor = colYellow;
		}
		if (entityWorkforce.current >= 100 && entityWorkforce.current <= 299) {
			threshold = Math.ceil((entityWorkforce.current / 100) * 10);
			thresholdColor = colYellow;
		}
		if (entityWorkforce.current >= 300) {
			threshold = 30;
			thresholdColor = colYellow;
		}

		// Check mass dismissal?
		if (entityAffected.current >= threshold) {
			massDismissal = "Yes";
			massDismissalColor = colRed;
		}
		if (entityAffected.current < threshold) {
			massDismissal = "No";
			massDismissalColor = colGreen;
		}
		if (threshold === "N/A") {
			massDismissal = "N/A";
			massDismissalColor = colGray;
		}

		//Check social plan?
		if (entityWorkforce.current < 250) {
			socialPlan = "N/A";
			socialPlanColor = colGray;
		}
		if (entityWorkforce.current >= 250 && entityAffected.current >= 30) {
			socialPlan = "Yes";
			socialPlanColor = colRed;
		}
		if (entityWorkforce.current >= 250 && entityAffected.current < 30) {
			socialPlan = "No";
			socialPlanColor = colGreen;
		}

		const newEntity = {
			id: Math.floor(Math.random() * 10000) + 1,
			name: entityName.current,
			workforce: entityWorkforce.current,
			affected: entityAffected.current,
			threshold: threshold,
			massDismissal: massDismissal,
			socialPlan: socialPlan,
			thresholdColor: thresholdColor,
			massDismissalColor: massDismissalColor,
			socialPlanColor: socialPlanColor,
			isSelected: false
		};
		addEntity(newEntity);
		inputNameRef.current.value = "";
		inputWorkforceRef.current.value = "";
		inputAffectedRef.current.value = "";
	};

	const editClick = () => {
		for (let i = 0; i < entities.length; i++) {
			if (entities[i].isSelected) {
				selectedId.current = entities[i].id;
			}
		}
		if (selectedId.current) {
			resetSelectEntity();
			entityName.current = inputNameRef.current.value;
			entityWorkforce.current = inputWorkforceRef.current.value;
			entityAffected.current = inputAffectedRef.current.value;

			let threshold;
			let massDismissal;
			let socialPlan;
			let thresholdColor;
			let massDismissalColor;
			let socialPlanColor;
			let colYellow = "#fcff96";
			let colGreen = "#96ff98";
			let colRed = "#ffa896";
			let colGray = "#b5b5b5";

			// Check threshold?
			if (entityWorkforce.current < 21) {
				threshold = "N/A";
				thresholdColor = colGray;
			}
			if (entityWorkforce.current >= 21 && entityWorkforce.current <= 99) {
				threshold = 10;
				thresholdColor = colYellow;
			}
			if (entityWorkforce.current >= 100 && entityWorkforce.current <= 299) {
				threshold = Math.ceil((entityWorkforce.current / 100) * 10);
				thresholdColor = colYellow;
			}
			if (entityWorkforce.current >= 300) {
				threshold = 30;
				thresholdColor = colYellow;
			}

			// Check mass dismissal?
			if (entityAffected.current >= threshold) {
				massDismissal = "Yes";
				massDismissalColor = colRed;
			}
			if (entityAffected.current < threshold) {
				massDismissal = "No";
				massDismissalColor = colGreen;
			}
			if (threshold === "N/A") {
				massDismissal = "N/A";
				massDismissalColor = colGray;
			}

			//Check social plan?
			if (entityWorkforce.current < 250) {
				socialPlan = "N/A";
				socialPlanColor = colGray;
			}
			if (entityWorkforce.current >= 250 && entityAffected.current >= 30) {
				socialPlan = "Yes";
				socialPlanColor = colRed;
			}
			if (entityWorkforce.current >= 250 && entityAffected.current < 30) {
				socialPlan = "No";
				socialPlanColor = colGreen;
			}

			const newEntity = {
				id: Math.floor(Math.random() * 10000) + 1,
				name: entityName.current,
				workforce: entityWorkforce.current,
				affected: entityAffected.current,
				threshold: threshold,
				massDismissal: massDismissal,
				socialPlan: socialPlan,
				thresholdColor: thresholdColor,
				massDismissalColor: massDismissalColor,
				socialPlanColor: socialPlanColor,
				isSelected: false
			};
			editEntity(selectedId.current, newEntity);
			inputNameRef.current.value = "";
			inputWorkforceRef.current.value = "";
			inputAffectedRef.current.value = "";
		}
	};

	const clearClick = () => {
		inputNameRef.current.value = "";
		inputWorkforceRef.current.value = "";
		inputAffectedRef.current.value = "";
		clearForm();
	};

	return (
		<div className="input">
			<form className="input-form">
				<div className="form-control">
					<label>Entity Name:</label>
					<input ref={inputNameRef} type="text" placeholder="Entity" />
				</div>
				<div className="form-control">
					<label>Total Workforce:</label>
					<input ref={inputWorkforceRef} type="text" placeholder="Workforce" />
				</div>
				<div className="form-control">
					<label>Affected Employees:</label>
					<input ref={inputAffectedRef} type="text" placeholder="Affected" />
				</div>
			</form>
			<div className="btn-row">
				<Button
					className="add-btn"
					icon={<FaPlusSquare />}
					handleClick={addClick}
					text="Add"
				/>
				<Button
					className="edit-btn"
					icon={<FaEdit />}
					handleClick={editClick}
					text="Edit"
				/>
				<Button
					className="clear-btn"
					icon={<FaEraser />}
					handleClick={clearClick}
					text="Clear"
				/>
			</div>
		</div>
	);
};

export default Input;
