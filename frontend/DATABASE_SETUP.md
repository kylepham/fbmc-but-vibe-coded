# Database Setup with Drizzle ORM and Supabase

## Prerequisites

1. Create a Supabase account at [supabase.com](https://supabase.com)
2. Create a new project in Supabase

## Setup Steps

### 1. Get Database Connection String

1. Go to your Supabase project dashboard
2. Navigate to **Settings** → **Database**
3. Find the **Connection string** section
4. Copy the connection string (it looks like this):
   ```
   postgresql://postgres:[YOUR-PASSWORD]@db.[YOUR-PROJECT-REF].supabase.co:5432/postgres
   ```

### 2. Environment Variables

1. Create a `.env.local` file in the frontend directory:

   ```bash
   cp .env.example .env.local
   ```

2. Add your database URL to `.env.local`:
   ```
   DATABASE_URL="postgresql://postgres:[YOUR-PASSWORD]@db.[YOUR-PROJECT-REF].supabase.co:5432/postgres"
   ```

### 3. Generate and Run Migrations

1. Generate migration files:

   ```bash
   npm run db:generate
   ```

2. Push the schema to your database:
   ```bash
   npm run db:push
   ```

### 4. Verify Setup

You can use Drizzle Studio to view your database:

```bash
npm run db:studio
```

This will open a web interface at `http://localhost:4983` where you can view and manage your database.

## Database Schema

The current schema includes:

- **memes**: Stores meme information (title, description, image URL, etc.)
- **tags**: Stores unique tags
- **meme_tags**: Junction table for many-to-many relationship between memes and tags

## Available Scripts

- `npm run db:generate` - Generate migration files from schema changes
- `npm run db:migrate` - Run migrations (for production)
- `npm run db:push` - Push schema changes directly (for development)
- `npm run db:studio` - Open Drizzle Studio

## Usage Examples

```typescript
import { db } from "@/lib/db";
import { createMeme, getMemesWithTags, addTagsToMeme } from "@/lib/db/queries";

// Create a new meme
const meme = await createMeme({
  title: "Funny Cat",
  description: "A very funny cat meme",
  imageUrl: "https://example.com/cat.jpg",
  userId: "user123",
});

// Add tags to the meme
await addTagsToMeme(meme.id, ["funny", "cat", "animals"]);

// Get all memes with their tags
const memesWithTags = await getMemesWithTags();
```
