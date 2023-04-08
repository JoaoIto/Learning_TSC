interface IUsers {
    name: string;
    email: string;
    age: number;
    isCoding: boolean
}

const users: IUsers[] = [];

export function getUsers(){
    return users;
}

export function createUsers(user: IUsers){
    users.push(user);
    return user;
}