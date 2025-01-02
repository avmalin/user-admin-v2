import { sql, type InferSelectModel } from "drizzle-orm";
import { sqliteTable, text, integer, SQLiteTimestamp } from 'drizzle-orm/sqlite-core';


export const users = sqliteTable('users', {
    id: text('id').primaryKey(),
    username: text('username').notNull().unique(),
    password: text('password').notNull(),
    createdAt: integer('created_at',{mode:'timestamp'}).default(sql`CURRENT_TIMESTAMP`).notNull(),
});

export const files = sqliteTable('files', {
    id: text('id').primaryKey(),
    userId: text('user_id').notNull().references(() => users.id),
    filename: text('filename').notNull(),
    filepath: text('filepath').notNull(),
    uploadedAt: integer('uploaded_at', { mode: 'timestamp' }).default(sql`CURRENT_TIMESTAMP`).notNull()
    
  });


export const session = sqliteTable("session", {
    id: text('id').primaryKey(),
    userId: text('user_id').notNull().references(() => users.id),
    expiresAt: integer('expires_at', { mode: 'timestamp' }).notNull()
});

export type Session = typeof session.$inferSelect;
export type Files = typeof files.$inferSelect;
export type User = typeof users.$inferSelect;
