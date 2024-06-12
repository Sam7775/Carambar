import db from '../db';

export default defineEventHandler(async (event) => {
  try {
    const [response] = await db.query('SELECT joke FROM jokes ORDER BY RAND() LIMIT 1');
    if (!response || response.length === 0) {
      throw new Error('No joke found');
    }
    return response[0];
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: `Database error: ${error.message}`
    });
  }
});
