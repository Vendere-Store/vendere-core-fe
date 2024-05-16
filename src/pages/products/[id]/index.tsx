import dynamic from 'next/dynamic';
import React, { Suspense } from 'react';

const RemotePage = dynamic(() => import('products/ProductDetails' as any), {
  suspense: true
});

export function ProductDetails(props: any) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RemotePage {...props} />
    </Suspense>
  );
}

export default ProductDetails;
