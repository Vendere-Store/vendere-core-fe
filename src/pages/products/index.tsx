import {lazy, Suspense} from 'react'
import {loadRemote} from '@module-federation/runtime'

const ShopPage = lazy(() => loadRemote('products/Products'));

const Shop = (props) => {
    return (
        <Suspense fallback={'loading'}>
            <ShopPage {...props}/>
        </Suspense>
    )
}

Shop.getInitialProps = async (ctx)=>{
    const res = await loadRemote('products/Products')
    console.log('res', res)


    return res.default.getInitialProps(ctx)
}


export default Shop;