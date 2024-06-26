import { SectionImageText } from '@/interfaces';
import clsx from 'clsx';
import modern from '../../app/admin/portfolios/templates/modern-template.module.css';
import styles from '@/app/[tinyUrl]/tiny-url.module.css';

type Props = {
	section: SectionImageText;
	theme: string;
};

const PreviewSectionImageText: React.FC<Props> = ({ section, theme }) => {
	return (
		<div
			className={clsx(
				styles.sectionImageTextContainer, {
					'flex-col lg:flex-row': (section as SectionImageText).item.position === 'img_text',
					'flex-col-reverse lg:flex-row-reverse': (section as SectionImageText).item.position === 'text_img',
				}
			)}
		>
			{/* image */}
			<section id={section.item.id}>
				<figure className="flex w-full flex-col items-center">
					<img
						src={(section as SectionImageText).item.imgUrl}
						alt={(section as SectionImageText).item.imgAlt}
						className={styles.sectionImageText}
					/>
					<figcaption
						className={clsx(styles.sectionImageTextCaption, {
								'text-stone-500': theme === 'light',
								'text-gray-400': (theme === 'dark') || (theme === 'modern'),
							},
						)}
					>
						<span style={{ fontSize: section.item.imgCaptionSize }}>
							{section.item.imgCaption}
						</span>
					</figcaption>
				</figure>
			</section>

			{/* text */}
			<section
				key={`text-${section.item.id}`}
				className="flex w-full flex-col items-center lg:w-1/2"
			>
				{/* txtHeading */}
				<div className="flex items-between m-4">
					<h3
						style={{ fontSize: section.item.txtHeadingSize }}
						className={clsx("w-full", {
							"text-stone-700": theme === 'light',
							"text-gray-100": theme === 'dark',
							"text-sky-400": theme === 'modern',
					})}>{section.item.txtHeading}</h3>
				</div>

				{/* txtContent */}
				<div className="flex items-between m-4">
					<p
						style={{ fontSize: section.item.txtContentSize }}
						className={clsx(
							styles.sectionImageTextDescription, {
								'text-stone-600': theme === 'light',
								'text-gray-100': theme === 'dark',
								"text-gray-50": theme === 'modern',
							}
						)}
						dangerouslySetInnerHTML={{ __html: section.item.txtContent.replace(/\n/g, '<br />') }}
					/>
				</div>
			</section>
		</div>
	);
};

export default PreviewSectionImageText;
