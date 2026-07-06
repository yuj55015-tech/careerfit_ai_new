import { useState } from "react";
import { ArrowRight } from "lucide-react";

function InputForm({ onSubmit, isLoading }) {
  const [major, setMajor] = useState("");
  const [skillsInput, setSkillsInput] = useState("");
  const [jobType, setJobType] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const skills = skillsInput.split(",").map((skill) => skill.trim()).filter(Boolean);

    if (!major || !skills.length || !jobType) {
      return;
    }

    onSubmit({ major, skills, jobType });
  }

  return (
    <form onSubmit={handleSubmit} className="relative overflow-hidden rounded-[1.75rem] border border-fuchsia-500/20 bg-white/10 p-6 shadow-[0_0_40px_-20px_rgba(236,72,153,0.75)] backdrop-blur-xl">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-fuchsia-500/20 to-transparent blur-3xl" />
      <div className="flex items-start justify-between gap-4 mb-5 relative">
        <div>
          <h2 className="text-lg font-semibold text-white">내 정보 입력</h2>
          <p className="text-sm text-slate-200/80 mt-1">전공, 스킬, 관심 직무를 입력하면 맞춤형 AI 분석 결과를 제공합니다.</p>
        </div>
      </div>

      <div className="space-y-4 relative">
        <div>
          <label className="block text-sm font-medium text-slate-200/90 mb-1">전공</label>
          <input
            type="text"
            value={major}
            onChange={(e) => setMajor(e.target.value)}
            placeholder="예: 통계학과"
            className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-fuchsia-400/70 focus:border-transparent transition"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-200/90 mb-1">보유 스킬 (쉼표 구분)</label>
          <input
            type="text"
            value={skillsInput}
            onChange={(e) => setSkillsInput(e.target.value)}
            placeholder="예: Python, SQL, R"
            className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-fuchsia-400/70 focus:border-transparent transition"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-200/90 mb-1">관심 직무</label>
          <input
            type="text"
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
            placeholder="예: 데이터 분석"
            className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-fuchsia-400/70 focus:border-transparent transition"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading || !major || !skillsInput || !jobType}
          className="group relative overflow-hidden inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-fuchsia-500 via-rose-500 to-orange-400 px-4 py-3 text-sm font-semibold text-white shadow-[0_0_30px_rgba(236,72,153,0.8)] transition duration-300 hover:scale-[1.01] disabled:bg-slate-500 disabled:shadow-none disabled:text-slate-200"
        >
          <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.35),transparent_40%)] opacity-0 transition duration-500 group-hover:opacity-100" />
          {isLoading ? "분석 중..." : "분석 시작하기"}
          <ArrowRight size={16} className="text-white" />
        </button>
      </div>
    </form>
  );
}

export default InputForm;
