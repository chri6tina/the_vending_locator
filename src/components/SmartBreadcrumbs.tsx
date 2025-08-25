import Link from 'next/link';
import { generateCityBreadcrumbs, generateStateBreadcrumbs } from '@/lib/statePageUtils';

interface SmartBreadcrumbsProps {
  type: 'city' | 'state';
  cityName?: string;
  stateName: string;
}

export default function SmartBreadcrumbs({ type, cityName, stateName }: SmartBreadcrumbsProps) {
  const breadcrumbs = type === 'city' 
    ? generateCityBreadcrumbs(cityName!, stateName)
    : generateStateBreadcrumbs(stateName);

  return (
    <nav className="bg-white border-b border-gray-200 py-3">
      <div className="container mx-auto px-4">
        <div className="flex items-center space-x-2 text-sm text-stone">
          {breadcrumbs.map((breadcrumb, index) => (
            <div key={index} className="flex items-center">
              {index > 0 && <span className="mx-2">/</span>}
              {breadcrumb.current ? (
                <span className="text-charcoal font-medium">{breadcrumb.name}</span>
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
  );
}
