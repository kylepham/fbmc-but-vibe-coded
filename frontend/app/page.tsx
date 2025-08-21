"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { ImageGrid } from "@/components/image-grid";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags] = useState<string[]>([]);

  return (
    <div className="container mx-auto p-6">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Browse Memes</h1>
        <p className="text-muted-foreground">Discover and search your meme collection</p>
      </header>

      <div className="mb-6">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search memes by description..."
            value={searchQuery}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearchQuery(e.target.value)
            }
            className="pl-10"
          />
        </div>
      </div>

      <ImageGrid searchQuery={searchQuery} selectedTags={selectedTags} />
    </div>
  );
}
