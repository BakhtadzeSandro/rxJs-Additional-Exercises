export interface Job {
	id: number;
	name: string;
}

export interface Person {
	id: number;
	jobId: number;
	name: string;
	lastname: string;
}

export interface Item{
	name: string
}
