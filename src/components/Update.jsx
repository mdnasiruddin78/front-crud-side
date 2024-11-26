import { useLoaderData } from "react-router-dom";


const Update = () => {
    const loadedUsers = useLoaderData()
    const handleUpdate = event => {
        event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = {name,email}
    console.log(user)
    }
    return (
        <div>
            <h2>update data: {loadedUsers?.name}</h2>
            <form onSubmit={handleUpdate}>
        <input type="text" name="name" defaultValue={loadedUsers?.name} id="" />
        <br/>
        <input type="email" name="email" defaultValue={loadedUsers?.email} id="" />
        <br/>
        <input type="submit" value="update" />
      </form>
        </div>
    );
};

export default Update;