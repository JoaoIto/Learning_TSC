interface IUsers {
    name: string;
    email: string;
    age: number;
    isCoding: boolean
}

const users: IUsers[] = [];

export function getUsers(){
    // Retorna uma cópia dos objetos no array "users"
    return users.map(user => ({...user}));
}

export function createUsers(user: IUsers){
    users.push(user);
    return user;
}