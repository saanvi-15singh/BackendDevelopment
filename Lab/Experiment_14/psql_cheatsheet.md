# psql meta-commands (no semicolon needed)
```
\q                          -- quit psql
\l                          -- list all databases
\c student_management       -- connect to a database
\dt                         -- list tables in current database
\d students                 -- describe a table's columns/types
\du                         -- list roles/users
\?                          -- help: psql meta-commands
\h CREATE TABLE             -- help: syntax for a specific SQL statement
\i /path/to/file.sql        -- run a .sql script inside psql
```
Run from the terminal (not inside psql):
```
sudo -u postgres psql                       # open psql as admin
pg_dump student_management > backup.sql     # export
psql student_management < backup.sql        # import
```
Set a password (optional): `ALTER USER postgres WITH PASSWORD 'your_password';`
