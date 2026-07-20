type Skill = {
  iconClassName: string;
  name: string;
  description: React.ReactElement;
};

export const EDITORS = [
  {
    iconClassName: 'i-devicon-vscode',
    name: 'Visual Studio Code',
    description: <>メインで使用しているエディタ。</>,
  },
  {
    iconClassName: 'i-devicon-intellij',
    name: 'IntelliJ IDEA',
    description: <>Kotlin のリーディングでたまに使用する程度。</>,
  },
] satisfies Skill[];

export const ENVIRONMENTS = [
  {
    iconClassName: 'i-devicon-git',
    name: 'Git',
    description: (
      <>
        普段の案件業務から、個人開発にわたり使用。
        <br />
        差分は VSCode の GUI で確認し、コマンドは CLI で操作することが多い。
      </>
    ),
  },
] satisfies Skill[];

export const AIS = [
  {
    iconClassName: 'i-material-icon-theme-claude',
    name: 'Claude Code',
    description: (
      <>
        案件業務、個人開発で使用。
        <br />
        調査、コーディング（実装、テスト）、レビューなどで活用している。
      </>
    ),
  },
] satisfies Skill[];

export const LANG_FRAMEWORKS = [
  {
    iconClassName: 'i-devicon-html5',
    name: 'HTML（Living Standard）',
    description: (
      <>
        普段は JSX を通して書くことが多い。
        <br />
        プロフェッショナル認定試験 レベル1は取得済み。
      </>
    ),
  },
  {
    iconClassName: 'i-devicon-css3',
    name: 'CSS',
    description: (
      <>
        最近は Tailwind CSS
        を使うことが多いので、直接書く機会は少ないが知識は使っている。
        <br />
        PostCSS, LightningCSS を使って新しめの構文もキャッチアップしていきたい。
      </>
    ),
  },
  {
    iconClassName: 'i-devicon-javascript',
    name: 'JavaScript',
    description: (
      <>
        使用経験は基本的にフロントエンドのみ。
        <br />
        TypeScript をメインで使用しているので、素で使うことはあまりない。
      </>
    ),
  },
  {
    iconClassName: 'i-devicon-typescript',
    name: 'TypeScript',
    description: <>案件業務、個人開発ともにメインで使っている言語。</>,
  },
  {
    iconClassName: 'i-devicon-react',
    name: 'React',
    description: (
      <>
        案件業務、個人開発ともに、フロントエンドでメインに使っている技術。
        <br />
        投稿している技術記事は React 記事が多い。
      </>
    ),
  },
  {
    iconClassName: 'i-devicon-nextjs',
    name: 'Next.js',
    description: (
      <>
        案件業務でメインに使っているフレームワーク。
        <br />
        App Router も経験あり。
      </>
    ),
  },
  {
    iconClassName: 'i-devicon-astro',
    name: 'Astro',
    description: (
      <>
        自ブログで採用。
        <br />
        SSG やるなら Astro
        でいいかなと実感するくらいには扱えるようになったかも。
      </>
    ),
  },
  {
    iconClassName: 'i-devicon-kotlin',
    name: 'Kotlin',
    description: (
      <>
        以前は案件業務で使うことがあったが、最近はご無沙汰。
        <br />
        Java の後継的位置づけということもあり、多少興味がある。
      </>
    ),
  },
  {
    iconClassName: 'i-devicon-spring',
    name: 'Spring Boot',
    description: (
      <>
        これも以前は案件業務で使うことがあったが、最近はご無沙汰。
        <br />
        テンプレートエンジンは使用せず、API としての開発経験のみ。
      </>
    ),
  },
] satisfies Skill[];
