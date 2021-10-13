export default interface IUserLogin{
    username:string;
    password:string;
};
export type IUser={
    imgLink:string;
    username:string | null;
    name:string;
};

export default interface IUserInfo {
    name: string | null;
    role: string;
    username: string;
    _id: string;
    message: string;
    success: boolean;
    token: string;
}