// 统一的内容管理索引文件
// 这个文件提供了所有网站内容的统一访问接口

export { cvData, type CVData, type CVItem, type Publication, type Skill } from './cv';
export { researchData, type ResearchContent, type ResearchProject } from './research';
export { papersData, type PapersData, type Paper } from './papers';
export { profileData, type ProfileData, type ResearchArea } from './profile';

// 语言类型定义
export type Language = 'zh' | 'en';

// 通用的内容获取函数
export function getContentByLanguage<T>(
  data: { zh: T; en: T },
  language: Language
): T {
  return data[language] || data.zh; // 默认返回中文
}

// 便捷的内容访问函数
import { cvData } from './cv';
import { researchData } from './research';
import { papersData } from './papers';
import { profileData } from './profile';

export const getCV = (lang: Language): CVData => getContentByLanguage(cvData, lang);
export const getResearch = (lang: Language): ResearchContent => getContentByLanguage(researchData, lang);
export const getPapers = (lang: Language): PapersData => getContentByLanguage(papersData, lang);
export const getProfile = (lang: Language): ProfileData => getContentByLanguage(profileData, lang);

// 内容验证函数（可选，用于开发时检查数据完整性）
export function validateContent() {
  const languages: Language[] = ['zh', 'en'];
  const errors: string[] = [];

  // 检查所有数据是否包含必要的语言版本
  languages.forEach(lang => {
    try {
      getCV(lang);
      getResearch(lang);
      getPapers(lang);
      getProfile(lang);
    } catch (error) {
      errors.push(`Missing ${lang} content: ${error}`);
    }
  });

  if (errors.length > 0) {
    console.warn('Content validation errors:', errors);
  }

  return errors.length === 0;
}
