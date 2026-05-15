import { Mail, Phone, MapPin, Calendar, Send } from 'lucide-react';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { CONTACT, MAILTO_LINK } from '@/constants/portfolio';

const CONTACT_ITEMS = [
  {
    icon: Phone,
    label: 'Điện thoại',
    value: CONTACT.phone,
    href: `tel:${CONTACT.phone.replace(/\s/g, '')}`,
  },
  {
    icon: Mail,
    label: 'Email',
    value: CONTACT.email,
    href: MAILTO_LINK,
  },
  {
    icon: MapPin,
    label: 'Địa chỉ',
    value: CONTACT.address,
    href: undefined,
  },
  {
    icon: Calendar,
    label: 'Ngày sinh',
    value: CONTACT.dob,
    href: undefined,
  },
];

export function Contact() {
  return (
    <section id="contact" className="bg-slate-50 py-24 dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          label="Liên hệ"
          title="Kết nối với tôi"
          description="Sẵn sàng lắng nghe các cơ hội hợp tác hoặc trao đổi về công nghệ. Hãy liên hệ với tôi!"
        />

        <div className="mx-auto max-w-2xl">
          <Card className="overflow-hidden p-0">
            {/* Header banner */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-8 text-center dark:from-blue-700 dark:to-blue-800">
              <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-white/20 text-xl font-bold text-white backdrop-blur-sm">
                TĐA
              </div>
              <h3 className="text-xl font-bold text-white">Trần Đức Anh</h3>
              <p className="mt-1 text-sm text-blue-100">Fullstack Developer</p>
            </div>

            {/* Contact items */}
            <div className="divide-y divide-slate-100 dark:divide-slate-700">
              {CONTACT_ITEMS.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4 px-8 py-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-900/20">
                    <Icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="mt-0.5 block truncate text-sm font-medium text-slate-800 transition-colors hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-400"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="mt-0.5 text-sm font-medium text-slate-800 dark:text-slate-200">
                        {value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="px-8 py-6 text-center">
              <Button
                variant="primary"
                size="lg"
                href={MAILTO_LINK}
                className="w-full sm:w-auto"
              >
                <Send className="h-4 w-4" />
                Gửi email ngay
              </Button>
              <p className="mt-3 text-xs text-slate-400 dark:text-slate-500">
                Mở ứng dụng Mail với tiêu đề và người nhận đã được điền sẵn
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
