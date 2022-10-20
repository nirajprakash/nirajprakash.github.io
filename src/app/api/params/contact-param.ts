
export interface ParamPostContact {
    id: string;
    name: string;
    email: string;
    details: string;
    token?: string
}

export interface ParamContactFlowRes {
    isAdded: boolean;
}