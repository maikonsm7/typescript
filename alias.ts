type User = {
    name: string;
    email: string;
    favoriteColor?: Color;
}

type Color = 'red' | 'green' | 'blue';

const user1: User = {
    name: 'Maikon',
    email: 'maikon@example.com',
};

const favoriteColor: Color = 'green';

console.log(user1);
console.log(`Favorite color is: ${favoriteColor}`);

function setColorFavorite(user: User, color: Color): User {
    return { ...user, favoriteColor: color };
}
const updatedUser = setColorFavorite(user1, 'blue');
console.log(updatedUser);