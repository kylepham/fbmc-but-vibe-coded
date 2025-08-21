'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface MemeImage {
  id: string
  url: string
  description: string
  tags: string[]
  uploadedAt: string
}

interface ImageGridProps {
  searchQuery: string
  selectedTags: string[]
}

export function ImageGrid({ searchQuery, selectedTags }: ImageGridProps) {
  const [images, setImages] = useState<MemeImage[]>([])
  const [loading, setLoading] = useState(true)

  // Mock data for now
  useEffect(() => {
    // TODO: Replace with actual API call
    const mockImages: MemeImage[] = [
      {
        id: '1',
        url: '/placeholder-meme.jpg',
        description: 'Distracted boyfriend meme',
        tags: ['classic', 'relationship', 'funny'],
        uploadedAt: '2024-01-15'
      },
      {
        id: '2', 
        url: '/placeholder-meme2.jpg',
        description: 'This is fine dog in burning room',
        tags: ['dog', 'fire', 'fine', 'stress'],
        uploadedAt: '2024-01-14'
      }
    ]
    
    setTimeout(() => {
      setImages(mockImages)
      setLoading(false)
    }, 1000)
  }, [])

  const filteredImages = images.filter(image => {
    const matchesSearch = searchQuery === '' || 
      image.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      image.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    
    const matchesTags = selectedTags.length === 0 ||
      selectedTags.every(tag => image.tags.includes(tag))
    
    return matchesSearch && matchesTags
  })

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {[...Array(8)].map((_, i) => (
          <Card key={i} className="animate-pulse">
            <CardContent className="p-0">
              <div className="aspect-square bg-muted rounded-t-lg" />
              <div className="p-4 space-y-2">
                <div className="h-4 bg-muted rounded w-3/4" />
                <div className="flex gap-1">
                  <div className="h-5 bg-muted rounded w-12" />
                  <div className="h-5 bg-muted rounded w-16" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {filteredImages.map(image => (
        <Card key={image.id} className="overflow-hidden hover:shadow-lg transition-shadow">
          <CardContent className="p-0">
            <div className="aspect-square relative bg-muted">
              {/* Placeholder for now - will be replaced with actual images */}
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                Image: {image.description}
              </div>
            </div>
            <div className="p-4">
              <p className="text-sm mb-2">{image.description}</p>
              <div className="flex flex-wrap gap-1">
                {image.tags.map(tag => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}