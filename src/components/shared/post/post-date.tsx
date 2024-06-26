import { cn } from '@/lib/utils'
import { CalendarIcon } from 'lucide-react'
import React from 'react'

interface DateProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    date: string
}

export default function PostDate({ date, className }: DateProps) {
    const formatDate = new Intl.DateTimeFormat("ru", { dateStyle: "medium" }).format(new Date(date));

    return (
        <div className={cn(
            'flex items-center gap-2',
            className
            )}>
            <CalendarIcon />
            <span className='truncate'>{`${formatDate}`}</span>
        </div>
    )
}
