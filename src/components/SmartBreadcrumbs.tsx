import Link from 'next/link';
import { generateCityBreadcrumbs, generateStateBreadcrumbs } from '@/lib/statePageUtils';
import StructuredData from './StructuredData';
import { generateBreadcrumbListSchema } from '@/lib/structured-data';

interface SmartBreadcrumbsProps {
  type: 'city' | 'state';
  cityName?: string;
  stateName: string;
}

export default function SmartBreadcrumbs({ type, cityName, stateName }: SmartBreadcrumbsProps) {
  const breadcrumbs = type === 'city' 
    ? generateCityBreadcrumbs(cityName!, stateName)
    : generateStateBreadcrumbs(stateName);

  // Generate breadcrumb schema - construct current page URL from breadcrumbs
  const currentPageUrl = type === 'city' && cityName
    ? `https://www.thevendinglocator.com/vending-leads/${cityName.toLowerCase().replace(/\s+/g, '-')}-${stateName.toLowerCase().replace(/\s+/g, '-')}`
    : `https://www.thevendinglocator.com/vending-leads/${stateName.toLowerCase().replace(/\s+/g, '-')}`;

  const breadcrumbItems = breadcrumbs.map((b, index) => ({
    name: b.name,
    url: b.current ? currentPageUrl : `https://www.thevendinglocator.com${b.href}`
  }));

  const breadcrumbSchema = generateBreadcrumbListSchema(breadcrumbItems);

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <nav className="bg-white border-b border-gray-200 py-3" aria-label="Breadcrumb">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm text-stone">
            {breadcrumbs.map((breadcrumb, index) => (
              <div key={index} className="flex items-center">
                {index > 0 && <span className="mx-2">/</span>}
                {breadcrumb.current ? (
                  <span className="text-charcoal font-medium" aria-current="page">{breadcrumb.name}</span>
                ) : (
                  <Link 
                    href={breadcrumb.href} 
                    className="hover:text-navy transition-colors"
                  >
                    {breadcrumb.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
