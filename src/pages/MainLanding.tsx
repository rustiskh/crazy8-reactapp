import React from "react";
import { Link } from "react-router-dom";

const MainLanding: React.FC = () => {
	return (
		<>
			<Link to="/catalog">Каталог</Link>
			<Link to="/cart">Корзина</Link>
			<Link to="*">404</Link>
		</>
	);
};

export default MainLanding;
