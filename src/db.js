import pkg from "pg"
const { Pool } = pkg

const pool = new Pool({
  connectionString: "postgresql://neondb_owner:npg_HCFdmEafAb13@ep-weathered-river-ainrv42m-pooler.c-4.us-east-1.aws.neon.tech/neondb?sslmode=verify-full",
  ssl: {
    rejectUnauthorized: false
  }
})

export default pool