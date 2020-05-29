export interface TodoModel {
    _id: string;
    title: string;
    desc: string;
    labels: string[];
    dueDate: string;
    status: number;
    priority: number;
    groupId: string;
}

export namespace TodoModel {}
