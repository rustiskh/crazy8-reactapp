import { Link } from "react-router-dom";

const Breadcrumps: React.FC = () => {
	return (
		<ul className="breadcrump container">
			<li className="breadcrump__item">
				<Link to="/" className="breadcrump__link">
					Home
				</Link>
			</li>
			<li className="breadcrump__item">
				<Link to="/" className="breadcrump__link">
					Catalog
				</Link>
			</li>
		</ul>
	);
};

export default Breadcrumps;
