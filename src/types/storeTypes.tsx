export interface IUserInfo {
    name: string | null;
    role: string;
    username: string;
    _id: string;
    message: string;
    success: boolean;
    token: string;
    imgLink: string | null;
}
export interface IUserList extends Omit<IUserInfo, 'token'> {}

export interface UploadInfo {
    success: boolean;
    message: string;
    data: string;
}

export interface IAllUserList {
    success: boolean,
    message: string,
    data:{
        content: IProp[];
        total: number;
    }
}

export interface IProp {
    _id: string;
    username: string;
    name: string | null;
    role: string;

}
export interface IUserParam{
    page: number;
    size: number;
}
