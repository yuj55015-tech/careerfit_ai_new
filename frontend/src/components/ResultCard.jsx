import { Sparkles, CheckCircle2, AlertTriangle, Target } from "lucide-react";

function ResultCard({ answer, matchedSkills = [], missingSkills = [], recommendedProjects = [], confidence }) {
  const confidencePct = confidence !== null && confidence !== undefined ? Math.round(confidence * 100) : null;

  return (
    <div className="relative overflow-hidden rounded-[1.75rem] border border-cyan-400/20 bg-slate-900/95 p-6 space-y-6 shadow-[0_0_50px_-18px_rgba(56,189,248,0.45)] animate-[fadeIn_0.4s_ease-out]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-cyan-400/20 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-fuchsia-400/10 to-cyan-300/10 rounded-full blur-2xl" />

      <div className="relative flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <h2 className="flex items-center gap-2 text-lg font-semibold text-white">
          <Sparkles size={18} className="text-cyan-300" />
          AI 분석 결과
        </h2>

        {confidencePct !== null && (
          <div className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-cyan-200 ring-1 ring-cyan-300/20">
            신뢰도 {confidencePct}%
          </div>
        )}
      </div>

      <p className="relative text-slate-200 text-sm leading-relaxed whitespace-pre-line">{answer}</p>

      {matchedSkills.length > 0 && (
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
            <CheckCircle2 size={16} className="text-emerald-500" />
            <span>보유 역량과 일치</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {matchedSkills.map((skill, i) => (
              <span
                key={i}
                className="text-xs bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-lg border border-emerald-100"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {missingSkills.length > 0 && (
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
            <AlertTriangle size={16} className="text-red-500" />
            <span>보완이 필요한 역량</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {missingSkills.map((skill, i) => (
              <span
                key={i}
                className="text-xs bg-red-50 text-red-600 px-2.5 py-1 rounded-lg border border-red-100"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {recommendedProjects.length > 0 && (
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
            <Target size={16} className="text-blue-500" />
            <span>추천 공고·공모전</span>
          </div>
          <ul className="space-y-2">
            {recommendedProjects.map((proj, i) => (
              <li
                key={i}
                className="text-sm text-slate-600 bg-blue-50 border border-blue-100 rounded-lg px-4 py-3"
              >
                {proj}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ResultCard;
