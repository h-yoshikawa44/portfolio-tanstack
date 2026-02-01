import { createFileRoute } from '@tanstack/react-router';
import { HeaderText } from '@/components/HeaderText/HeaderText';
import { Hero } from '@/components/Hero/Hero';
import { SectionBase } from '@/components/SectionBase/SectionBase';
import { SubHeaderText } from '@/components/SubHeaderText/SubHeaderText';

export const Route = createFileRoute('/policy')({
  head: () => ({
    meta: [
      {
        title: "policy | h-yoshikawa44's Portfolio",
      },
    ],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between">
      <Hero mainTitle="Privacy Policy" subTitle="プライバシーポリシー" />
      <SectionBase>
        <HeaderText>情報の外部送信について</HeaderText>
        <div className="flex flex-col gap-y-8">
          <section className="mt-2">
            <SubHeaderText>
              アクセス解析ツール - Google Analytics / Google LLC
            </SubHeaderText>
            <div className="flex flex-col gap-y-4 mt-4">
              <p>
                当サイトへのアクセス数や滞在時間、利用環境や地域ごとの利用者数、流入経路などを分析し、利便性の向上や記事情報の需要調査などを行うために、Google
                Analytics へ情報を送信しています。
              </p>
              <p>送信される情報</p>
              <ul className="list-disc pl-4">
                <li>Cookie などの利用者を識別するための識別子</li>
                <li>閲覧している URL やサイトタイトルなどの情報とその時刻</li>
                <li>
                  ブラウザや OS、端末の種別、画面サイズや IP
                  アドレスなどの利用環境に関する情報
                </li>
              </ul>
              <p>
                Google Analytics はトラフィックデータの収集のために Cookie
                を使用しています。
                このトラフィックデータは匿名で収集されており、個人を特定するものではありません。
                （氏名、住所、メール アドレス、電話番号は含まれません）
              </p>
              <p>
                この機能は Cookie
                を無効にすることで収集を拒否できますので、お使いのブラウザの設定をご確認ください。
              </p>
              <p>
                この機能の利用により収集されたデータは、Google
                社のプライバシーポリシーに基づいて管理されています。
                利用規約・プライバシーポリシーについては以下でご確認ください。
              </p>
              <ul>
                <li>
                  <a
                    className="underline underline-offset-2"
                    href="https://www.google.co.jp/analytics/terms/jp.html"
                  >
                    Google - アナリティクス サービス利用規約
                  </a>
                </li>
                <li>
                  <a
                    className="underline underline-offset-2 "
                    href="https://policies.google.com/"
                  >
                    Google - ポリシーと規約
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </SectionBase>
      <SectionBase>
        <HeaderText>リンクに関して</HeaderText>
        <p className="mt-2">
          当サイトはリンクフリーです。トップページ、記事など、正規に公開しているページであれば、どのページにリンクしていただいても問題ありません。ただしインラインフレームの使用や、画像への直リンクなどは禁止させて頂いております。
        </p>
      </SectionBase>
      <SectionBase>
        <HeaderText>免責事項</HeaderText>
        <p className="mt-2">
          当サイトに掲載する情報は記事公表時点の正しいものを提供するよう努めております。ただし、提唱している情報、広告を含むリンク先などにより、いかなる損失や損害などの被害が発生しても当サイトでは責任を負いかねますのでご了承ください。
        </p>
      </SectionBase>
      <SectionBase>
        <HeaderText>著作権に関して</HeaderText>
        <div className="mt-2 flex flex-col gap-y-4">
          <p>
            当サイトに掲載されている情報についての著作権は放棄しておりません。当サイト記事からの引用に関しましては「引用元の明示」によって無償で引用いただけます。
          </p>
          <p>
            ただし、全文転載はお断りいたしております。引用許可範囲についても、事前予告なくこれを変更することがあります。
          </p>
        </div>
        <p className="mt-8">最終更新日 2023/10/14</p>
      </SectionBase>
    </main>
  );
}
