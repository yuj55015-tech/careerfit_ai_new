# careerfit_ai_new


## 프로젝트 개요



Q1. 
1. 어떤 역량이 필요한지 모르겠다. 
2. 실제 준비하는 것과 실무와의 차이가 많이 있는 것 같다.

## 기술 스택



| 영역 | 기술 |

|---|---|

| 백엔드 | Python, FastAPI |

| AI API | Gemini 2.5 Flash-Lite |

| 데이터 | Pandas, SQLite, ChromaDB |

| 프론트엔드 | React, Vite |

| 실행 환경 | Docker |

## 진행 현황

- [x] 1일차: 프로젝트 기획 및 개발 환경 세팅

- [x] 2일차: FastAPI 서버 구축 및 Gemini API 연결

- [ ] 3일차: 데이터 파이프라인 구축

- [ ] 4일차: RAG 기반 서비스 + React UI

- [ ] 5일차: Docker + 포트폴리오 완성

# CareerFit AI

CareerFit AI는 사용자의 전공, 보유 스킬, 관심 직무를 입력받아  
취업 준비 방향, 추천 프로젝트, 공모전 준비 전략을 제안하는 AI 기반 커리어 분석 서비스입니다.

현재는 FastAPI 기반 백엔드 서버를 중심으로 개발 중이며,  
Gemini API와 RAG 구조를 활용하여 더 구체적이고 근거 있는 커리어 조언을 제공하는 것을 목표로 합니다.

---

## 프로젝트 목표

CareerFit AI는 단순한 직무 추천 서비스가 아니라,  
사용자의 현재 상태를 바탕으로 "무엇을 더 준비해야 하는지"를 알려주는 커리어 코치형 AI 서비스를 지향합니다.

예를 들어 사용자가 다음과 같이 입력하면:

- 전공: 통계학과
- 보유 스킬: Python, SQL
- 관심 직무: 데이터 분석가

AI는 현재 역량을 분석하고, 부족한 부분과 추천 프로젝트 방향을 제시합니다.

---

## 주요 기능

### 현재 구현된 기능

- FastAPI 서버 구축
- `/health` 서버 상태 확인 API 구현
- `/jobs` 직무 데이터 조회 API 구현
- `/analyze` 사용자 커리어 분석 API 구현
- `.env` 기반 환경변수 관리
- `MOCK_MODE`를 활용한 테스트 모드 구현
- Gemini API 연결 구조 설계
- LLM 응답 생성 함수 분리

### 앞으로 구현할 기능

- ChromaDB 기반 RAG 검색 기능
- 직무/공모전 데이터 임베딩 저장
- Gemini API를 활용한 실제 커리어 분석 응답 생성
- 프론트엔드 화면 연결
- 사용자 입력 기반 맞춤형 추천 고도화

---

## 기술 스택

### Backend

- Python
- FastAPI
- Uvicorn
- Pydantic
- python-dotenv

### AI / LLM

- Google Gemini API
- gemini-2.5-flash-lite
- RAG 구조 예정
- ChromaDB 예정

### Version Control

- Git
- GitHub

---

## 프로젝트 구조

```text
careerfit_ai_new/
├── backend/
│   ├── main.py
│   ├── routers/
│   │   ├── analyze.py
│   │   ├── health.py
│   │   └── jobs.py
│   ├── services/
│   │   └── llm_service.py
│   ├── requirements.txt
│   └── venv/
├── .env
├── .env.example
├── .gitignore
└── README.md