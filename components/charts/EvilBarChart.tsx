"use client";

import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ReferenceLine,
  ResponsiveContainer,
  type TooltipProps,
} from "recharts";
import { useCallback, useMemo, useRef, useState, useEffect } from "react";
import { CHART_DATA } from "@/lib/data";

// Spring-based animated number hook
function useSpringNumber(target: number, stiffness = 0.18) {
  const [current, setCurrent] = useState(target);
  const rafRef = useRef<number | null>(null);
  const currentRef = useRef(target);

  useEffect(() => {
    currentRef.current = target;
    const animate = () => {
      const diff = target - currentRef.current;
      if (Math.abs(diff) < 0.5) {
        currentRef.current = target;
        setCurrent(Math.round(target));
        return;
      }
      currentRef.current += diff * stiffness;
      setCurrent(Math.round(currentRef.current));
      rafRef.current = requestAnimationFrame(animate);
    };

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [target, stiffness]);

  return current;
}

// Custom bar shape with evil-chart dimming effect
interface EvilBarProps {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  index?: number;
  activeIndex: number;
}

function EvilBarShape({ x = 0, y = 0, width = 0, height = 0, index = 0, activeIndex }: EvilBarProps) {
  const isActive = index === activeIndex;
  const r = 4;

  return (
    <g>
      <path
        d={`M${x + r},${y} L${x + width - r},${y} Q${x + width},${y} ${x + width},${y + r} L${x + width},${y + height} L${x},${y + height} L${x},${y + r} Q${x},${y} ${x + r},${y} Z`}
        fill="#0a0a0a"
        fillOpacity={isActive ? 1 : 0.15}
        stroke={isActive ? "rgba(24,24,27,0.3)" : "none"}
        strokeWidth={isActive ? 1 : 0}
        style={{ transition: "fill-opacity 0.2s ease" }}
      />
    </g>
  );
}

// Reference line label pill
function RefLineLabel({
  viewBox,
  value,
}: {
  viewBox?: { x?: number; y?: number; width?: number };
  value: number;
}) {
  const x = (viewBox?.x ?? 0);
  const y = viewBox?.y ?? 0;
  const label = value.toLocaleString("en-IN");
  const pillW = label.length * 7.5 + 16;

  return (
    <g>
      <rect
        x={x - pillW - 4}
        y={y - 10}
        width={pillW}
        height={20}
        rx={4}
        fill="#0a0a0a"
      />
      <text
        x={x - pillW / 2 - 4}
        y={y + 4}
        fill="#fff"
        fontSize={11}
        fontWeight={700}
        fontFamily="Inter, sans-serif"
        textAnchor="middle"
      >
        {label}
      </text>
      <circle cx="99%" cy={y} r={3} fill="#0a0a0a" />
    </g>
  );
}

export function EvilBarChart() {
  const maxEntry = useMemo(() => {
    return CHART_DATA.reduce(
      (max, d, i) => (d.value > max.value ? { i, ...d } : max),
      { i: 0, ...CHART_DATA[0] }
    );
  }, []);

  const [activeIndex, setActiveIndex] = useState<number>(maxEntry.i);
  const [isHovering, setIsHovering] = useState(false);

  const selected = isHovering ? CHART_DATA[activeIndex] : maxEntry;
  const springValue = useSpringNumber(selected?.value ?? maxEntry.value);

  const handleMouseMove = useCallback(
    (state: { activeTooltipIndex?: number }) => {
      if (state?.activeTooltipIndex != null) {
        setActiveIndex(state.activeTooltipIndex);
        setIsHovering(true);
      }
    },
    []
  );

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
    setActiveIndex(maxEntry.i);
  }, [maxEntry.i]);

  const displayMonth = selected?.month ?? maxEntry.month;

  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          marginBottom: 20,
          padding: "20px 20px 0",
        }}
      >
        <div>
          <div
            style={{
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              color: "#888882",
              marginBottom: 4,
            }}
          >
            [spending] monthly
          </div>
          <div
            style={{
              fontSize: 32,
              fontWeight: 700,
              letterSpacing: "-1.5px",
              color: "#0a0a0a",
              lineHeight: 1,
              fontVariantNumeric: "tabular-nums",
            }}
          >
            ₹{springValue.toLocaleString("en-IN")}
          </div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div
            style={{
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              color: "#888882",
              marginBottom: 4,
            }}
          >
            [month]
          </div>
          <div style={{ fontSize: 12, fontWeight: 500, color: "#555550" }}>{displayMonth}</div>
        </div>
      </div>

      {/* Chart */}
      <div style={{ height: 220, padding: "0 8px 8px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={CHART_DATA}
            margin={{ left: 44, right: 12, top: 8, bottom: 0 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "rgba(24,24,27,0.4)",
                fontSize: 11,
                fontWeight: 500,
                fontFamily: "Inter, sans-serif",
              }}
              tickMargin={10}
            />
            <Tooltip content={() => null} cursor={false} />
            <Bar
              dataKey="value"
              barSize={28}
              shape={(props: EvilBarProps) => (
                <EvilBarShape {...props} activeIndex={isHovering ? activeIndex : maxEntry.i} />
              )}
            />
            <ReferenceLine
              y={springValue}
              stroke="rgba(24,24,27,0.4)"
              strokeDasharray="4 3"
              strokeWidth={1}
              label={(props) => (
                <RefLineLabel viewBox={props.viewBox} value={selected?.value ?? maxEntry.value} />
              )}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
