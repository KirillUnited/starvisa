'use client'
import React from 'react'
import styled from 'styled-components';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image'
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface ItemProps {
    slug: string,
    thumbnail?: string, 
    title?: string,
}
interface Props {
    list: ItemProps[]
}

function InfoList({ list }: Props) {
    return (
        <List className='grid'>
            {
                list?.map(({ slug, thumbnail, title }: ItemProps) => {
                    return (
                        <Card
                            key={slug}
                            className={cn(
                                'flex flex-col text-center',
                                'shadow-none border-none'
                            )}
                        >
                            <Image
                                src={`${thumbnail}`}
                                width={190}
                                height={190}
                                alt={`${title}` || ''}
                                className='object-contain object-center aspect-square mx-auto'
                            />
                            <CardHeader>
                                <CardTitle className='text-sm lg:text-base'>{title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Button asChild>
                                    <Link href={`/services/posts/${slug}`}>подробнее</Link>
                                </Button>
                            </CardContent>
                        </Card>

                    )
                })
            }
        </List>
    )
}

const List = styled.div`
    --primary: 1 59% 57%;
    
    grid-template-columns: repeat(auto-fill, minmax(min(360px, 100%), 1fr));
    gap: clamp(20px, 4vw, 40px);
`;

export default InfoList