# careerfit_ai_new


## 프로젝트 개요



Q1. 프로젝트 문제 정의
- 관심 직무에 어떤 역량이 필요한지 명확히 알기 어렵다.
- 학교에서 준비하는 내용과 실제 실무 요구 역량 사이의 차이를 느낀다.
- 공모전이나 프로젝트를 하더라도 어떤 방향으로 포트폴리오를 쌓아야 할지 막막하다.

주요 사용자 
- 취업을 준비하는 대학생 
- 데이터 분석가, AL/ML 관련 직무를 준비하는 학생
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

- [x] 3일차: 데이터 파이프라인 구축

- [ ] 4일차: RAG 기반 서비스 + React UI

- [ ] 5일차: Docker + 포트폴리오 완성

# CareerFit AI

CareerFit AI는 사용자의 전공, 보유 스킬, 관심 직무를 입력받아  
취업 준비 방향, 추천 프로젝트, 공모전 준비 전략을 제안하는 AI 기반 커리어 분석 서비스입니다.

1일차: 프로젝트 기획 및 개발 환경 세팅 
CareerFit AI 프로젝트 주제 선정
해결하고자 하는 문제 정의
GitHub Repository 생성
기본 폴더 구조 설계
.gitignore, .env.example 파일 생성
README 초안 작성
프로젝트 계획 문서 작성

2일차: Python 가상환경 생성 및 패키지 설치
FastAPI 서버 실행 환경 구성
/health 서버 상태 확인 API 구현
/jobs 채용 공고 조회 API 구현
/analyze 사용자 커리어 분석 API 기본 구조 구현
.env 기반 환경변수 관리 설정
MOCK_MODE를 활용한 테스트 모드 구현
Gemini 2.5 Flash-Lite API 연결 구조 설계
/docs에서 API 문서 확인

3일차: 강사 제공 CSV 데이터 확인
jobs.csv, competitions.csv 데이터 파일 추가
Pandas를 사용해 CSV 데이터 읽기
데이터의 결측치 확인
핵심 컬럼이 비어 있는 행 처리
company + title 기준 중복 데이터 확인 및 제거
python, sql, ml, deep learning 등 스킬 키워드 표준화
전처리된 채용 공고 데이터를 SQLite DB에 저장
SQL 쿼리를 통해 저장된 데이터 조회 확인
채용 공고 데이터를 RAG 검색에 적합한 자연어 문서로 변환
각 RAG 문서에 company, title, job_type, deadline, source metadata 추가
변환된 RAG 문서를 rag_documents.json 파일로 저장
이후 ChromaDB 검색에 연결할 수 있는 데이터 기반 마련
