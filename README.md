# Chaofan Zhang Academic Homepage

这是基于 Academic Pages 的个人学术网站，内容由 `source_material/网页提纲.docx` 和 `files/papers/` 中的论文整理生成。

## 发布前需要填写

编辑 `_config.yml`：

- `url`：个人主页地址，例如 `https://username.github.io`
- `repository`：GitHub 仓库，例如 `username/username.github.io`
- `author.googlescholar`：Google Scholar 个人主页
- `author.github`：GitHub 用户名
- 如需调整邮箱，修改 `author.email`

## GitHub Pages 发布

1. 将仓库命名为 `你的用户名.github.io`。
2. 将代码推送到 `main` 分支。
3. 在仓库 Settings → Pages 中选择 **GitHub Actions** 作为 Source。
4. `.github/workflows/pages.yml` 会自动构建并发布网站。

## 内容位置

- 首页：`_pages/about.md`
- 研究方向：`_pages/research.md`
- 论文列表：`_pages/publications.html`
- 奖项：`_pages/awards.md`
- 单篇论文：`_publications/`
- 图片：`images/`
- 论文 PDF：`files/papers/`
- 自定义样式：`_sass/_custom.scss`

