import MainLayout from "../../layouts/MainLayout";
import Head from "next/head";
import RegisterUser from "../../components/register-user/RegisterUser";

const UserRegister = () => {
	return (
		<MainLayout>
			<Head>
				<title>Register User</title>
			</Head>
			<RegisterUser />
		</MainLayout>
	)
}

export default UserRegister;