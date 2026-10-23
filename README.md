# Celebrare Gallery

A responsive Photo Gallery Web App built for the Celebrare Frontend Intern Pre-Screening Assignment. It fetches photos, filters them in real-time, and saves favorites locally.

## 🎥 Video Demonstration

> _[5-minute screen recording link will be added here upon submission]_

## 💡 Real-World Developer Considerations

| Consideration            | Developer Note                                                                                                            |
| :----------------------- | :------------------------------------------------------------------------------------------------------------------------ |
| **LocalStorage Payload** | In production, we would only save the photo `id` to keep storage small, not the entire object.                            |
| **Loading States**       | Skeleton screens are better than spinners to prevent layout shifts (CLS), though a spinner is used here per requirements. |
| **Search Debouncing**    | Intentionally omitted to strictly follow the assignment scope, but the code is ready for it in a real app.                |

## ✅ Rules Compliance Checklist

- [x] **Setup**: React + Vite + Tailwind CSS only (No extra UI libraries).
- [x] **API**: Fetches 30 photos with Loading and Error states.
- [x] **Grid**: Responsive (1 col mobile, 2 col tablet, 4 col desktop).
- [x] **Search**: Real-time filtering without page reloads or new API calls.
- [x] **Favorites**: Uses `useReducer` (no `useState`) with `localStorage` persistence.
- [x] **Custom Hook**: `useFetchPhotos` returns exactly `{ photos, loading, error }`.
- [x] **Performance**: `useMemo` for filtered list, `useCallback` for search handler.
- [x] **Scope**: No extra features added.

## 🛠️ Tech Stack

- **Framework**: React 18 + TypeScript
- **Build**: Vite
- **Styling**: Tailwind CSS

## 🏃‍♂️ How to Run

```bash
npm install
npm run dev
```
