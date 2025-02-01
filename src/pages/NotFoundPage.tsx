import { FC } from 'react';
import { Link } from 'react-router-dom';
import { buttonVariants } from '@/components/ui/button';

const NotFoundPage: FC = () => {
    return (
        <section className="content-center h-full">
            <div className="flex flex-col items-center pr-7 text-center">
                <h2 className="mb-2 font-bold text-2xl tracking-tight">Page Not Found</h2>
                <p className="mb-6 max-w-[400px] text-muted-foreground">
                    Sorry, we couldn't find the page you're looking for. The page might have been
                    removed or the link might be broken.
                </p>
                <Link
                    to="/"
                    className={buttonVariants({
                        variant: 'default',
                        size: 'lg',
                        className: 'font-semibold',
                    })}
                >
                    Go back to home
                </Link>
            </div>
        </section>
    );
};

export default NotFoundPage;
