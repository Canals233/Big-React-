import { createContext, useState, useEffect } from "react";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.js";

export const CategoriesContext = createContext({
    categories: {},
});

export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({});

    useEffect(()=>{
        const getData=async ()=>{
            const categoryMap=await getCategoriesAndDocuments()
            // console.log(categoryMap)
            setCategoriesMap(categoryMap)
        }
        getData()
    },[])

    const value = {
        categoriesMap,
    };
    useEffect(() => {}, []);
    return (
        <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>
    );
};
