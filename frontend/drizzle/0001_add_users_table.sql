-- Create users table
CREATE TABLE "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" varchar(255) NOT NULL,
	"name" varchar(255),
	"avatar_url" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);

-- Drop the old user_id column and recreate it as integer
ALTER TABLE "memes" DROP COLUMN "user_id";
ALTER TABLE "memes" ADD COLUMN "user_id" integer;

-- Add foreign key constraint
ALTER TABLE "memes" ADD CONSTRAINT "memes_user_id_users_id_fk" 
  FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") 
  ON DELETE set null ON UPDATE no action;
