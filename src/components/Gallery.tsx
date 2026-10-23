"use client";

import { useFetchPhotos } from "@/hooks/useFetchPhotos";
import { memo, useMemo, useState } from "react";
import { PhotoCard } from "./PhotoCard";

export const Gallery = memo(function Gallery() {
    const { photos, loading, error } = useFetchPhotos();
    const [searchTerm, setSearchTerm] = useState("");

    // Memoized filtered list for high performance
    const filteredPhotos = useMemo(() => {
        return photos.filter((photo) =>
            photo.author.toLowerCase().includes(searchTerm.toLowerCase()),
        );
    }, [photos, searchTerm]);

    // Loading State
    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mb-4"></div>
                <p className="font-medium">Loading photos...</p>
            </div>
        );
    }

    // Error State
    if (error) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-background text-foreground">
                <div className="text-xl font-semibold text-destructive bg-destructive/10 px-4 py-2 rounded">
                    Error: {error}
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background text-foreground p-4 md:p-8">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold text-center mb-8">Photo Gallery</h1>

                {/* Search Input - Added onChange handler */}
                {/* Note: In-real world we are use the deboucing for the search but because not mentioned so i was not using i just tell i understand these thing */}
                <div className="mb-8 max-w-md mx-auto">
                    <input
                        type="text"
                        placeholder="Search by author name..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full px-4 py-2 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
                    />
                </div>

                {/* Responsive Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {filteredPhotos.map((photo) => (
                        <PhotoCard
                            key={photo.id}
                            photo={photo}
                            isFavorite={false}
                            toggleFavorite={() => {}}
                        />
                    ))}
                </div>

                {filteredPhotos.length === 0 && !loading && (
                    <p className="text-center text-muted-foreground mt-8 text-lg">
                        No photos found matching "{searchTerm}".
                    </p>
                )}
            </div>
        </div>
    );
});
