import { Pool } from "pg";

let pool: Pool | undefined;

export function getPool() {
  if (!pool) {
    const connectionString = process.env.DATABASE_URL?.includes("sslmode=")
      ? process.env.DATABASE_URL
      : `${process.env.DATABASE_URL}${process.env.DATABASE_URL?.includes("?") ? "&" : "?"}sslmode=require`;

    pool = new Pool({
      connectionString,
    });
  }
  return pool;
}

export async function ensureSubmissionsTable() {
  const db = getPool();

  await db.query(`
    CREATE TABLE IF NOT EXISTS submissions (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      phone TEXT,
      created_at TIMESTAMPTZ DEFAULT NOW()
    );
  `);

  await db.query(`ALTER TABLE submissions ADD COLUMN IF NOT EXISTS email TEXT;`);
  await db.query(`ALTER TABLE submissions ADD COLUMN IF NOT EXISTS facility TEXT;`);
  await db.query(`ALTER TABLE submissions ADD COLUMN IF NOT EXISTS service TEXT;`);
  await db.query(`ALTER TABLE submissions ADD COLUMN IF NOT EXISTS message TEXT;`);
}
