import { Clock, Mail, MapPin, Phone, type LucideIcon } from 'lucide-react'
import React from 'react'

import { firmInfo } from '@/endpoints/seed/avukat-data'

type Item = {
  href?: string
  icon: LucideIcon
  label: string
  newTab?: boolean
  value: string
}

const items: Item[] = [
  {
    href: firmInfo.mapsUrl,
    icon: MapPin,
    label: 'Adres',
    newTab: true,
    value: firmInfo.address,
  },
  {
    href: `tel:${firmInfo.phone.replace(/\s/g, '')}`,
    icon: Phone,
    value: firmInfo.phone,
    label: 'Telefon',
  },
  {
    href: `mailto:${firmInfo.email}`,
    icon: Mail,
    label: 'E-posta',
    value: firmInfo.email,
  },
  {
    icon: Clock,
    label: 'Çalışma Saatleri',
    value: 'Hafta içi 09:00 – 18:00',
  },
]

const Row: React.FC<{ item: Item }> = ({ item }) => {
  const content = (
    <>
      <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-white/15 text-gold">
        <item.icon className="size-4" />
      </span>
      <span>
        <span className="block text-[0.7rem] font-medium tracking-[0.14em] text-gold uppercase">
          {item.label}
        </span>
        <span className="mt-0.5 block text-sm text-navy-foreground/90">{item.value}</span>
      </span>
    </>
  )

  if (!item.href) {
    return <div className="flex items-start gap-4">{content}</div>
  }

  return (
    <a
      className="group flex items-start gap-4 transition-opacity hover:opacity-80"
      href={item.href}
      {...(item.newTab ? { rel: 'noopener noreferrer', target: '_blank' } : {})}
    >
      {content}
    </a>
  )
}

export const ContactInfoBlock: React.FC = () => {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(firmInfo.mapQuery)}&output=embed`

  return (
    <div className="container">
      <div className="grid overflow-hidden rounded-lg border border-border lg:grid-cols-2">
        <div className="flex flex-col justify-center gap-10 bg-navy p-8 text-navy-foreground sm:p-12">
          <div>
            <span className="text-xs font-medium tracking-[0.2em] text-gold uppercase">
              Bize Ulaşın
            </span>
            <h2 className="mt-3 font-serif text-2xl font-normal sm:text-3xl">
              Hukuki danışmanlık için buradayız
            </h2>
            <p className="mt-3 max-w-sm text-sm text-navy-foreground/70">
              Sorularınız ve randevu talepleriniz için aşağıdaki kanallardan bize
              ulaşabilirsiniz.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            {items.map((item) => (
              <Row item={item} key={item.label} />
            ))}
          </div>
        </div>
        <div className="min-h-[22rem] lg:min-h-full">
          <iframe
            className="size-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={mapSrc}
            title={`${firmInfo.name} - Google Haritalar Konumu`}
          />
        </div>
      </div>
    </div>
  )
}
