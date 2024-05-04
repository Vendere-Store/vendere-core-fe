import dynamic from 'next/dynamic';

const RemotePage = dynamic(() => import('remote/Products'));

export function ProductsList(props) {
    return <RemotePage {...props} />
}

export const getServerSideProps = async (ctx) => {
    const remotePage = await import('remote/Products');

    if (remotePage.getServerSideProps) {
        return remotePage.getServerSideProps(ctx)
    }

    return {
        props: {},
    }
}

export default ProductsList;
