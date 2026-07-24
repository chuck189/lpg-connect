// import {
//     Card,
//     CardContent,
//     CardHeader,
//     CardTitle,
//   } from "@/components/ui/card";
  
//   const orders = [
//     {
//       id: "ORD-1001",
//       supplier: "Afrox Zambia",
//       amount: "K420",
//       status: "Delivered",
//     },
//     {
//       id: "ORD-1002",
//       supplier: "ProGas",
//       amount: "K310",
//       status: "In Transit",
//     },
//     {
//       id: "ORD-1003",
//       supplier: "Oryx Energy",
//       amount: "K560",
//       status: "Pending",
//     },
//   ];
  
//   export default function RecentOrders() {
//     return (
//       <Card>
//         <CardHeader>
//           <CardTitle>Recent Orders</CardTitle>
//         </CardHeader>
  
//         <CardContent>
//           <div className="space-y-4">
//             {orders.map((order) => (
//               <div
//                 key={order.id}
//                 className="flex items-center justify-between border-b pb-3 last:border-none"
//               >
//                 <div>
//                   <p className="font-medium">{order.supplier}</p>
//                   <p className="text-sm text-muted-foreground">
//                     {order.id}
//                   </p>
//                 </div>
  
//                 <div className="text-right">
//                   <p className="font-semibold">{order.amount}</p>
//                   <p className="text-sm text-green-600">
//                     {order.status}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </CardContent>
//       </Card>
//     );
//   }