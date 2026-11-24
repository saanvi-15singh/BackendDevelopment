#!/usr/bin/env bash
# Runs the whole PostgreSQL part of the lab, then the MongoDB part.
# Usage (from the Experiment_14 folder):  bash scripts/run_all.sh
set -e
sudo -u postgres psql -f sql/01_create_database_and_table.sql
sudo -u postgres psql -d student_management -f sql/02_insert.sql
sudo -u postgres psql -d student_management -f sql/03_queries_update_delete.sql
sudo -u postgres psql -d student_management -f sql/04_aggregation.sql
sudo -u postgres psql -d student_management -f sql/05_jsonb.sql
mongosh --file mongodb/students.mongosh.js
