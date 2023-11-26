// Context.js
import React, {useState, useEffect, createContext} from "react";
import axios from "axios";

export const Context = createContext();
export function ContextProvider ({ children }) {
	const [listNameArr, setListsArr] = useState([]);
	const [subList, setSubList] = useState([]);
	useEffect (() => {
		async function fetchData () {
			const { data } = await axios.get("https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=6P7g1cNgyA4yxbQWfxkMkq3hZi8RXYZp")
			setListsArr(data.results.lists);
		}
		fetchData();
	}, [])
	
	return (
		<Context.Provider value={{ listNameArr, setListsArr, subList, setSubList }}>
			{children}
		</Context.Provider>
	);
};
