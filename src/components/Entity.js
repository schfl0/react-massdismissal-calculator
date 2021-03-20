import { FaTimesCircle } from "react-icons/fa";

const Entity = ({ entity, deleteEntity, selectEntity }) => {
	return (
		<div className="entity-container">
			<div
				className={`entity ${entity.isSelected ? `selected` : ``}`}
				onClick={() => selectEntity(entity.id)}
			>
				<div className="entity-input">
					<p style={{ fontWeight: "bold" }}>{entity.name}</p>
					<p>Workforce: {entity.workforce}</p>
					<p>Affected: {entity.affected}</p>
				</div>
				<div
					className="entity-threshold entity-result"
					style={{ backgroundColor: entity.thresholdColor }}
				>
					<p>Threshold:</p>
					<p>{entity.threshold}</p>
				</div>
				<div
					className="entity-massdismissal entity-result"
					style={{ backgroundColor: entity.massDismissalColor }}
				>
					<p>Mass Dismissal:</p>
					<p>{entity.massDismissal}</p>
				</div>
				<div
					className="entity-socialplan entity-result"
					style={{ backgroundColor: entity.socialPlanColor }}
				>
					<p>Social Plan:</p>
					<p>{entity.socialPlan}</p>
				</div>
			</div>
			<FaTimesCircle
				onClick={() => deleteEntity(entity.id)}
				style={{ color: "red", cursor: "pointer" }}
			/>
		</div>
	);
};

export default Entity;
