import AppShell from "@/components/layout/app-shell";
import PageHeader from "@/components/layout/page-header";
import { prisma } from "@/lib/prisma";

export default async function CustomerDashboardPage() {
	const customers = await prisma.customer.count();
	const orders = await prisma.order.count();

	const quantityResult = await prisma.order.aggregate({
		_sum: { quantity: true },
	});

	const totalQuantity = quantityResult._sum.quantity ?? 0;

	const recentOrders = await prisma.order.findMany({
		orderBy: { createdAt: "desc" },
		take: 5,
		include: { customer: true },
	});

	return (
		<AppShell>
			<PageHeader title="Customer Dashboard" description="Overview of customers and orders" />

			<div className="grid gap-4 md:grid-cols-3">
				<div className="rounded-xl border p-5">
					<h3 className="text-sm text-muted-foreground">Customers</h3>
					<p className="text-3xl font-bold">{customers}</p>
				</div>

				<div className="rounded-xl border p-5">
					<h3 className="text-sm text-muted-foreground">Orders</h3>
					<p className="text-3xl font-bold">{orders}</p>
				</div>

				<div className="rounded-xl border p-5">
					<h3 className="text-sm text-muted-foreground">Total LPG Used</h3>
					<p className="text-3xl font-bold">{totalQuantity}</p>
				</div>
			</div>

			<div className="mt-6">
				<h2 className="text-xl font-semibold">Recent Orders</h2>
				<div className="mt-4 grid gap-3">
					{recentOrders.length === 0 ? (
						<p className="text-sm text-muted-foreground">No recent orders</p>
					) : (
						recentOrders.map((o) => (
							<div key={o.id} className="border rounded-xl p-4">
								<div className="flex justify-between">
									<div>
										<p className="font-medium">Order #{o.id}</p>
										<p className="text-sm text-muted-foreground">Customer: {o.customer?.id ?? o.customerId}</p>
									</div>
									<div className="text-right">
										<p className="font-semibold">K{o.totalAmount}</p>
										<p className="text-sm text-muted-foreground">Qty: {o.quantity}</p>
									</div>
								</div>
							</div>
						))
					)}
				</div>
			</div>
		</AppShell>
	);
}