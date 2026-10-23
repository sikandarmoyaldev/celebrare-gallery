import type { Photo } from "@/hooks/useFetchPhotos";

export const LOCAL_STORAGE_KEY = "PHOTO_FAVORITES";

export type FavoritesState = Photo[];

export type FavoritesAction =
    { type: "TOGGLE_FAVORITE"; payload: Photo } | { type: "CLEAR_FAVORITES" };

export function favoritesReducer(state: FavoritesState, action: FavoritesAction) {
    switch (action.type) {
        case "TOGGLE_FAVORITE": {
            const isFavorite = state.some((photo) => photo.id === action.payload.id);

            // Note: In real apps, we don't store the whole photo object we only save the fields we need to keep storage small and fast.
            const newState = isFavorite
                ? state.filter((photo) => photo.id !== action.payload.id)
                : [...state, action.payload];

            if (typeof window !== "undefined") {
                localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newState));
            }
            return newState;
        }
        case "CLEAR_FAVORITES": {
            if (typeof window !== "undefined") {
                localStorage.removeItem(LOCAL_STORAGE_KEY);
            }
            return [];
        }
        default:
            return state;
    }
}
