import { pgTable, serial, text, timestamp, varchar, integer } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

// Users table
export const users = pgTable('users', {
  id: varchar('id', { length: 255 }).primaryKey(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  name: varchar('name', { length: 255 }),
  avatarUrl: text('avatar_url'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// Memes table
export const memes = pgTable('memes', {
  id: serial('id').primaryKey(),
  title: varchar('title', { length: 255 }),
  description: text('description'),
  imageUrl: text('image_url').notNull(),
  uploadedAt: timestamp('uploaded_at').defaultNow().notNull(),
  userId: varchar('user_id', { length: 255 }).references(() => users.id, { onDelete: 'set null' }),
});

// Tags table
export const tags = pgTable('tags', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 100 }).notNull().unique(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

// Meme tags junction table (many-to-many relationship)
export const memeTags = pgTable('meme_tags', {
  id: serial('id').primaryKey(),
  memeId: integer('meme_id').notNull().references(() => memes.id, { onDelete: 'cascade' }),
  tagId: integer('tag_id').notNull().references(() => tags.id, { onDelete: 'cascade' }),
});

// Relations
export const usersRelations = relations(users, ({ many }) => ({
  memes: many(memes),
}));

export const memesRelations = relations(memes, ({ many, one }) => ({
  memeTags: many(memeTags),
  user: one(users, {
    fields: [memes.userId],
    references: [users.id],
  }),
}));

export const tagsRelations = relations(tags, ({ many }) => ({
  memeTags: many(memeTags),
}));

export const memeTagsRelations = relations(memeTags, ({ one }) => ({
  meme: one(memes, {
    fields: [memeTags.memeId],
    references: [memes.id],
  }),
  tag: one(tags, {
    fields: [memeTags.tagId],
    references: [tags.id],
  }),
}));

// Types
export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
export type Meme = typeof memes.$inferSelect;
export type NewMeme = typeof memes.$inferInsert;
export type Tag = typeof tags.$inferSelect;
export type NewTag = typeof tags.$inferInsert;