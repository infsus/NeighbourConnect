# NeighbourConnect
Software for managing buildings.

# How to run in development mode?
## Local database
Make sure you have `PostgreSQL` local database running and listening on port `5432`, with credentials `postgres` for both username and password.
Also, create empty database `nec` with public schema.

Optionally, you can configure db properties in `application.properties` file.

## Backend
Make sure you have `java 21` and `maven` (^3.6.x) installed on your PC.

Open terminal and navigate to `backend` folder.

Optionally, you can run this command to clear the cache:
```bash
mvn clean
```

Then, create `.jar` file with:
```bash
mvn package
```

Finally, start the backend application:
```bash
java -jar ./target/nec-0.0.1-SNAPSHOT.jar
```

## Frontend

Make sure you have `node` (^16.x.x) and `npm` (^10.x.x) installed on your PC.

Open terminal and navigate to `frontend` folder.

Install needed dependencies with:
```bash
npm install -d
```

RUn the frontend application with:
```bash
npm run dev
```

Open your preffered browser and navigate to `http://localhost:5173/`.
