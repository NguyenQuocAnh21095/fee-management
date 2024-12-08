import { fetchItems } from '@/app/lib/data';

export default async function ItemsTable(){
  const items = await fetchItems();
  // console.log(items);

  return (
      <div className="mt-4 border-gray-300">
          <ul className="space-y-2">
              {items.map((item) => (
                  <li key={item.id} className="mt-2">
                      <div className="mb-1 w-full rounded-md bg-green-400 pl-3 p-2">
                          <strong>{item.itemname}</strong> - Giá: {item.unitprice} VNĐ
                          <br/> SL: {item.currentvolume}
                      </div>
                  </li>
              ))}
          </ul>
      </div>

      // <div>
      //*<table className="min-w-full border-collapse border border-gray-200">*/


      // <div className="mt-6 flow-root">
      //   <div className="inline-block min-w-full align-middle">
      //     <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
      //       <div className="md:hidden">
      //         {items?.map((item) => (
      //             <div
      //                 key={item.id}
      //                 className="mb-2 w-full rounded-md bg-white p-4"
      //             >
      //               <div className="flex items-center justify-between border-b pb-4">
      //               </div>
      //               <div className="flex w-full items-center justify-between pt-4">
      //                 <div>
      //                   <p className="text-xl font-medium">
      //                     {formatCurrency(item.unitPrice)}
      //                   </p>
      //                   <p>{item.currentVolume}</p>
      //                 </div>
      //                 <div className="flex justify-end gap-2">
      //                 </div>
      //               </div>
      //             </div>
      //         ))}
      //       </div>
      //
      //     </div>
      //   </div>
      // </div>
  );
}
