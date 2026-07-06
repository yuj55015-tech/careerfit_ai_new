import { Sparkles, CheckCircle2, AlertTriangle, Target } from "lucide-react";

function ResultCard({ answer, matchedSkills = [], missingSkills = [], recommendedProjects = [], confidence }) {
  const confidencePct = confidence !== null && confidence !== undefined ? Math.round(confidence * 100) : null;

  return (
    <div className="relative bg-white rounded-xl shadow-sm border-l-4 border-emerald-500 p-6 space-y-5 overflow-hidden animate-[fadeIn_0.4s_ease-out]">
      {/* 은은한 배경 광채 — 팔레트 안에서만 */}
      <div className="pointer-events-none absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-blue-400/10 to-emerald-400/10 rounded-full blur-2xl" />

      <div className="relative flex items-center justify-between">
        <h2 className="flex items-center gap-2 text-lg font-semibold text-slate-700">
          <Sparkles size={18} className="text-blue-500" />
          AI 분석 결과
        </h2>

        {confidencePct !== null && (
          <div className="flex items-center gap-2">
            <div className="w-16 h-1.5 bg-slate-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full transition-all duration-700 ease-out"
                style={{ width: `${confidencePct}%` }}
              />
            </div>
            <span className="text-xs font-medium text-blue-600">{confidencePct}%</span>
          </div>
        )}
      </div>

      <p className="relative text-slate-600 text-sm leading-relaxed whitespace-pre-line">{answer}</p>

      {matchedSkills.length > 0 && (
        <div className="relative">
          <h3 className="flex items-center gap-1.5 text-sm font-medium text-slate-700 mb-2">
            <CheckCircle2 size={14} className="text-emerald-500" />
            보유 역량과 일치
          </h3>
          <div className="flex flex-wrap gap-2">
            {matchedSkills.map((skill, i) => (
              <span
                key={i}
                className="text-xs bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-lg border border-emerald-100 transition-transform hover:scale-105"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {missingSkills.length > 0 && (
        <div className="relative">
          <h3 className="flex items-center gap-1.5 text-sm font-medium text-slate-700 mb-2">
            <AlertTriangle size={14} className="text-red-500" />
            보완이 필요한 역량
          </h3>
          <div className="flex flex-wrap gap-2">
            {missingSkills.map((skill, i) => (
              <span
                key={i}
                className="text-xs bg-red-50 text-red-600 px-2.5 py-1 rounded-lg border border-red-100 transition-transform hover:scale-105"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {recommendedProjects.length > 0 && (
        <div className="relative">
          <h3 className="flex items-center gap-1.5 text-sm font-medium text-slate-700 mb-2">
            <Target size={14} className="text-blue-500" />
            추천 공고·공모전
          </h3>
          <ul className="space-y-1.5">
            {recommendedProjects.map((proj, i) => (
              <li
                key={i}
                className="text-sm text-slate-600 bg-blue-50/50 border border-blue-100 rounded-lg px-3 py-2"
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