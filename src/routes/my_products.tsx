import { createFileRoute } from '@tanstack/react-router';
import { HeaderText } from '@/components/HeaderText/HeaderText';
import { Hero } from '@/components/Hero/Hero';
import { SectionBase } from '@/components/SectionBase/SectionBase';
import { SubHeaderText } from '@/components/SubHeaderText/SubHeaderText';
import { EVENT_PRODUCTS, MANAGEMENTS } from '@/data/myProducts';
import { ProductItem } from '@/features/product/ProductItem/ProductItem';

export const Route = createFileRoute('/my_products')({
  head: () => ({
    meta: [
      {
        title: "myProducts | h-yoshikawa44's Portfolio",
      },
      { property: 'og:type', content: 'profile' },
    ],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between">
      <Hero mainTitle="My Products" subTitle="個人で作成した成果物など" />
      <SectionBase>
        <HeaderText>Web</HeaderText>
        <div className="flex flex-col gap-y-8">
          <section className="mt-2">
            <SubHeaderText>運営</SubHeaderText>
            <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {MANAGEMENTS.map((management) => {
                return (
                  <li key={management.name}>
                    <ProductItem
                      name={management.name}
                      description={management.description}
                      ProductImg={management.ProductImg}
                      productLink={management.productLink}
                      repositoryUrl={management.repositoryUrl}
                    />
                  </li>
                );
              })}
            </ul>
          </section>
          <section>
            <SubHeaderText>イベント参加</SubHeaderText>
            <small className="mt-2 block text-invert text-sm">
              ※web1week...1週間で web サービスを作るハッカソンイベント。
            </small>
            <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {EVENT_PRODUCTS.map((eventProduct) => {
                return (
                  <li key={eventProduct.name}>
                    <ProductItem
                      name={eventProduct.name}
                      description={eventProduct.description}
                      ProductImg={eventProduct.ProductImg}
                      productLink={eventProduct.productLink}
                      repositoryUrl={eventProduct.repositoryUrl}
                    />
                  </li>
                );
              })}
            </ul>
          </section>
        </div>
      </SectionBase>
    </main>
  );
}
