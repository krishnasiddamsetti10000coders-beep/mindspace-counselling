import { ChevronDown } from "lucide-react";

export interface ServiceData {
  id: number;
  title: string;
  brief: string;
  subServices: string[];
  colorClass: string;
  bgClass: string;
}

interface ServiceCardProps {
  service: ServiceData;
  isExpanded: boolean;
  onExpand: (id: number) => void;
  onCollapse: () => void;
  index: number;
}

export function ServiceCard({
  service,
  isExpanded,
  onExpand,
  onCollapse,
  index,
}: ServiceCardProps) {
  const handleMouseEnter = () => {
    const isMobile = window.matchMedia("(pointer: coarse)").matches;
    if (!isMobile) onExpand(service.id);
  };

  const handleMouseLeave = () => {
    const isMobile = window.matchMedia("(pointer: coarse)").matches;
    if (!isMobile) onCollapse();
  };

  const handleClick = () => {
    const isMobile = window.matchMedia("(pointer: coarse)").matches;
    if (isMobile) {
      if (isExpanded) {
        onCollapse();
      } else {
        onExpand(service.id);
      }
    }
  };

  return (
    <button
      type="button"
      aria-expanded={isExpanded}
      aria-label={`${service.title}: ${service.brief}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      data-ocid={`services.item.${index + 1}`}
      className={[
        "group relative bg-card rounded-2xl border border-border/50 shadow-card text-left",
        "cursor-pointer select-none overflow-hidden",
        "transition-all duration-300 ease-out",
        "hover:shadow-soft hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        isExpanded
          ? "col-span-2 lg:col-span-2 xl:col-span-2 ring-1 ring-primary/30 shadow-soft"
          : "col-span-1",
      ].join(" ")}
    >
      {/* Top accent line */}
      <div
        className={`h-0.5 w-full ${service.bgClass} opacity-80 transition-all duration-300`}
      />

      <div
        className={[
          "flex transition-all duration-300 ease-out",
          isExpanded ? "flex-row gap-0" : "flex-col",
        ].join(" ")}
      >
        {/* ── Collapsed / Left Panel ── */}
        <div
          className={[
            "flex flex-col p-5 transition-all duration-300 ease-out",
            isExpanded
              ? "min-w-[180px] w-[180px] shrink-0 border-r border-border/40"
              : "w-full",
          ].join(" ")}
        >
          <div
            className={`w-9 h-9 ${service.bgClass} rounded-xl flex items-center justify-center mb-3 shrink-0`}
          >
            <span
              className={`text-base font-display font-bold ${service.colorClass}`}
            >
              {service.id}
            </span>
          </div>
          <h3 className="font-display text-base font-semibold text-foreground leading-snug mb-1.5">
            {service.title}
          </h3>
          <p
            className={[
              "font-body text-xs text-muted-foreground leading-relaxed transition-all duration-200",
              isExpanded ? "line-clamp-3" : "line-clamp-2",
            ].join(" ")}
          >
            {service.brief}
          </p>

          {/* Mobile expand indicator */}
          <div className="mt-auto pt-2 flex items-center gap-1 md:hidden">
            <ChevronDown
              className={`w-3.5 h-3.5 ${service.colorClass} transition-transform duration-300 ${
                isExpanded ? "rotate-180" : ""
              }`}
              strokeWidth={2}
            />
            <span className={`text-[10px] font-body ${service.colorClass}`}>
              {isExpanded ? "Less" : "More"}
            </span>
          </div>
        </div>

        {/* ── Expanded Right Panel ── */}
        {isExpanded && (
          <div className="flex flex-col p-5 flex-1 overflow-hidden">
            <p className="font-body text-[10px] uppercase tracking-widest text-muted-foreground mb-3 font-medium">
              What's included
            </p>
            <ul className="space-y-2 overflow-y-auto max-h-[220px] pr-1 scrollbar-thin">
              {service.subServices.map((sub) => (
                <li key={sub} className="flex items-start gap-2">
                  <span
                    className={`mt-1 w-1.5 h-1.5 rounded-full ${service.bgClass} shrink-0`}
                  />
                  <span className="font-body text-xs text-foreground/80 leading-relaxed">
                    {sub}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </button>
  );
}
