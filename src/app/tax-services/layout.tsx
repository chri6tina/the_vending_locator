// Layout for tax-services routes
// This ensures all tax-services pages are treated as dynamic and skip build-time data collection
export const dynamic = 'force-dynamic';
export const revalidate = 0;
export const fetchCache = 'force-no-store';

export default function TaxServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

