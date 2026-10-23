import { useEffect, useState } from "react";

import { getErrorMessage } from "@/lib/utils";

export type Photo = {
    id: string;
    url: string;
    author: string;
    width: number;
    height: number;
    download_url: string;
};

export function useFetchPhotos() {
    const [photos, setPhotos] = useState<Photo[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPhotos = async () => {
            try {
                setLoading(true);
                const response = await fetch("https://picsum.photos/v2/list?limit=30");
                if (!response.ok) {
                    throw new Error("Failed to fetch photos from API");
                }
                const data = (await response.json()) as Photo[];
                setPhotos(data);
            } catch (err) {
                setError(getErrorMessage(err));
            } finally {
                setLoading(false);
            }
        };

        fetchPhotos();
    }, []);

    return { photos, error, loading };
}
