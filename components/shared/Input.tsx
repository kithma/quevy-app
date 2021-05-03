import React from "react";

interface Props {
	inputRef?: any
	inputType?: string
	name: string
	placeholder: string
	label: string
	onChange?: any
	disabled?: boolean
	value?: string
}

const Input = ({ inputRef, inputType, name, placeholder, onChange, disabled, value, label }: Props) => {
	return (
		<div>
			{label && <label htmlFor={name}>{label}</label>}

			<input
				ref={inputRef}
				type={inputType || "text"}
				name={name}
				id={name}
				placeholder={placeholder}
				onChange={onChange}
				disabled={disabled}
				value={value}
			/>
		</div>
	)
}

export default Input