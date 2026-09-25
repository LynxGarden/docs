import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center text-center flex-1 gap-4 px-4">
      <h1 className="text-3xl font-bold">Lynx — Engineering Docs</h1>
      <p className="text-fd-muted-foreground max-w-xl mx-auto">
        Internal documentation for the Lynx multi-tenant training &amp; physio
        platform — app, backend, and every feature as it ships.
      </p>
      <p>
        <Link href="/docs" className="font-medium underline">
          Open the docs →
        </Link>
      </p>
    </div>
  );
}
