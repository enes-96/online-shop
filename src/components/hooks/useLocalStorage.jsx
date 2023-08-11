import { useState } from "react";

function useLocalStorage(key, initialValue) {
    const storedValue = localStorage.getItem(key);

    let initial;
    try {
        initial = storedValue !== null ? JSON.parse(storedValue) : initialValue;
    } catch (error) {
        initial = initialValue;
    }

    const [state, setState] = useState(initial);

    const setStoredState = newValue => {
        setState(newValue);
        localStorage.setItem(key, JSON.stringify(newValue));
    };

    return [state, setStoredState];
}

export default useLocalStorage;
