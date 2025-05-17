import { useMemo } from "react";

export default function UsersList({ users, search }) {
    const filteredUsers = useMemo(() => users.filter((user) => {
        console.log("render");
        return user.name.toLowerCase().includes(search.toLowerCase());
    }), [users, search]);

    return (
        <ul>
            {filteredUsers.map((user) => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    );
}