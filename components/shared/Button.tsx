import React from "react";
import sharedStyles from "./Shared.module.css";

type ButtonType = "primary" | "secondary"

interface Props {
	children?: React.ReactNode;
	type: ButtonType;
	onClick?: any;
	width?: string;
	height?: string;
	styles?: any
}

const getButtonClass = (type: string) => {
	switch (type) {
		case "primary":
			return sharedStyles.primary;
		case "secodary":
			return sharedStyles.scondary
	}
}

const Button = ({ children, type, onClick, styles }: Props) => {
	return (
		<div>
			<button
				onClick={onClick}
				className={`${getButtonClass(type)} ${sharedStyles.button}`}
				style={styles}
			>
				{children}
			</button>
		</div>
	)
}

export default Button;