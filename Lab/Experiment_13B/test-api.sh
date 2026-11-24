#!/usr/bin/env bash
# Quick API test (Experiments 2-4). Server must be running: npm run dev
# Usage: bash test-api.sh
BASE=http://localhost:3000

echo "--- Register"
curl -s -X POST $BASE/api/auth/register -H "Content-Type: application/json" \
  -d '{"username":"john","email":"john@example.com","password":"password123"}'
echo; echo "--- Login"
RESP=$(curl -s -X POST $BASE/api/auth/login -H "Content-Type: application/json" \
  -d '{"email":"john@example.com","password":"password123"}')
echo "$RESP"
TOKEN=$(echo "$RESP" | sed -E 's/.*"token":"([^"]+)".*/\1/')

echo; echo "--- Create todo"
CREATED=$(curl -s -X POST $BASE/api/todos -H "Content-Type: application/json" \
  -H "Authorization: Bearer $TOKEN" \
  -d '{"title":"Buy groceries","description":"Milk, eggs, bread","priority":"high"}')
echo "$CREATED"
ID=$(echo "$CREATED" | sed -E 's/.*"_id":"([^"]+)".*/\1/')

echo; echo "--- Get all todos"
curl -s $BASE/api/todos -H "Authorization: Bearer $TOKEN"
echo; echo "--- Update todo"
curl -s -X PUT $BASE/api/todos/$ID -H "Content-Type: application/json" \
  -H "Authorization: Bearer $TOKEN" -d '{"completed":true}'
echo; echo "--- Delete todo"
curl -s -X DELETE $BASE/api/todos/$ID -H "Authorization: Bearer $TOKEN"
echo
