import React, {
	createContext,
	useEffect,
	useState,
} from "react";
import axios from "axios";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
	const [capsuleData, setCapsuleData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedId, setSelectedId] = useState(null);
	
	useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/capsules`, {
                    headers: {
                        // Authorization: `Bearer ${access}`,
                        "Content-Type": "application/json",
                    },
                });
    
                if (res.status === 200) {
                    setIsLoading(false);
                    console.log("Capsules: ", res.data);
                    setCapsuleData(res.data);
                } else {
                    setIsLoading(false);
                    console.log("Status code is not 200:", res.status);
                }
            } catch (error) {
                setIsLoading(false);
                console.log(">>>>>1 error occurred:", error);
            }
        };
		getData();
	}, []);

	return (
		<DataContext.Provider
			value={{
				capsuleData,
                selectedId, 
                setSelectedId,
				isLoading,
			}}
		>
			{children}
		</DataContext.Provider>
	);
};
