import { db } from './index';
import { memes, tags, memeTags, type NewMeme, type NewTag } from './schema';
import { eq, desc, ilike, and } from 'drizzle-orm';

// Meme operations
export async function createMeme(data: NewMeme) {
  const [meme] = await db.insert(memes).values(data).returning();
  return meme;
}

export async function getMemes(limit = 20, offset = 0) {
  return await db
    .select()
    .from(memes)
    .orderBy(desc(memes.uploadedAt))
    .limit(limit)
    .offset(offset);
}

export async function getMemeById(id: number) {
  const [meme] = await db
    .select()
    .from(memes)
    .where(eq(memes.id, id));
  return meme;
}

export async function searchMemes(query: string, limit = 20) {
  return await db
    .select()
    .from(memes)
    .where(
      and(
        ilike(memes.title, `%${query}%`),
        ilike(memes.description, `%${query}%`)
      )
    )
    .orderBy(desc(memes.uploadedAt))
    .limit(limit);
}

// Tag operations
export async function createTag(data: NewTag) {
  const [tag] = await db.insert(tags).values(data).returning();
  return tag;
}

export async function getOrCreateTag(name: string) {
  // Try to find existing tag
  const [existingTag] = await db
    .select()
    .from(tags)
    .where(eq(tags.name, name.toLowerCase()));
  
  if (existingTag) {
    return existingTag;
  }
  
  // Create new tag if it doesn't exist
  return await createTag({ name: name.toLowerCase() });
}

export async function getAllTags() {
  return await db.select().from(tags).orderBy(tags.name);
}

// Meme-Tag relationship operations
export async function addTagsToMeme(memeId: number, tagNames: string[]) {
  const tagPromises = tagNames.map(name => getOrCreateTag(name));
  const createdTags = await Promise.all(tagPromises);
  
  const memeTagData = createdTags.map(tag => ({
    memeId,
    tagId: tag.id,
  }));
  
  await db.insert(memeTags).values(memeTagData);
}

export async function getMemesWithTags() {
  return await db.query.memes.findMany({
    with: {
      memeTags: {
        with: {
          tag: true,
        },
      },
    },
    orderBy: desc(memes.uploadedAt),
  });
}

export async function getMemeWithTags(id: number) {
  return await db.query.memes.findFirst({
    where: eq(memes.id, id),
    with: {
      memeTags: {
        with: {
          tag: true,
        },
      },
    },
  });
}