import React from "react";
import "./scss/main.scss";

import Header from "./components/global/Header";
import Footer from "./components/global/Footer";
import Breadcrumps from "./components/global/Breadcrumps";
import MailForm from "./components/global/MailForm";
import Catalog from "./pages/Catalog";
import NotFound from "./pages/NotFound";
import Product from "./pages/Product";

import { Route, Routes, useLocation } from "react-router-dom";
import Cart from "./pages/Cart";
import LandingPage from "./pages/LandingPage";

function App() {
	const { pathname } = useLocation();

	return (
		<div className="App">
			<Header />
			{pathname !== "/" && <Breadcrumps />}
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/catalog" element={<Catalog />} />
				<Route path="*" element={<NotFound />} />
				<Route path="cart" element={<Cart />} />
				<Route path="/product/:title" element={<Product />} />
			</Routes>
			<MailForm />
			<Footer />
		</div>
	);
}

export default App;
