import bcrypt from 'bcrypt';
import { db } from '@vercel/postgres';
import { users, agents, itemHistory, spendreceive, items } from '../lib/placeholder-data';

const client = await db.connect();

async function seedUsers() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`
    CREATE TABLE IF NOT EXISTS users (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      username VARCHAR(255) NOT NULL UNIQUE,
      password TEXT NOT NULL
    );
  `;

  const insertedUsers = await Promise.all(
    users.map(async (user) => {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      return client.sql`
        INSERT INTO users (id, username, password)
        VALUES (${user.id}, ${user.username}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `;
    }),
  );

  return insertedUsers;
}

async function seedAgents() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`
    CREATE TABLE IF NOT EXISTS agents (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      agent VARCHAR(255) NOT NULL UNIQUE
    );
  `;

  const insertedAgents = await Promise.all(
      agents.map(
          (agent) => client.sql`
          INSERT INTO agents (id, agent)
          VALUES (${agent.id}, ${agent.agent})
          ON CONFLICT (id) DO NOTHING;
          `
      )
  );

  return insertedAgents;
}

async function seedItems() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await client.sql`
    CREATE TABLE IF NOT EXISTS items (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      itemName VARCHAR(255) NOT NULL UNIQUE,
      unitPrice INT NOT NULL,
      currentVolume INT NOT NULL
    );
  `;

  const insertedItems = await Promise.all(
    items.map(
      (item) => client.sql`
        INSERT INTO items (id, itemName, unitPrice, currentVolume)
        VALUES (${item.id}, ${item.itemName}, ${item.unitPrice}, ${item.currentVolume})
        ON CONFLICT (id) DO NOTHING;
      `,
    ),
  );

  return insertedItems;
}

async function seedSpendReceive() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await client.sql`
    CREATE TABLE IF NOT EXISTS spendreceive (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name TEXT NOT NULL,
      categoryId VARCHAR(255) NOT NULL,
      agentId UUID NOT NULL,
      spend BOOLEAN NOT NULL,
      amount INT NOT NULL,
      createdDate DATE NOT NULL
    );
  `;

  const insertedSpendReceive = await Promise.all(
    spendreceive.map((item) => {
      // Log giá trị của item để kiểm tra
      console.log("Item details:", item);
      return item; // Giữ nguyên item để tiếp tục insert
    })
  );
  return insertedSpendReceive;
}

async function seedItemHistory() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await client.sql`
    CREATE TABLE IF NOT EXISTS itemhistory (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      itemId UUID NOT NULL,
      agentId UUID NOT NULL,
      volume INT NOT NULL,
      spend BOOLEAN NOT NULL,
      createdDate DATE NOT NULL
    );
  `;

  const insertedItemHistory = await Promise.all(
    itemHistory.map((item) => {
      // Log giá trị của item để kiểm tra
      console.log("Item details:", item);
      return item; // Giữ nguyên item để tiếp tục insert
    })
  );

  return insertedItemHistory;
}

export async function GET() {
  return Response.json({
    message:
      'Uncomment this file and remove this line. You can delete this file when you are finished.',
  });
  // try {
  //   await client.sql`BEGIN`;
    // await seedUsers();
    // await seedAgents();
    // await seedItems();
    // await seedSpendReceive();
    // await seedItemHistory();
  //   await client.sql`COMMIT`;
  //
  //   return Response.json({ message: 'Database seeded successfully' });
  // } catch (error) {
  //   await client.sql`ROLLBACK`;
  //   return Response.json({ error }, { status: 500 });
  // }
}
