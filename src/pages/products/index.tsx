import dynamic from 'next/dynamic';
import React, { Suspense } from 'react';

const RemotePage = dynamic(() => import('remote/Products' as any), {
  suspense: true
});

export function ProductsList(props: any) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RemotePage {...props} />
    </Suspense>
  );
}

export default ProductsList;
