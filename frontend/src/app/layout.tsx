import { Providers } from '@/store';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import ToastNotification from '@/components/toastNofitication';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Cornerfolio',
	description:
		'This is a portfolio app website for Cornerstone International Community College of Canada.',
};

type Props = {
	children: React.ReactNode;
};

const RootLayout: React.FC<Props> = ({ children }) => {
	return (
		<html lang="en">
			<body className={montserrat.className}>
				<Providers>
					<ToastNotification>
						{children}
					</ToastNotification>
				</Providers>
			</body>
		</html>
	);
};

export default RootLayout;
