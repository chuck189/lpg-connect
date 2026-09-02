export const dynamic = "force-dynamic";

import AppShell from "@/components/layout/app-shell";
import PageHeader from "@/components/layout/page-header";
import { prisma } from "@/lib/prisma";

export default async function CustomerDashboardPage() {
	let customers = 0;
	let orders = 0;
	let totalAmount = 0;
	let recentOrders: any[] = [];

	try {
		customers = await prisma.customer.count();
		orders = await prisma.order.count();

		const amountResult = await prisma.order.aggregate({
			_sum: { totalAmount: true },
		});

		totalAmount = amountResult._sum.totalAmount ?? 0;

		recentOrders = await prisma.order.findMany({
			orderBy: { createdAt: "desc" },
			take: 5,
			include: { customer: true },
		});
	} catch (error) {
		console.error("Database connection error", error);
		// Fallback for build time without database
	}

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
					<h3 className="text-sm text-muted-foreground">Total Spent</h3>
					<p className="text-3xl font-bold">K{totalAmount.toFixed(2)}</p>
				</div>
			</div>

			<div className="mt-6">
				<h2 className="text-xl font-semibold">Recent Orders</h2>
				<div className="mt-4 grid gap-3">
					{recentOrders.length === 0 ? (
						<p className="text-sm text-muted-foreground">No recent orders</p>
					) : (
						recentOrders.map((o: any) => (
							<div key={o.id} className="border rounded-xl p-4">
								<div className="flex justify-between">
									<div>
										<p className="font-medium">Order #{o.orderNumber || o.id}</p>
										<p className="text-sm text-muted-foreground">Customer: {o.customer?.id ?? o.customerId}</p>
									</div>
									<div className="text-right">
										<p className="font-semibold">K{o.totalAmount}</p>
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
