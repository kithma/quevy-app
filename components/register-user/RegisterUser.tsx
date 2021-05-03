import React from "react";
import Input from "../shared/Input";
import { useForm } from "react-hook-form";


const UserRegister = () => {

	const { register, handleSubmit } = useForm({
		defaultValues: undefined,
		mode: "onBlur",
	});

	return (
		<div>
			<Input
				{...register('name', { required: true })}
				placeholder="Kithma"
				label="Name"
			/>

		</div>
	)
}

export default UserRegister