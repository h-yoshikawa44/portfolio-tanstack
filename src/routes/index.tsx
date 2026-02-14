import { createFileRoute } from '@tanstack/react-router';
import { Image } from '@unpic/react';
import { CircularText } from '@/anime-components/CircularText/CircularText';
import zennIcon from '@/assets/icons/zenn-logo-only.svg';
import myIcon from '@/assets/images/my-icon.png';
import { HeaderText } from '@/components/HeaderText/HeaderText';
import { Hero } from '@/components/Hero/Hero';
import { SectionBase } from '@/components/SectionBase/SectionBase';
import { SOCIAL_LINK } from '@/data/social';

export const Route = createFileRoute('/')({ component: Home });

function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between">
      <Hero
        mainTitle={`h-yoshikawa44's Portfolio`}
        subTitle="よしのポートフォリオ"
      />
      <div className="grow w-full bg-brand-secondary">
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
            <div className="flex gap-x-6 md:gap-x-8">
              <div className="relative">
                <CircularText text="h-yoshikawa44 h-yoshikawa44 " />
                <div className="p-1 rounded-[50%] bg-white w-20 h-20 md:w-24 md:h-24 flex justify-center items-center bottom-6 left-6 absolute">
                  <Image src={myIcon} alt="myIcon" width={88} height={64} />
                </div>
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
                        href={SOCIAL_LINK.X}
                      >
                        <span className="i-devicon-twitter w-6 h-6 text-icon"></span>
                      </a>
                      <a
                        className=" bg-white rounded-[50%] w-9 h-9 p-1 flex items-center justify-center"
                        title="Bluesky - @h-yoshikawa44.bsky.social"
                        href={SOCIAL_LINK.BLUESKY}
                      >
                        <span className="i-bi-bluesky w-6 h-6 bg-icon"></span>
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
                        href={SOCIAL_LINK.GITHUB}
                      >
                        <span className="i-devicon-github w-6 h-6 text-icon"></span>
                      </a>
                      <a
                        className="bg-white rounded-[50%] w-9 h-9 p-1 flex items-center justify-center"
                        title="個人ブログ"
                        href={SOCIAL_LINK.BLOG}
                      >
                        <span className="i-bi-feather w-6 h-6 bg-icon"></span>
                      </a>
                      <a
                        className="bg-white rounded-[50%] w-9 h-9 p-1 flex items-center justify-center"
                        title="Zenn - h_yoshikawa0724"
                        href={SOCIAL_LINK.ZENN}
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
      </div>
    </main>
  );
}
