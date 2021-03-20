const Button = ({ icon, text, handleClick, className }) => {
	return (
		<button
			onClick={handleClick}
			className={`btn ${className}`}
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center"
			}}
		>
			{icon}
			&nbsp;{text}
		</button>
	);
};

export default Button;
