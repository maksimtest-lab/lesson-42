export default function CartItem({ item, onDelete }) {

    const handleDelete = () => {
        onDelete(item.id);
    }
    return (
        <li key={item.id}>
            {item.name}
            <button onClick={handleDelete}>Удалить</button>
        </li>
    );
}