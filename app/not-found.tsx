import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center space-y-8">
        <div>
          <h1 className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-purple-600">404</h1>
          <h2 className="mt-4 text-2xl font-bold text-slate-900">Seite nicht gefunden</h2>
          <p className="mt-4 text-slate-600">
            Hoppla! Die Seite, nach der du suchst, existiert leider nicht oder wurde verschoben.
          </p>
        </div>
        
        <Link 
          href="/" 
          className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-colors shadow-lg active:scale-95"
        >
          <ArrowLeft className="w-5 h-5" />
          Zurück zur Startseite
        </Link>
      </div>
    </div>
  );
}
