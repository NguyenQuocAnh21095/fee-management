'use clients';

import {InvoicesTableSkeleton} from "@/app/ui/skeletons";
import Table from "@/app/ui/items/table";
import {Suspense} from "react";
import Link from "next/link";
import {ItemHistory} from "@/app/lib/definitions";
import {fetchItemById, getOneItem, fetchTotalInOut} from "@/app/lib/data";
import {formatDateToLocal} from "@/app/lib/utils";
import clsx from "clsx";

export default async function Page (props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const id = params.id;
    const [items,oneItem,totalInOut] = await Promise.all([
        fetchItemById(id),
        getOneItem(id),
        fetchTotalInOut(id),
    ]);
    const totalInAmount = oneItem?.[0]?.unitprice * totalInOut.numberOfIn || 0;
    const totalOutAmount = oneItem?.[0]?.unitprice * totalInOut.numberOfOut || 0;
    return (
        <div>
            {/*Title*/}
            <div className='bg-green-400 px-4 rounded-md flex justify-center items-center'>
                {oneItem?.map((oneitem) => (
                    <div key={oneitem.id}>Chi tiết: {oneitem.itemname}
                    <br/>SL hiện tại: {oneitem.currentvolume} - Đơn giá: {oneitem.unitprice.toLocaleString()}
                    </div>
                ))}
            </div>
            {/*Nhập xuất*/}
            <div className='mt-4 px-4 rounded-md flex justify-between items-center'>
                <button className='bg-green-500 p-2 rounded-md'>Nhập: {totalInOut.numberOfIn}<br/>TT: {totalInAmount.toLocaleString()}</button>
                <button className='bg-red-500 p-2 rounded-md'>Xuất: {totalInOut.numberOfOut}<br/>TT: {totalOutAmount.toLocaleString()}</button>
            </div>
            {/*Filter*/}
            <div className='bg-green-400 p-3 mt-4'>Nút filter theo calendar</div>
            {/*Danh sách lịch sử*/}
            <Suspense fallback={<InvoicesTableSkeleton />}>
                {/*<Table query={query} currentPage={currentPage} />*/}
                <div className="mt-4 border-gray-300">
                    <ul className="space-y-2">
                        {items?.map((item) => (
                            <li key={item.id} className="mt-2">
                                <div className='bg-gray-100 px-3 rounded-md flex justify-between items-center'>
                                    {item.spend === true ? 'Nhập' : 'Xuất'}
                                    <div>SL: {item.volume} - TT:
                                        <br/>Ngày {formatDateToLocal(item.createddate)}
                                    </div>
                                </div>
                            </li>
                            ))}
                    </ul>
                </div>
            </Suspense>
        </div>
    )
}