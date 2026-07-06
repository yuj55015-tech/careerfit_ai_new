import { useState } from "react";
import InputForm from "./components/InputForm";
import ResultCard from "./components/ResultCard";
import SourceCard from "./components/SourceCard";

const API_BASE = "http://localhost:8000";
// ⚠️ API Key는 절대 여기에 넣지 않습니다

function App() {
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleAnalyze(formData) {
    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch(`${API_BASE}/analyze`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          major: formData.major,
          skills: formData.skills,
          job_type: formData.jobType,
        }),
      });

      if (!response.ok) throw new Error(`서버 오류: ${response.status}`);
      const data = await response.json();
      setResult(data);
    } catch (err) {
      if (err.message.includes("Failed to fetch")) {
        setError("FastAPI 서버에 연결할 수 없습니다. 서버가 실행 중인지 확인하세요.");
      } else {
        setError(err.message);
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-fuchsia-950 py-10 px-4 text-slate-100">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-16 top-16 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl animate-pulse" />
        <div className="absolute right-0 top-32 h-56 w-56 rounded-full bg-cyan-400/20 blur-3xl animate-spin-slow" />
        <div className="absolute left-1/2 top-1/3 h-1 w-1 rounded-full bg-white/90 shadow-[0_0_20px_rgba(255,255,255,0.85)] animate-twinkle" />
        <div className="absolute left-1/3 top-1/5 h-1.5 w-1.5 rounded-full bg-amber-300/90 shadow-[0_0_24px_rgba(251,191,36,0.7)] animate-twinkle" />
        <div className="absolute right-1/4 top-1/4 h-1.5 w-1.5 rounded-full bg-cyan-200/90 shadow-[0_0_24px_rgba(56,189,248,0.75)] animate-twinkle" />
      </div>

      <div className="relative max-w-3xl mx-auto space-y-8">
        <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 p-8 shadow-[0_0_80px_-30px_rgba(168,85,247,0.6)] backdrop-blur-xl mb-8">
          <div className="absolute inset-x-6 top-0 h-24 bg-gradient-to-b from-fuchsia-500/30 to-transparent blur-3xl" />
          <div className="inline-flex items-center rounded-full bg-fuchsia-500/10 text-fuchsia-100/90 px-3 py-1 text-xs font-semibold mb-4 tracking-[0.2em]">
            AI 기반 포트폴리오 코칭
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-fuchsia-300 to-amber-200 mb-3">
            CareerFit AI
          </h1>
          <p className="text-base text-slate-200/90 leading-8">
            전공, 보유 스킬, 관심 직무를 입력하면 취업·공모전 데이터 기반 맞춤형 포트폴리오 분석과 제안을 제공합니다.
          </p>
        </section>

        <InputForm onSubmit={handleAnalyze} isLoading={isLoading} />

        {error && (
          <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
            {error}
          </div>
        )}

        {isLoading && (
          <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6 text-center text-slate-500 shadow-sm">
            분석 중입니다... 잠시만 기다려주세요.
          </div>
        )}

        {result && (
          <div className="mt-8 space-y-4">
            <ResultCard
              answer={result.answer}
              matchedSkills={result.matched_skills ?? []}
              missingSkills={result.missing_skills ?? []}
              recommendedProjects={result.recommended_projects ?? []}
              confidence={result.confidence ?? null}
            />
            <SourceCard sources={result.sources ?? []} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
