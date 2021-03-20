import Entity from "./Entity.js";

const Results = ({ entities, deleteEntity, selectEntity }) => {
	return (
		<div className="results">
			<h2>Results</h2>
			{entities.map((entity, index) => (
				<Entity
					entity={entity}
					key={index}
					deleteEntity={deleteEntity}
					selectEntity={selectEntity}
				/>
			))}
		</div>
	);
};

export default Results;
