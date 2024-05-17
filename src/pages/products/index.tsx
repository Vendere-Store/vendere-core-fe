import { lazy, Suspense } from 'react';
import { loadRemote } from '@module-federation/runtime';

const ProductsPage = lazy(() => loadRemote('products/Products') as any);

const Products = (props: any) => {
  return (
    <Suspense fallback={'loading'}>
      <ProductsPage {...props} />
    </Suspense>
  );
};

Products.getInitialProps = async (ctx: string) => {
  const res = (await loadRemote('products/Products')) as any;
  console.log('res', res);

  return res.default.getInitialProps(ctx);
};

export default Products;
