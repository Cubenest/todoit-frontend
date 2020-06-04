export function omit<T extends object, K extends keyof T>(
    target: T,
    ...omitKeys: K[]
): Omit<T, K> {
    return (Object.keys(target) as K[]).reduce((res, key) => {
        if (!omitKeys.includes(key)) {
            res[key] = target[key];
        }
        return res;
    }, {} as any);
}

export interface RowProps<T> {
    index: number;
    style: any;
    data: T;
}

export enum STATUS {
    New = 0,
    inProgress = 1,
    completed = 2,
    Archived = 3,
    Trashed = 3,
}
