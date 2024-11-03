import pg from 'pg'
import dotenv from 'dotenv'

dotenv.config({ path: '../.env' })

const config = {
    database: process.env.PGDATABASE,
    host: process.env.PGHOST,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT,
    user: process.env.PGUSER,
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
}

console.log('Database configuration:', {
    database: config.database,
    host: config.host,
    port: config.port,
    user: config.user,
})

export const pool = new pg.Pool(config)

// Add connection event listeners
pool.on('connect', () => {
    console.log('Pool connected to PostgreSQL')
})