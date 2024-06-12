import db from '../db';

export default defineEventHandler(async (event) => {
    if (event.req.method === 'GET' ) {
        const response = await db.query('SELECT * FROM jokes');
        const data = response[0];
        return {
            data: response[0]
        }
    }
})

