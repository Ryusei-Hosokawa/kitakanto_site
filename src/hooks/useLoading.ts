import { useState, useCallback } from "react";

export const useLoading = <P extends unknown[], R>(
    fn: (...args: P) => Promise<R>
) => {
    const [state, setState] = useState<
        { loading: true } | { loading: false; data: R }
    >({ loading: true });
    const call = useCallback(
        async (...args: P) => {
            setState({ loading: true });
            const data = await fn(...args);
            setState({ loading: false, data });
        },
        [fn]
    );
    return { state, call };
};
