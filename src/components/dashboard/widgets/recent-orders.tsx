export function RecentOrders(){

  const orders = [
  
  {
  id:"#1001",
  customer:"Muna Residence",
  product:"12.5kg LPG",
  status:"Delivered"
  },
  
  {
  id:"#1002",
  customer:"Green Energy Ltd",
  product:"48kg LPG",
  status:"Pending"
  },
  
  {
  id:"#1003",
  customer:"John Banda",
  product:"5kg LPG",
  status:"Processing"
  }
  
  ];
  
  
  return (
  
  <div
  className="
  rounded-xl
  border
  bg-card
  p-6
  "
  >
  
  <h3 className="font-semibold mb-5">
  Recent Orders
  </h3>
  
  
  <div className="space-y-4">
  
  
  {orders.map(order=>(
  
  
  <div
  key={order.id}
  className="
  flex
  items-center
  justify-between
  border-b
  pb-3
  "
  >
  
  
  <div>
  
  <p className="font-medium">
  
  {order.customer}
  
  </p>
  
  
  <p className="text-sm text-muted-foreground">
  
  {order.product}
  
  </p>
  
  
  </div>
  
  
  <span
  className="
  rounded-full
  bg-muted
  px-3
  py-1
  text-xs
  "
  >
  
  {order.status}
  
  </span>
  
  
  </div>
  
  
  ))}
  
  
  </div>
  
  
  </div>
  
  
  )
  
  }