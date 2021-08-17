import Link from 'next/link';
import { render } from 'react-dom';

export default function firstPost() {
    return (
        <>
        <h1>First Post!</h1>
            <h2>
                <Link href='/'>
                    <a>Return Home</a>
                </Link>
            </h2> 
        </>
    )
};