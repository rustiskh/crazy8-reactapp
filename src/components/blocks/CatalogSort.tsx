import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectorSort, setSort } from "../../redux/slices/filterSlice";

export const list = [
	{
		name: "Price: Low to high",
		sortProperty: "price&_order=asc",
	},
	{
		name: "Price: High to low",
		sortProperty: "price&_order=desc",
	},
];

type SortItem = {
	name: string;
	sortProperty: string;
};

type PopupClick = MouseEvent & { path: Node[] };

const CatalogSort = () => {
	// Sorting with Redux-toolkit
	const dispatch = useDispatch();
	const sort = useSelector(selectorSort);
	const [open, setOpen] = React.useState(false);

	const onClickListItem = (obj: SortItem) => {
		dispatch(setSort(obj));
		setOpen(false);
	};

	const catalogSort = React.useRef<HTMLDivElement>(null);

	React.useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			const _event = event as PopupClick;
			const clickPath = _event.path || _event.composedPath();

			if (catalogSort.current && !clickPath.includes(catalogSort.current)) {
				setOpen(false);
			}
		};
		document.body.addEventListener("click", handleClickOutside);

		// удаляем обработчик события, если компонент исчезает
		return () => {
			document.body.removeEventListener("click", handleClickOutside);
		};
	}, []);

	return (
		<div ref={catalogSort} className="sort">
			<div className="sort__label">
				<p>Sort by:</p>
				<span onClick={() => setOpen(!open)}> {sort.sortFilter.name} </span>
				<div onClick={() => setOpen(!open)} className="sort__icon icon-shadow icon-32px">
					<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M3.33301 3.33301H25.9997V25.9997H3.33301V3.33301Z" fill="#4EFF9F" />
						<path fillRule="evenodd" clipRule="evenodd" d="M2.66602 3.33268C2.66602 2.96449 2.96449 2.66602 3.33268 2.66602H25.9993C26.3675 2.66602 26.666 2.96449 26.666 3.33268V25.9993C26.666 26.3675 26.3675 26.666 25.9993 26.666H3.33268C2.96449 26.666 2.66602 26.3675 2.66602 25.9993V3.33268ZM3.99935 3.99935V25.3327H25.3327V3.99935H3.99935Z" fill="black" />
						<path d="M10.3327 21.3333V16H7.66602V21.3333H10.3327Z" fill="black" />
						<path fillRule="evenodd" clipRule="evenodd" d="M6.99902 15.333H10.999V21.9997H6.99902V15.333ZM8.33236 16.6663V20.6663H9.66569V16.6663H8.33236Z" fill="black" />
						<path d="M15.6657 21.333V13.333H12.999V21.333H15.6657Z" fill="black" />
						<path fillRule="evenodd" clipRule="evenodd" d="M12.332 12.666H16.332V21.9993H12.332V12.666ZM13.6654 13.9993V20.666H14.9987V13.9993H13.6654Z" fill="black" />
						<path d="M21.332 21.3333V8H18.332V21.3333H21.332Z" fill="black" />
						<path fillRule="evenodd" clipRule="evenodd" d="M17.666 7.33301H21.9993V21.9997H17.666V7.33301ZM18.9993 8.66634V20.6663H20.666V8.66634H18.9993Z" fill="black" />
					</svg>
				</div>
			</div>
			{open && (
				<div className="sort__popup">
					<ul>
						{list.map((obj) => (
							<li key={obj.name} onClick={() => onClickListItem(obj)} className={sort.sortProperty === obj.sortProperty ? "active" : ""}>
								{obj.name}
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
};

export default CatalogSort;
