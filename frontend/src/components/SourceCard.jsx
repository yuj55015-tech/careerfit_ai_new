import { FileText } from "lucide-react";

function SourceCard({ sources }) {
  if (!sources || sources.length === 0) {
    return (
      <div className="bg-slate-50 rounded-xl border border-slate-200 p-6 text-sm text-slate-500">
        참고한 공고 데이터가 없습니다.
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-[1.75rem] border border-cyan-400/15 bg-slate-900/90 p-6 shadow-[0_0_45px_-18px_rgba(56,189,248,0.65)]">
      <div className="pointer-events-none absolute right-6 top-0 h-24 w-24 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="flex items-center gap-2 mb-4 text-lg font-semibold text-white">
        <FileText size={18} className="text-cyan-300" />
        <span>참고한 공고 출처</span>
      </div>

      <div className="space-y-3">
        {sources.map((source, index) => (
          <div key={index} className="border-b border-slate-800/80 pb-3 last:border-0 last:pb-0">
            <p className="text-sm font-semibold text-slate-100">
              {source.company} — {source.title}
            </p>
            <p className="text-xs text-slate-400 mt-1">
              필수 스킬: {source.required_skills || "정보 없음"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SourceCard;
