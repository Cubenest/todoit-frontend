import { createBrowserHistory } from "history";

export const API_URL = `https://todoit-backend.herokuapp.com/`;

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
    onClick: (index: number) => void;
}

export enum STATUS {
    New = 0,
    inProgress = 1,
    completed = 2,
    Archived = 3,
    Trashed = 3,
}

export const STATUS_VALUES = [
    "New",
    "inProgress",
    "completed",
    "Archived",
    "Trashed",
];

export interface ModalData {
    title: string;
    labels: string[];
    priority: string;
    dueDate: Date;
    status?: string;
}

export const PRIORITY_VALUES = ["low", "med", "high"];

export const PriorityMap: any = {
    low: 0,
    med: 1,
    hight: 2,
};

export const history = createBrowserHistory();
