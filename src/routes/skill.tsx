import { createFileRoute } from '@tanstack/react-router';
import { HeaderText } from '@/components/HeaderText/HeaderText';
import { Hero } from '@/components/Hero/Hero';
import { SectionBase } from '@/components/SectionBase/SectionBase';
import { QUALIFICATIONS } from '@/data/qualification';
import { EDITORS, ENVIRONMENTS, LANG_FRAMEWORKS } from '@/data/skill';
import { SkillItem } from '@/features/skill/SkillItem';

export const Route = createFileRoute('/skill')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between">
      <Hero mainTitle="Skill" subTitle="スキル" />
      <SectionBase>
        <HeaderText>エディタ</HeaderText>
        <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 grid-rows-[minmax(100px,1fr)]">
          {EDITORS.map((editor) => {
            return (
              <li key={editor.name}>
                <SkillItem
                  iconClassName={editor.iconClassName}
                  name={editor.name}
                  description={editor.description}
                />
              </li>
            );
          })}
        </ul>
      </SectionBase>
      <SectionBase>
        <HeaderText>開発環境</HeaderText>
        <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 grid-rows-[minmax(100px,1fr)]">
          {ENVIRONMENTS.map((environment) => {
            return (
              <li key={environment.name}>
                <SkillItem
                  iconClassName={environment.iconClassName}
                  name={environment.name}
                  description={environment.description}
                />
              </li>
            );
          })}
        </ul>
      </SectionBase>
      <SectionBase>
        <HeaderText>言語・フレームワーク</HeaderText>
        <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 grid-rows-[minmax(100px,1fr)] gap-x-4 gap-y-6">
          {LANG_FRAMEWORKS.map((langFramework) => {
            return (
              <li key={langFramework.name}>
                <SkillItem
                  iconClassName={langFramework.iconClassName}
                  name={langFramework.name}
                  description={langFramework.description}
                />
              </li>
            );
          })}
        </ul>
      </SectionBase>
      <SectionBase>
        <HeaderText>所持資格</HeaderText>
        <p className="mt-4 text-invert">
          ※バッジがある資格については、
          <a
            className="text-blue-300"
            href="https://www.credly.com/users/h-yoshikawa44/badges#credly"
            target="_blank"
            rel="noreferrer noopener"
          >
            Credly
          </a>{' '}
          に記録があります。
        </p>
        <table className="mt-6 text-invert border border-table-border w-full">
          <thead>
            <tr className="font-bold text-lg bg-brand-primary border-b border-table-border">
              <th className="p-2">名称</th>
              <th className="p-2 border-l border-table-border">取得年月</th>
            </tr>
          </thead>
          <tbody>
            {QUALIFICATIONS.map((qualification) => {
              return (
                <tr
                  key={qualification.name}
                  className="even:bg-brand-primary border-b border-table-border"
                >
                  <td className="p-2">{qualification.name}</td>
                  <td className="p-2 border-l border-table-border">
                    {qualification.dateOfAcquisition}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </SectionBase>
    </main>
  );
}
