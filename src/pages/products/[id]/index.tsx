import { lazy, Suspense } from 'react';
import { loadRemote } from '@module-federation/runtime';
import { GetServerSidePropsContext } from 'next';

const PdpPage = lazy(() => loadRemote('products/ProductDetails') as any);

const Pdp = (props: any) => {
  console.log('props', props);
  return (
    <Suspense fallback={'loading'}>
      <PdpPage {...props} />
    </Suspense>
  );
};

Pdp.getInitialProps = async (ctx: GetServerSidePropsContext) => {
    const remoteModule = await loadRemote('products/ProductDetails') as any;
    if (remoteModule && remoteModule.default && remoteModule.default.getInitialProps) {
        return await remoteModule.default.getInitialProps(ctx);
    }
    return {};
};


export default Pdp;