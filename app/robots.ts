import type { MetadataRoute } from 'next';
export default function robots():MetadataRoute.Robots{return {rules:{userAgent:'*',allow:'/'},sitemap:'https://cup2eat-crunch.lumenmediain.chatgpt.site/sitemap.xml'}}

export const dynamic = 'force-static';
