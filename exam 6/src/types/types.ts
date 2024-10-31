export interface Task{
    _id:string;
    name:string
    status:Status;
    priority:Priority;
    description:string
}


export enum Status{
    completed = "Completed",
    pending = "Pending",
    inProgress = "InProgress"

}

enum Priority{
    high="High",
    medium = "Medium",
    low="Low"
}