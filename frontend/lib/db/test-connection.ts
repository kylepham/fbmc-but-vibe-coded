import { db } from './index';

export async function testDatabaseConnection() {
  try {
    // Simple query to test connection
    const result = await db.execute('SELECT 1 as test');
    console.log('✅ Database connection successful');
    return true;
  } catch (error) {
    console.error('❌ Database connection failed:', error);
    return false;
  }
}