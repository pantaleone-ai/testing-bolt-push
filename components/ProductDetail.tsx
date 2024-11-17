import { Card, CardContent } from '@shadcn/ui';
    import { useEffect, useState } from 'react';

    interface Product {
      id: number;
      name: string;
      description: string;
      price: number;
    }

    const initialProduct: Product = {
      id: 1,
      name: 'Sample Product',
      description: 'This is a sample product description.',
      price: 9.99,
    };

    export default function ProductDetail() {
      const [product, setProduct] = useState<Product>(initialProduct);

      useEffect(() => {
        // Simulate fetching data from an API
        const fetchProduct = async () => {
          // Replace this with actual API call if needed
          const fetchedProduct: Product = {
            id: 1,
            name: 'Sample Product',
            description: 'This is a sample product description.',
            price: 9.99,
          };
          setProduct(fetchedProduct);
        };

        fetchProduct();
      }, []);

      return (
        <div className="p-4">
          <Card>
            <CardContent>
              <h2 className="text-xl font-bold">{product.name}</h2>
              <p className="mt-2 text-gray-600">{product.description}</p>
              <p className="mt-4 text-lg font-semibold">${product.price.toFixed(2)}</p>
            </CardContent>
          </Card>
        </div>
      );
    }
