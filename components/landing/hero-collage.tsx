import { AppIcon } from "@/components/icons/app-icon";

type CollageStats = {
  lessonCount: number;
  projectCount: number;
};

export function HeroCollage({ stats }: { stats: CollageStats }) {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[540px]">
      <span className="absolute left-[5%] top-[7%] z-[2] flex h-[28%] w-[28%] items-center justify-center rounded-full bg-[#F5C518] text-black">
        <AppIcon name="lesson" size={58} weight="fill" />
      </span>

      <span className="absolute left-[35%] top-[17%] z-[5] h-[5%] w-[5%] rounded-full border-[2.5px] border-black" aria-hidden="true" />

      <div className="absolute left-[34%] top-[0%] z-[4] h-[40%] w-[33%]">
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 160 200" preserveAspectRatio="none" aria-hidden="true">
          <path fill="#111111" d="M80 8c42 0 68 42 68 88 0 52-68 100-68 100S12 148 12 96C12 50 38 8 80 8z" />
        </svg>
        <div className="relative z-10 flex h-[72%] flex-col items-center justify-center pt-2 text-center text-white">
          <span className="text-[11px] font-medium sm:text-sm">Lessons</span>
          <span className="text-3xl font-bold leading-none sm:text-4xl">{stats.lessonCount.toLocaleString("en-US")}</span>
        </div>
      </div>

      <svg className="absolute left-[48%] top-[31%] z-[5] h-[8%] w-[8%] text-black" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 1.5l1.7 8.2 8.3 1.3-8.3 1.3L12 20.5l-1.7-8.2-8.3-1.3 8.3-1.3L12 1.5z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      </svg>

      <span className="absolute right-[4%] top-[4%] z-[3] flex h-[40%] w-[18%] items-center justify-center rounded-full bg-[#C4B5FD] text-black">
        <AppIcon name="code" size={48} weight="fill" />
      </span>

      <span className="absolute left-[2%] top-[39%] z-[3] flex h-[42%] w-[42%] items-center justify-center bg-[#2F6BFF] text-white [border-radius:2.4rem]">
        <AppIcon name="courses" size={76} weight="fill" />
      </span>

      <span className="absolute right-[14%] top-[41%] z-[1] h-[26%] w-[26%] bg-[#F5C518] [border-radius:100%_0_0_0]" aria-hidden="true" />

      <div className="absolute bottom-[2%] left-[35%] z-[4] h-[36%] w-[30%]">
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 160 200" preserveAspectRatio="none" aria-hidden="true">
          <path fill="#7DFFB3" d="M80 192c42 0 68-42 68-88 0-52-68-100-68-100S12 52 12 104c0 46 26 88 68 88z" />
        </svg>
        <div className="relative z-10 flex h-full flex-col items-center justify-end pb-[18%] text-center text-black">
          <span className="text-[11px] font-medium sm:text-sm">Projects</span>
          <span className="text-3xl font-bold leading-none sm:text-4xl">{stats.projectCount.toLocaleString("en-US")}</span>
        </div>
      </div>

      <span className="absolute bottom-[11%] right-[7%] z-[1] h-[17%] w-[17%] rounded-full bg-[#F04E45]" aria-hidden="true" />

      <svg className="absolute bottom-[5%] right-[27%] z-[5] h-[5%] w-[5%] text-black" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 4.5l8.5 15.5h-17L12 4.5z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    </div>
  );
}
