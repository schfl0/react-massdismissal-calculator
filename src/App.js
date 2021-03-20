import { useState } from "react";
import Header from "./components/Header";
import Results from "./components/Results";
import Input from "./components/Input";

function App() {
	const [entities, setEntities] = useState([]);

	const addEntity = (entity) => {
		setEntities((entities) => [...entities, entity]);
	};
	const editEntity = (id, newEntity) => {
		setEntities(
			entities.map((entity) =>
				entity.id === id ? (entity = newEntity) : { ...entity }
			)
		);
	};

	const deleteEntity = (id) => {
		setEntities(entities.filter((entity) => entity.id !== id));
	};

	const selectEntity = (id) => {
		setEntities(
			entities.map((entity) =>
				entity.id === id
					? { ...entity, isSelected: !entity.isSelected }
					: { ...entity, isSelected: false }
			)
		);
	};

	const clearForm = () => {
		setEntities(
			entities.map((entity) => (entity = { ...entity, isSelected: false }))
		);
	};

	const resetSelectEntity = () => {
		for (let i = 0; i < entities.length; i++) {
			entities[i].isSelected = false;
		}
	};
	return (
		<div className="App">
			<Header />
			<Results
				entities={entities}
				deleteEntity={deleteEntity}
				selectEntity={selectEntity}
			/>
			<Input
				entities={entities}
				addEntity={addEntity}
				resetSelectEntity={resetSelectEntity}
				editEntity={editEntity}
				clearForm={clearForm}
			/>
		</div>
	);
}

export default App;
