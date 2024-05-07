import { client } from "..";
/*
 * Function should insert a new todo for this user
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function createTodo(userId: number, title: string, description: string) {
    try {
        await client.connect();
        const insertQuery = "INSERT INTO todo (userId, title, description) VALUES ($1, $2, $3)";
        const values = [userId, title, description];
        const result = await client.query(insertQuery, values);
        console.log("Todo added to table", result);
        return result;
    } catch (error) {
        console.log("Error found in inserting a todo", error);
    } finally {
        await client.end();
    }
}
/*
 * mark done as true for this specific todo.
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function updateTodo(todoId: number) {
    try {
        await client.connect();
        const updateQuery = "UPDATE todo SET done = true WHERE todoId = $1";
        const value = [todoId];
        const result = await client.query(updateQuery, value);
        console.log("Updated todo successfully", result);
        return result;
    } catch (error) {
        console.log("Error while updating todo", error);
    } finally {
        await client.end();
    }
}

/*
 *  Get all the todos of a given user
 * Should return an array of todos
 * [{
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }]
 */
export async function getTodos(userId: number) {
    try {
        await client.connect();
        const getQuery = "SELECT * FROM todo WHERE userId = $1";
        const value = [userId];
        const result = await client.query(getQuery, value);

        if(result.rows.length > 0) {
            console.log("Todo found: ", result.rows);
            return result.rows;
        } else {
            console.log("No data found");
            return null;
        }
    } catch (error) {
        console.log("Error found while searching for todo", error);
    } finally {
        await client.end();
    }
}