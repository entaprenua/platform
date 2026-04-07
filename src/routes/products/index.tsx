import { Switch, Match } from 'solid-js'
import { Button } from '~/components/ui/button'

export default function ProductsPage() {
  return (
    <div class="min-h-screen bg-gray-50">
      <div>
        <h1 class="text-3xl font-bold mb-2">Our Products</h1>
        <p class="text-gray-600 mb-8">Browse our selection of amazing products </p>

        <div class="mt-8">
          <Button variant="primary">Load More</Button>
        </div>
      </div>
    </div>
  )
}
