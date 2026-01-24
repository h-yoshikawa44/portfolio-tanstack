import { createFileRoute } from '@tanstack/react-router';
import { Image } from '@unpic/react';
import zennIcon from '@/assets/icons/zenn-logo-only.svg';
import myIcon from '@/assets/images/my-icon.png';
import { HeaderText } from '@/components/HeaderText/HeaderText';
import { Hero } from '@/components/Hero/Hero';
import { SectionBase } from '@/components/SectionBase/SectionBase';

export const Route = createFileRoute('/')({ component: Home });

function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between">
      <Hero
        mainTitle={`h-yoshikawa44's Portfolio`}
        subTitle="よしのポートフォリオ"
      />
      <SectionBase>
        <HeaderText>
          当サイト
          <wbr />
          について
        </HeaderText>
        <p className="text-invert mt-2">
          Web Developer である h-yoshikawa44 のポートフォリオサイトです。
          <br />
          経験スキルや個人開発の履歴、各種技術活動に関するアカウントのリンクなどを集約しています。
        </p>
      </SectionBase>
      <SectionBase>
        <HeaderText>
          管理人
          <wbr />
          プロフィール
        </HeaderText>
        <div className="mt-2 p-4 bg-brand-primary rounded-xl text-invert">
          <div className="grid grid-cols-[1fr_2fr] md:grid-cols-[1fr_4fr]">
            <div className="p-1 rounded-[50%] bg-white w-20 h-20 md:w-26 md:h-26 flex justify-center items-center">
              <Image src={myIcon} alt="myIcon" width={88} height={64} />
            </div>
            <div className="flex flex-col justify-center gap-y-2">
              <p className="text-lg">Hitomi Yoshikawa</p>
              <p className="text-sm">よし（h-yoshikawa44）</p>
            </div>
          </div>
          <div className="mt-4">
            <p>Web Developer。</p>
            <br />
            <p>
              2017/10からエンジニアをやっています。
              <br />
              3年ほどサーバサイドメインでしたが、フロントエンドに転向して、現在はフロントエンドエンジニアとして仕事しています。
            </p>
            <p>比較的慣れているのは TypeScript × React、Next.js あたり。</p>
          </div>
          <table className="mt-4">
            <tbody>
              <tr>
                <th>SNS:</th>
                <td className="text-center w-20 place-items-baseline px-4 py-1">
                  <div className="flex gap-x-2">
                    <a
                      className=" bg-white rounded-[50%] w-9 h-9 p-1 flex items-center justify-center"
                      title="X - @yoshi44_lion"
                      href="https://x.com/yoshi44_lion"
                    >
                      <span className="i-devicon-twitter w-6 h-6"></span>
                    </a>
                    <a
                      className=" bg-white rounded-[50%] w-9 h-9 p-1 flex items-center justify-center"
                      title="Bluesky - @h-yoshikawa44.bsky.social"
                      href="https://bsky.app/profile/h-yoshikawa44.bsky.social"
                    >
                      <span className="i-bi-bluesky w-6 h-6 bg-black"></span>
                    </a>
                  </div>
                </td>
              </tr>
              <tr>
                <th>技術活動:</th>
                <td className="text-center w-20 place-items-baseline px-4 py-1">
                  <div className="flex gap-x-2">
                    <a
                      className="bg-white rounded-[50%] w-9 h-9 p-1 flex items-center justify-center"
                      title="GitHub - @h-yoshikawa44"
                      href="https://github.com/h-yoshikawa44"
                    >
                      <span className="i-devicon-github w-6 h-6"></span>
                    </a>
                    <a
                      className="bg-white rounded-[50%] w-9 h-9 p-1 flex items-center justify-center"
                      title="個人ブログ"
                      href="https://changeofpace.site"
                    >
                      <span className="i-bi-feather w-6 h-6 bg-black"></span>
                    </a>
                    <a
                      className="bg-white rounded-[50%] w-9 h-9 p-1 flex items-center justify-center"
                      title="Zenn - h_yoshikawa0724"
                      href="https://zenn.dev/h_yoshikawa0724"
                    >
                      <Image
                        src={zennIcon}
                        alt="Zenn Icon"
                        width={24}
                        height={24}
                      />
                    </a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </SectionBase>
    </main>
  );
}
