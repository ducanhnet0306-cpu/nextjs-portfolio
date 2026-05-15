import { Target, TrendingUp, User, Calendar, Mail, MapPin, Phone } from 'lucide-react';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Card } from '@/components/ui/Card';
import { ABOUT_DATA, CONTACT } from '@/constants/portfolio';

export function About() {
  return (
    <section id="about" className="bg-white py-24 dark:bg-slate-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="Về tôi"
          title="Giới thiệu bản thân"
          description="Fullstack Developer với niềm đam mê xây dựng sản phẩm có giá trị thực tế và không ngừng cải thiện kỹ năng."
        />

        {/* Highlights */}
        <div className="mb-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {ABOUT_DATA.highlights.map((h) => (
            <Card key={h.label} className="text-center">
              <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{h.label}</p>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{h.desc}</p>
            </Card>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Personal info */}
          <Card>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/40">
                <User className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white">Thông tin cá nhân</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm">
                <Calendar className="h-4 w-4 flex-shrink-0 text-slate-400" />
                <span className="text-slate-600 dark:text-slate-300">{CONTACT.dob}</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4 flex-shrink-0 text-slate-400" />
                <a
                  href={`tel:${CONTACT.phone}`}
                  className="text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors"
                >
                  {CONTACT.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 flex-shrink-0 text-slate-400" />
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="break-all text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors"
                >
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5 text-slate-400" />
                <span className="text-slate-600 dark:text-slate-300">{CONTACT.address}</span>
              </li>
            </ul>
          </Card>

          {/* Short goal */}
          <Card>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/40">
                <Target className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white">Mục tiêu ngắn hạn</h3>
            </div>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {ABOUT_DATA.shortGoal}
            </p>
          </Card>

          {/* Long goal */}
          <Card>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/40">
                <TrendingUp className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white">Mục tiêu dài hạn</h3>
            </div>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {ABOUT_DATA.longGoal}
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
