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

const TileContent: React.FC<{ item: Item }> = ({ item }) => (
  <>
    <span className="flex size-11 items-center justify-center rounded-full bg-navy text-gold">
      <item.icon className="size-5" />
    </span>
    <span>
      <span className="block text-xs font-medium tracking-[0.12em] text-gold uppercase">
        {item.label}
      </span>
      <span className="mt-1 block text-sm text-foreground group-hover:text-gold">
        {item.value}
      </span>
    </span>
  </>
)

export const ContactInfoBlock: React.FC = () => {
  return (
    <div className="container">
      <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) =>
          item.href ? (
            <a
              className="group flex flex-col gap-4 bg-card p-6 transition-colors hover:bg-secondary"
              href={item.href}
              key={item.label}
              {...(item.newTab ? { rel: 'noopener noreferrer', target: '_blank' } : {})}
            >
              <TileContent item={item} />
            </a>
          ) : (
            <div className="group flex flex-col gap-4 bg-card p-6" key={item.label}>
              <TileContent item={item} />
            </div>
          ),
        )}
      </div>
    </div>
  )
}
