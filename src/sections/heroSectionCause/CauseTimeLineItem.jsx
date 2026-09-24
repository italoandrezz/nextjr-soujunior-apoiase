import Typography from "../../components/Typography";

export default function CauseTimelineItem({
  title,
  description,
  iconSrc,
  altText,
  isLast
}) {
  return (
    <div className={`relative z-10 flex min-h-[132px] w-full items-start gap-6 min-[500px]:min-h-[138px] min-[500px]:gap-7 ${isLast ? '' : 'pb-16'}`}>
      {!isLast && (
        <div className="absolute left-[18px] top-[52px] z-0 h-16 w-px bg-white/35 min-[500px]:left-[21px] min-[500px]:top-[58px]" />
      )}
      <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center bg-[#00021A] min-[500px]:h-[42px] min-[500px]:w-[42px]">
        <img
          src={iconSrc}
          alt={altText || title}
          className="max-h-full max-w-full object-contain"
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-2 pt-0.5">
        <Typography
          variant="body-semibold"
          as="h3"
        >
          {title}
        </Typography>
        <Typography
          variant="body-sm"
          as="p"
          className="max-w-[34rem]"
        >
          {description}
        </Typography>
      </div>
    </div>
  );
}
