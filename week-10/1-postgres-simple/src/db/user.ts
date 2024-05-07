import { client } from "..";

/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function createUser(username: string, password: string, name: string) {
    try {
        await client.connect();
        const insertQuery = "INSERT INTO users (username, password, name) VALUES ($1, $2, $3)";
        const values = [username, password, name];
        const result = await client.query(insertQuery, values);
        console.log("User added successfully", result);
        return result;
    } catch (error) {
        console.log("Error found in adding the user", error);
    } finally {
        await client.end();
    }
}

/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function getUser(userId: number) {
    try {
        await client.connect();
        const getQuery = "SELECT * FROM USERS WHERE user_id = $1";
        const value = [userId];
        const result = await client.query(getQuery, value);

        if(result.rows.length > 0) {
            console.log("User found: ", result.rows);
            return result.rows;
        } else {
            console.log("No user found");
            return null;
        }
    } catch (error) {
        console.log("Error found while finding the user", error);
    } finally {
        await client.end();
    }
}