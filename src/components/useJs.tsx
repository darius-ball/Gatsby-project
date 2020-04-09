import { useEffect, useState } from 'react';

export default function useJs() {
    const [jsLoaded, setJsLoaded] = useState(false);

    useEffect(() => {
        setJsLoaded(true);
    }, []);

    return jsLoaded;
}
