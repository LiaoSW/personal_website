// 国际化工具函数
import { ui, defaultLang } from './ui';

export type Lang = keyof typeof ui;

// 获取翻译文本的函数
export function getLangFromUrl(url: URL) {
  // 移除base路径后再检查语言
  const pathWithoutBase = url.pathname.replace(/^\/personal_website/, '');
  const [, lang] = pathWithoutBase.split('/');

  // 如果路径中有语言代码且是支持的语言，返回该语言
  if (lang && lang in ui) return lang as keyof typeof ui;

  // 否则返回默认语言
  return defaultLang;
}

// 从Astro对象中获取当前语言（优化版本）
export function getCurrentLang(astro: any): Lang {
  // 优先使用Astro的currentLocale
  if (astro.currentLocale && astro.currentLocale in ui) {
    return astro.currentLocale as Lang;
  }

  // 回退到URL解析
  return getLangFromUrl(astro.url);
}

// 使用翻译键获取对应语言的文本
export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

// 获取本地化路径
export function getLocalizedPath(path: string, lang: keyof typeof ui) {
  const basePath = '/personal_website';

  if (lang === defaultLang) {
    return `${basePath}${path}`;
  }
  return `${basePath}/${lang}${path}`;
}

// 获取替代语言路径
export function getAlternateLanguagePath(currentPath: string, targetLang: keyof typeof ui) {
  // 移除base路径
  let pathWithoutBase = currentPath.replace(/^\/personal_website/, '');

  // 移除当前语言前缀
  pathWithoutBase = pathWithoutBase.replace(/^\/zh/, '').replace(/^\/en/, '') || '/';

  // 生成目标语言路径
  if (targetLang === defaultLang) {
    return `/personal_website${pathWithoutBase}`;
  }

  return `/personal_website/${targetLang}${pathWithoutBase}`;
}

// 检查是否为支持的语言
export function isValidLang(lang: string): lang is keyof typeof ui {
  return lang in ui;
}

// 获取当前页面的所有语言版本
export function getLanguageAlternates(currentPath: string) {
  const alternates: Array<{ lang: keyof typeof ui; path: string; label: string }> = [];

  Object.keys(ui).forEach((lang) => {
    const langKey = lang as keyof typeof ui;
    alternates.push({
      lang: langKey,
      path: getAlternateLanguagePath(currentPath, langKey),
      label: ui[langKey]['lang.switch_to_chinese'] === '中文' ? 'English' : '中文'
    });
  });

  return alternates;
}
