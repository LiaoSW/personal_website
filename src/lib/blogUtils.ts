// 博客相关的工具函数
import { getCollection } from 'astro:content'
import { trimExcerpt } from './utils'
import { template } from '../settings'
import type { Lang } from '../i18n/utils'

/**
 * 生成博客分页的静态路径
 * @param paginate Astro的分页函数
 * @param lang 语言代码
 * @returns 静态路径数组
 */
export async function generateBlogPaths(paginate: any, lang: Lang) {
  const blogEntries = await getCollection("blog").catch(() => []);

  const posts = blogEntries
    .map(post => ({
      title: post.data.title,
      date: post.data.date,
      badge: post.data.tags?.[0] || 'Blog',
      excerpt: trimExcerpt(post.data.excerpt),
      slug: lang === 'zh' 
        ? `${template.base}/blog/${post.id}`
        : `${template.base}/${lang}/blog/${post.id}`,
    }))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return paginate(posts, {
    pageSize: template.postPerPage,
  });
}

/**
 * 生成博客文章的静态路径
 * @param lang 语言代码
 * @returns 静态路径数组
 */
export async function generateBlogPostPaths(lang: Lang) {
  const blogEntries = await getCollection("blog").catch(() => []);
  
  return blogEntries.map(post => ({
    params: { 
      slug: post.id 
    },
    props: { 
      post,
      lang 
    }
  }));
}

/**
 * 根据slug获取博客文章
 * @param slug 文章slug
 * @returns 博客文章数据
 */
export async function getBlogPost(slug: string) {
  const blogEntries = await getCollection("blog").catch(() => []);
  return blogEntries.find(post => post.id === slug);
}
