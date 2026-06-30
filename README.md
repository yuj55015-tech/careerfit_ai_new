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

- [ ] 2일차: FastAPI 서버 구축 및 Gemini API 연결

- [ ] 3일차: 데이터 파이프라인 구축

- [ ] 4일차: RAG 기반 서비스 + React UI

- [ ] 5일차: Docker + 포트폴리오 완성

- Python 가상환경을 구성하고 FastAPI 백엔드 서버 실행 환경을 세팅했습니다.
- `/health`, `/jobs`, `/analyze` 엔드포인트를 구현해 기본 API 구조를 완성했습니다.
- Gemini 2.5 Flash-Lite API를 연결해 AI 분석 응답 생성 기반을 마련했습니다.
- `MOCK_MODE` 환경변수를 설정해 API 한도 초과 시에도 목업 응답으로 테스트할 수 있게 했습니다.
- 2일차 기준 백엔드 기능을 `/docs`에서 확인 가능한 형태로 구현했습니다.