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
    description: <>Kotlin のコーディングでたまに使用する程度。</>,
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
];

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
        CSS in JS の中で書いていたりもする。
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
        実務使用経験ありであるが、基本的にフロントエンドのみ。
        <br />
        TypeScript をメインで使用しているので、素で使うことはあまりない。
      </>
    ),
  },
  {
    iconClassName: 'i-devicon-typescript',
    name: 'TypeScript',
    description: (
      <>
        自分の中でフロントエンド側のコードを書く際のデファクトにしたい言語。
        <br />
        得意言語として伸ばしていきたい。
      </>
    ),
  },
  {
    iconClassName: 'i-devicon-react',
    name: 'React',
    description: (
      <>
        実務使用経験あり。
        <br />
        自分のスキルのうち、フロントエンドでメインにしたい技術。投稿している技術記事は
        React 記事が多い。
      </>
    ),
  },
  {
    iconClassName: 'i-devicon-nextjs',
    name: 'Next.js',
    description: (
      <>
        自分の得意技術として伸ばしていきたいフレームワーク。
        <br />
        App Router も実務で書いてはいる。
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
        個人勉強 + 実務でたまに書く程度。
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
        実務使用経験あり。
        <br />
        テンプレートエンジンは使用せず、API としての開発経験のみ。
      </>
    ),
  },
];
