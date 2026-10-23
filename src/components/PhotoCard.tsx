"use client";

import type { Photo } from "@/hooks/useFetchPhotos";
import { memo } from "react";

export const PhotoCard = memo(function PhotoCard({
    photo,
    isFavorite,
    toggleFavorite,
}: {
    photo: Photo;
    isFavorite: boolean;
    toggleFavorite: (photo: Photo) => void;
}) {
    // Construct an optimized thumbnail URL to prevent downloading massive 4K/5K images
    // Picsum allows specifying width and height directly in the path: /id/{id}/{width}/{height}
    // Note: This is i was figure out when i see the url was loading too much big height and width image that why i make it small so tab was not hang
    // "https://picsum.photos/id/10/2500/1667"
    const thumbnailUrl = `https://picsum.photos/id/${photo.id}/400/300`;

    return (
        <div className="bg-card text-card-foreground rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-border">
            <img
                src={thumbnailUrl}
                alt={photo.author}
                className="w-full h-48 object-cover bg-muted"
                loading="lazy"
                decoding="async"
            />
            <div className="p-4 flex items-center justify-between">
                <span className="font-medium truncate pr-2">{photo.author}</span>
                <button
                    onClick={() => toggleFavorite(photo)}
                    className="text-2xl focus:outline-none transition-transform active:scale-90"
                    aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
                >
                    {isFavorite ? "❤️" : "🤍"}
                </button>
            </div>
        </div>
    );
});
