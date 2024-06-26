import { Suspense } from 'react';
import { getUsersPages } from '@/users';
import { Pagination, SearchUsers, UsersTableSkeleton } from '@/users/components';
import UsersTable from '@/users/components/users-table';
import Link from 'next/link';

export const metadata = {
	title: 'Users List',
	description: 'Users List page',
};

type Props = {
	params: {};
	searchParams: {
		query?: string;
		page?: string;
	};
};

const UsersPage: React.FC<Props> = async ({ searchParams }) => {
	const { query = '', page: currentPage = '1' } = searchParams;
	const data = await getUsersPages(query);

	return (
		<section className="w-[90%] mx-auto py-10 pl-14">
			<div className="bg-white p-8 rounded-md w-full">
				<div className="flex items-center justify-between pb-6">
					<div className="flex items-center justify-between w-full">
						<SearchUsers />
						<div className="ml-auto">
							<Link href="/admin/users/create">
								<div className="bg-indigo-600 w-20 h-8 rounded-md text-white font-semibold tracking-wide flex justify-center items-center">
									Add
								</div>
							</Link>
						</div>
					</div>
				</div>
				<div>
					<div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
						<div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
							<Suspense key={query + currentPage} fallback={<UsersTableSkeleton />}>
								<UsersTable query={query} currentPage={+currentPage} />
							</Suspense>
						</div>

						{data.total && <Pagination totalPages={data.total} />}
					</div>
				</div>
			</div>
		</section>
	);
};

export default UsersPage;
