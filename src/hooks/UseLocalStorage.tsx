import { useEffect, useState } from "react";

const getSavedValue = (key: string, initialValue: any) => {
    const data=localStorage.getItem(key);
    const savedValue =data ? JSON.parse(data) :null;

    if (savedValue) {
        return savedValue;
    }
    if (initialValue instanceof Function) {
        return initialValue();
    }
    return initialValue;
}

function useLocalStorage(key: string, initialValue: any) {
    const [value, setValue] = useState<string>(() => {
        return getSavedValue(key, initialValue);
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value]);

}

export default useLocalStorage