import React from "react";
import styles from "../../styles/Main.module.css";
import pageStyles from "./MainPage.module.css";
import Button from "../shared/Button";
import Link from "next/link"
import { routes } from "../../configs/constants/Routes";

const MainPage = () => {
	const buttonStyles = { width: "250px", height: "60px", margin: "20px 0", color: "white" }
	return (
		<div className={`${styles.container} ${pageStyles.page}`}>
			<Link href={routes.REGISTEr_USER}><Button type="primary" styles={buttonStyles}>{"Register User"}</Button></Link>
			<Button type="primary" styles={buttonStyles}>{"Token numbers"}</Button>
			<Button type="primary" styles={buttonStyles}>{"Current Token"}</Button>
		</div>
	)
}

export default MainPage;