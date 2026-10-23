// Industry-standard helper to safely extract an error message
export function getErrorMessage(err: unknown): string {
    if (err instanceof Error) {
        return err.message;
    }
    if (typeof err === "string") {
        return err;
    }
    return "An unexpected error occurred";
}
