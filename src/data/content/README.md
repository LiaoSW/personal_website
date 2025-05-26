# 网站内容数据管理

这个目录包含了个人网站的所有可编辑内容数据，支持中英文双语。

## 目录结构

```
src/data/content/
├── README.md          # 本说明文件
├── index.ts           # 统一的内容管理索引文件
├── profile.ts         # 个人资料数据
├── cv.ts             # 简历数据（教育背景、工作经历、技能等）
├── research.ts       # 研究内容数据
└── papers.ts         # 学术论文数据
```

## 数据文件说明

### 1. profile.ts - 个人资料
包含基本个人信息和研究领域：
- 姓名、职位、机构信息
- 个人简介和研究描述
- 研究领域列表
- 联系方式

### 2. cv.ts - 简历数据
包含完整的简历信息：
- 工作经历 (experiences)
- 教育背景 (education)
- 技能专长 (skills)
- 学术发表 (publications)

### 3. research.ts - 研究内容
包含研究页面的详细内容：
- 研究介绍和方法
- 当前研究项目
- 研究影响和应用

### 4. papers.ts - 学术论文
包含分类的学术发表：
- 特色论文 (featured)
- 期刊论文 (journals)
- 会议论文 (conferences)
- 专利 (patents)

## 使用方法

### 导入和使用数据

```typescript
// 导入特定数据
import { getProfile, getCV, getResearch, getPapers } from '@/data/content';

// 在组件中使用
const currentLang = getCurrentLang(Astro);
const profileData = getProfile(currentLang);
const cvData = getCV(currentLang);
```

### 添加新内容

1. **添加新的工作经历**：
   编辑 `cv.ts` 文件，在 `experiences` 数组中添加新项目

2. **添加新的研究项目**：
   编辑 `research.ts` 文件，在 `projects` 数组中添加新项目

3. **添加新的论文**：
   编辑 `papers.ts` 文件，在相应的分类中添加新论文

### 多语言支持

所有数据文件都支持中英文双语：

```typescript
export const dataName = {
  zh: {
    // 中文内容
  },
  en: {
    // 英文内容
  }
};
```

## 数据验证

使用内置的验证函数检查数据完整性：

```typescript
import { validateContent } from '@/data/content';

// 验证所有内容是否包含必要的语言版本
const isValid = validateContent();
```

## 注意事项

1. **保持数据结构一致性**：确保中英文版本的数据结构相同
2. **时间格式统一**：使用统一的时间格式（如 "2020.1 - 2021.12"）
3. **字段完整性**：确保必要字段在两种语言中都有对应内容
4. **类型安全**：利用 TypeScript 类型定义确保数据类型正确

## 迁移说明

原有的数据文件已迁移到新的结构：
- `src/data/cv.ts` → `src/data/content/cv.ts`
- `src/settings.ts` 中的 profile 数据 → `src/data/content/profile.ts`
- Research 页面的硬编码内容 → `src/data/content/research.ts`

旧的导入方式仍然兼容，但建议使用新的统一接口。
