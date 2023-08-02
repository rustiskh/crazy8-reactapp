import React from "react";
import "./scss/main.scss";

import Header from "./components/global/Header";
import Footer from "./components/global/Footer";
import Breadcrumps from "./components/global/Breadcrumps";
import MailForm from "./components/global/MailForm";
import Catalog from "./pages/Catalog";
import NotFound from "./pages/NotFound";
import Product from "./pages/Product";

import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import MainLanding from "./pages/MainLanding";

function App() {
	return (
		<div className="App">
			<Header />
			<Breadcrumps />
			<Routes>
				<Route path="/" element={<MainLanding />} />
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
