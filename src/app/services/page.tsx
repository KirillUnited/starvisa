import './styles.css'
import { site } from '@/content'
import { DocsSection, InfoImportant, ServiceSection, InfoList } from '@/components/shared/service'
import DocsList from '@/components/shared/service/service-docs-list'
import DocsInfo from '@/components/shared/service/service-docs-info'
import { OrderSection } from '@/components/shared/form'
import ServicePageHero from './page-hero'

type Props = {
	params: { slug: string }
}

export async function generateMetadata({ params }: Props) {
	return {
		title: site?.visa.seo.title,
		description: site?.visa.seo.description,
	}
}

// export async function generateStaticParams() {
//   const posts = await getCollection('services');

//   return posts.map((post) => ({
//     slug: post?.slug,
//   }))
// }

export default function VisaPage() {	
	const posts = site?.visa?.info?.list.filter((item) => {
		return item.category === 'КАНАДА'
	});

	return (
		<>
			<ServicePageHero />
			<section>
				<div className='container'>
					<div className='py-2'>
						<InfoImportant {...site.visa.info_important} />
					</div>
				</div>
			</section>
			<DocsSection
				title={site.visa.docs.main.title}
				description={site.visa.docs.main.description}
			>
				<DocsList list={site.visa.docs.main.list} />
			</DocsSection>
			<DocsInfo info={site.visa.docs.info} />
			<DocsSection
				title={site.visa.docs.additional.title}
				description={site.visa.docs.additional.description}
			>
				<DocsList list={site.visa.docs.additional.list} />
			</DocsSection>
			<ServiceSection {...site.visa.services} />
			<OrderSection />
			<section className='section'>
				<div className="container">
					<div className='section-inner'>
						<div className="section-heading text-center">
							<h2 className='heading-2'>{site.visa.info.title}</h2>
						</div>
						<div className="section-body">
							<InfoList list={posts} />
						</div>
					</div>
				</div>
			</section>
		</>
	)
}