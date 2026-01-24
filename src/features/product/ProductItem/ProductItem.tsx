import type { Product } from '@/data/myProducts';

type ProductItemProps = Product;

export function ProductItem({
  name,
  description,
  ProductImg,
  productLink,
  repositoryUrl,
}: ProductItemProps) {
  return (
    <div className=" bg-brand-primary rounded-xl shadow-lg h-full">
      <div className="rounded-b-2xl">{ProductImg}</div>
      <div className="px-4 pb-4 flex flex-col justify-between h-[calc(100%-180px)]">
        <div className="pb-4">
          <h5 className="mt-4 text-lg bg-invert inline-block px-1 font-bold text-black">
            {name}
          </h5>
          <p className="text-invert mt-4">{description}</p>
        </div>
        <div className="mt-auto bg-invert grid grid-cols-2 rounded-lg text-center text-black">
          <a className="hover:bg-brand-primary/10 p-2" href={productLink}>
            作品リンク
          </a>
          <a
            className="hover:bg-brand-primary/10  border-l p-2"
            href={repositoryUrl}
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
