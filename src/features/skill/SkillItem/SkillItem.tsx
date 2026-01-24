type SkillItemProps = {
  iconClassName: string;
  name: string;
  description: React.ReactElement;
};

export function SkillItem({
  iconClassName,
  name,
  description,
}: SkillItemProps) {
  return (
    <div className="flex gap-x-8 items-center">
      <div className="bg-white rounded-[50%] w-20 h-20 p-1 flex items-center justify-center shrink-0">
        <span className={`${iconClassName} w-14 h-14`}></span>
      </div>
      <div>
        <h4 className="text-lg bg-invert inline p-1 font-bold text-black">
          {name}
        </h4>
        <p className="text-invert mt-1">{description}</p>
      </div>
    </div>
  );
}
