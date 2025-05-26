# 个人网站内容管理重构指南

## 概述

本次重构完成了以下主要改进：

1. **统一内容管理**：将所有用户可编辑的内容集中到 `src/data/content/` 目录
2. **完善多语言支持**：CV页面和Research页面现在完全支持中英文双语
3. **消除硬编码内容**：Research页面的内容从硬编码提取到独立数据文件
4. **改进数据组织**：提供更清晰、更易维护的数据结构

## 主要变更

### 1. 新的目录结构

```
src/data/content/
├── index.ts           # 统一的内容管理接口
├── profile.ts         # 个人资料数据（中英文）
├── cv.ts             # 简历数据（中英文）
├── research.ts       # 研究内容数据（中英文）
├── papers.ts         # 学术论文数据（中英文）
└── README.md         # 详细使用说明
```

### 2. 数据迁移

#### CV数据增强
- **原来**：只有一种语言的基础数据
- **现在**：完整的中英文双语数据，包含详细的描述信息

#### Research页面重构
- **原来**：内容硬编码在组件中
- **现在**：内容提取到 `research.ts` 数据文件，支持中英文

#### 个人资料整合
- **原来**：分散在 `settings.ts` 中
- **现在**：统一在 `profile.ts` 中，包含更完整的信息

### 3. 新的API接口

```typescript
// 统一的内容获取接口
import { getProfile, getCV, getResearch, getPapers } from '@/data/content';

// 使用示例
const currentLang = getCurrentLang(Astro);
const profileData = getProfile(currentLang);  // 获取个人资料
const cvData = getCV(currentLang);            // 获取简历数据
const researchData = getResearch(currentLang); // 获取研究内容
const papersData = getPapers(currentLang);    // 获取论文数据
```

## 使用指南

### 1. 更新个人信息

编辑 `src/data/content/profile.ts`：

```typescript
export const profileData = {
  zh: {
    fullName: '您的中文姓名',
    title: '您的中文职位',
    description: '您的中文简介',
    research_areas: [
      {
        title: '研究领域1',
        description: '研究领域描述',
        field: 'field-key'
      }
    ]
  },
  en: {
    // 对应的英文内容
  }
};
```

### 2. 更新简历信息

编辑 `src/data/content/cv.ts`：

```typescript
export const cvData = {
  zh: {
    experiences: [
      {
        company: '公司名称',
        time: '2020.1 - 2023.12',
        title: '职位',
        location: '地点',
        description: '工作描述'
      }
    ],
    education: [...],
    skills: [...],
    publications: [...]
  },
  en: {
    // 对应的英文内容
  }
};
```

### 3. 更新研究内容

编辑 `src/data/content/research.ts`：

```typescript
export const researchData = {
  zh: {
    intro: '研究介绍',
    approach: '研究方法',
    projects: [
      {
        title: '项目标题',
        description: '项目描述'
      }
    ],
    impact: '研究影响'
  },
  en: {
    // 对应的英文内容
  }
};
```

### 4. 更新论文列表

编辑 `src/data/content/papers.ts`：

```typescript
export const papersData = {
  zh: {
    featured: [...],    // 特色论文
    journals: [...],    // 期刊论文
    conferences: [...], // 会议论文
    patents: [...]      // 专利
  },
  en: {
    // 对应的英文内容
  }
};
```

## 优势

### 1. 更好的维护性
- 所有内容集中管理，易于查找和修改
- 清晰的文件结构和命名规范
- 详细的类型定义确保数据一致性

### 2. 完善的多语言支持
- 所有页面内容都支持中英文切换
- 统一的语言切换机制
- 类型安全的多语言数据访问

### 3. 模块化设计
- 每个数据文件职责单一
- 统一的导入接口
- 便于扩展新的内容类型

### 4. 开发体验改进
- TypeScript 类型支持
- 内置数据验证
- 清晰的错误提示

## 注意事项

1. **数据一致性**：确保中英文版本的数据结构保持一致
2. **时间格式**：统一使用 "YYYY.M - YYYY.M" 格式
3. **字段完整性**：必要字段在两种语言中都要有内容
4. **图标字段**：research_areas 中的 field 字段要对应 `researchIcons.ts` 中的键名

## 后续建议

1. **定期备份**：重要内容修改前建议备份数据文件
2. **版本控制**：使用 Git 跟踪内容变更
3. **内容审核**：定期检查中英文内容的一致性
4. **性能优化**：如果数据量增大，考虑实现懒加载机制

通过这次重构，您的个人网站现在具有了更好的可维护性和扩展性，同时提供了完整的中英文双语支持。
