import { Mail, Phone, MapPin } from 'lucide-react';
import { CONTACT } from '@/constants/portfolio';

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div>
            <p className="text-lg font-bold text-blue-600 dark:text-blue-400">
              Trần Đức Anh
            </p>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Fullstack Developer · .NET · React Native · Next.js
            </p>
          </div>

          <div className="flex flex-col gap-2 text-sm text-slate-500 dark:text-slate-400">
            <a
              href={`tel:${CONTACT.phone}`}
              className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Phone className="h-4 w-4" />
              {CONTACT.phone}
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Mail className="h-4 w-4" />
              {CONTACT.email}
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              {CONTACT.address}
            </span>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-100 pt-6 text-center dark:border-slate-800">
          <p className="text-xs text-slate-400 dark:text-slate-600">
            © {new Date().getFullYear()} Trần Đức Anh. Built with Next.js & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
