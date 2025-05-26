// 国际化工具函数
import { ui, defaultLang } from './ui';

export type Lang = keyof typeof ui;

// 获取翻译文本的函数
export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

// 使用翻译键获取对应语言的文本
export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

// 获取本地化路径
export function getLocalizedPath(path: string, lang: keyof typeof ui) {
  if (lang === defaultLang) {
    return path;
  }
  return `/${lang}${path}`;
}

// 获取替代语言路径
export function getAlternateLanguagePath(currentPath: string, targetLang: keyof typeof ui) {
  // 移除当前语言前缀和base路径
  let pathWithoutLang = currentPath.replace(/^\/personal_website/, '').replace(/^\/zh/, '').replace(/^\/en/, '') || '/';

  if (targetLang === defaultLang) {
    return `/personal_website${pathWithoutLang}`;
  }

  return `/personal_website/${targetLang}${pathWithoutLang}`;
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
