export default interface IUserLogin{
    username:string;
    password:string;
};
export interface IUserInfo {
    name: string | null;
    role: string;
    username: string;
    _id: string;
    message: string;
    success: boolean;
    token: string;
    link: string | null;
}
export interface IUserList {
    name: string | null;
    role: string;
    username: string;
    _id: string;
    message: string;
    success: boolean;
    link: string | null;
}
export interface FormDataValue {
    append(image:string | Blob | null):void
}
export interface UploadInfo {
    success: boolean;
    message: string;
    data: string;
}