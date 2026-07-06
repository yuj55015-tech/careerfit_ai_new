    # CareerFit AI

CareerFit AI는 사용자의 전공, 보유 스킬, 관심 직무를 입력받아 취업 준비 방향, 추천 프로젝트, 공모전 준비 전략을 제안하는 AI 기반 커리어 분석 서비스입니다.

## 프로젝트 개요

**문제 정의**
- 관심 직무에 어떤 역량이 필요한지 명확히 알기 어렵다.
- 학교에서 준비하는 내용과 실제 실무 요구 역량 사이의 차이를 느낀다.
- 공모전이나 프로젝트를 하더라도 어떤 방향으로 포트폴리오를 쌓아야 할지 막막하다.

**주요 사용자**
- 취업을 준비하는 대학생
- 데이터 분석가, AI/ML 관련 직무를 준비하는 학생

## 기술 스택

| 영역 | 기술 |
|---|---|
| 백엔드 | Python, FastAPI |
| AI API | Gemini 2.5 Flash-Lite (Mistral, Ollama, HuggingFace 전환 가능) |
| 데이터 | Pandas, SQLite, ChromaDB |
| 프론트엔드 | React, Vite, Tailwind CSS |
| 실행 환경 | Docker (예정) |

## 주요 기능

- [x] 역량 분석 입력 폼 (전공·스킬·관심 직무)
- [x] RAG 기반 AI 분석 결과 카드
- [x] 출처 공고 카드 (어떤 데이터를 근거로 했는지 표시)

## 실행 방법

### 백엔드

```bash
cd backend
python -m venv venv
venv\Scripts\activate        # Windows
# source venv/bin/activate   # macOS/Linux

pip install -r requirements.txt
cp ../.env.example ../.env    # .env 파일 생성 후 API 키 입력

uvicorn main:app --reload
```

백엔드 API: http://localhost:8000/docs

### 프론트엔드

```bash
cd frontend
npm install
npm run dev
```

프론트엔드: http://localhost:5173

> 백엔드와 프론트엔드는 각각 별도의 터미널에서 동시에 실행 중이어야 합니다.

## 환경 변수 (`.env`)

`.env.example`을 복사해 `.env`를 만들고 아래 값을 채워주세요.

```bash
GEMINI_API_KEY=your_gemini_api_key_here
MISTRAL_API_KEY=your_mistral_api_key_here
MOCK_MODE=false
LLM_MODEL=gemini-2.5-flash-lite
OLLAMA_BASE_URL=http://localhost:11434
```

- `LLM_MODEL`을 바꾸면 사용하는 LLM을 전환할 수 있습니다 (`gemini-*`, `mistral-*`, `ollama:모델명`, `huggingface:모델명`).
- `MOCK_MODE=true`로 설정하면 실제 API 호출 없이 서버 구조만 확인할 수 있습니다.

## 프로젝트 구조

```
careerfit_ai_new/
├── backend/
│   ├── main.py                 # FastAPI 앱 엔트리포인트
│   ├── routers/                # /health, /jobs, /analyze 라우터
│   ├── services/                # RAG 검색, LLM 호출 로직
│   └── data/                    # 채용·공모전 원본 데이터, RAG 문서
├── frontend/
│   └── src/
│       ├── App.jsx              # 상태 관리, API 요청
│       └── components/          # InputForm, ResultCard, SourceCard
└── docs/
    ├── PROJECT_PLAN.md
    └── harness/skills/design-skill.md   # UI 디자인 규칙
```

## 진행 현황

- [x] 1일차: 프로젝트 기획 및 개발 환경 세팅
- [x] 2일차: FastAPI 서버 구축 및 Gemini API 연결
- [x] 3일차: 데이터 파이프라인 구축
- [x] 4일차: RAG 기반 서비스 + React UI
- [ ] 5일차: Docker + 포트폴리오 완성

## 개발 일지

**1일차 — 기획 및 환경 세팅**
프로젝트 주제 선정 및 문제 정의, GitHub 저장소 생성, 폴더 구조 설계, `.gitignore`·`.env.example` 작성, README/기획 문서 초안 작성.

**2일차 — FastAPI + Gemini 연결**
가상환경 구성, `/health`·`/jobs`·`/analyze` API 기본 구조 구현, `.env` 기반 환경변수 관리, `MOCK_MODE` 테스트 모드 구현, Gemini 2.5 Flash-Lite 연결 구조 설계.

**3일차 — 데이터 파이프라인**
`jobs.csv`, `competitions.csv` 데이터 확인 및 전처리(결측치 처리, 중복 제거, 스킬 키워드 표준화), SQLite 저장, RAG 검색용 자연어 문서(`rag_documents.json`)로 변환.

**4일차 — RAG 서비스 + React UI**
ChromaDB 문서 검색(`rag_service.py`), Gemini RAG 연결 답변 생성(`llm_service.py`), React + Vite 프로젝트 생성, `InputForm`·`ResultCard`·`SourceCard` 컴포넌트 구현, `/analyze` API 연동, `design-skill.md` 작성.

    
