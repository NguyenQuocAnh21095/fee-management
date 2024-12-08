import Search from '@/app/ui/search';
import Table from '@/app/ui/items/table';
import { inter } from '@/app/ui/fonts';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';

export default async function Page(props: {
    searchParams?: Promise<{
        query?: string;
        page?: string;
    }>;
    }) {
    const searchParams = await props.searchParams;
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;

    return (
        <div className="w-full">
            <div className="flex w-full items-center justify-between">
                <h1 className={`${inter.className} text-2xl`}>Danh sách vật tư</h1>
            </div>
            <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                <Search placeholder="Tìm kiếm..." />
                {/*<CreateInvoice />*/}
                <p className="bg-green-400">Tạo</p>
            </div>

            <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
                {/*<Table query={query} currentPage={currentPage} />*/}
                <Table/>
            </Suspense>
            <div className="mt-5 flex w-full justify-center">
                {/* <Pagination totalPages={totalPages} /> */}
            </div>
        </div>
    );
}