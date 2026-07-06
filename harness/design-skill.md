# design-skill.md — CareerFit AI UI 디자인 규칙

> 프로젝트: 취업·공모전 포트폴리오 코치
> 대상 사용자: 대학생
> 톤앤매너: 전문성 + 친근함 (너무 딱딱한 기업용 UI도, 너무 가벼운 캐주얼 UI도 아닌 중간 지점)
> 기술 스택: React + Tailwind CSS

이 문서는 바이브코딩(AI 코드 생성) 시 일관된 UI를 만들기 위한 규칙입니다. 컴포넌트를 새로 만들거나 수정할 때 반드시 이 규칙을 따르세요.

---

## 1. 컬러 팔레트

| 역할 | HEX | Tailwind 클래스 | 용도 |
|---|---|---|---|
| primary | `#3B82F6` | `blue-500` | 버튼, 링크, 포커스 링 — 신뢰·전문성 표현 |
| primary-hover | `#2563EB` | `blue-600` | 버튼 호버 상태 |
| secondary | `#10B981` | `emerald-500` | 성장·추천 강조 (AI 분석 결과, 긍정적 신호) |
| background | `#F8FAFC` | `slate-50` | 페이지 전체 배경 |
| surface | `#FFFFFF` | `white` | 카드·입력창 배경 |
| text-primary | `#1E293B` | `slate-800` | 제목, 강조 텍스트 |
| text-body | `#475569` | `slate-600` | 본문 텍스트 |
| text-muted | `#64748B` | `slate-500` | 설명, 보조 텍스트 |
| border | `#E2E8F0` | `slate-200` | 카드·입력창 테두리 |
| error | `#EF4444` | `red-500` | 에러 메시지, 경고 |
| error-bg | `#FEF2F2` | `red-50` | 에러 박스 배경 |

**원칙**: primary(파란색)는 "신뢰할 수 있는 커리어 코치"라는 전문성을, secondary(초록색)는 "성장·추천"이라는 긍정적 톤을 담당합니다. 두 색을 섞어 쓰지 말고 역할을 분리하세요 (예: 액션 버튼 = primary, 분석 결과 강조 = secondary).

---

## 2. 타이포그래피

| 용도 | Tailwind 클래스 | 사용 예 |
|---|---|---|
| 페이지 제목 (H1) | `text-2xl font-bold text-slate-800` | "CareerFit AI" |
| 섹션 제목 (H2) | `text-lg font-semibold text-slate-700` | "내 정보 입력", "AI 분석 결과" |
| 본문 | `text-base text-slate-600` | 분석 결과 답변 |
| 설명·캡션 | `text-sm text-slate-500` | 서비스 설명, 폼 라벨 |
| 보조 정보 | `text-xs text-slate-500` | 출처 카드의 스킬 태그, 마감일 등 |

**원칙**: 대학생 사용자 대상이므로 지나치게 작은 폰트(`text-xs` 남용)는 피하고, 본문은 `text-sm` 이상을 기본으로 합니다. 친근함을 위해 이모지(📊, 📄 등)를 섹션 제목에 보조적으로 사용할 수 있습니다.

---

## 3. 컴포넌트 구조

```
frontend/src/
├── App.jsx           # 최상위: 상태 관리(result, isLoading, error), API 요청
└── components/
    ├── InputForm.jsx  # 전공·보유 스킬·관심 직무 입력 폼
    ├── ResultCard.jsx # AI 분석 답변 출력 (초록 왼쪽 테두리)
    └── SourceCard.jsx # 참고한 공고 출처 목록 출력
```

| 컴포넌트 | 책임 | 비고 |
|---|---|---|
| `App.jsx` | 전역 상태, `/analyze` API 호출, 에러 핸들링 | 스타일링 최소화, 레이아웃 컨테이너 역할만 |
| `InputForm.jsx` | 사용자 입력 수집 후 `onSubmit(formData)` 호출 | 로딩 중 버튼 비활성화 |
| `ResultCard.jsx` | `answer` prop을 받아 렌더링 | `border-l-4 border-emerald-500`로 강조 |
| `SourceCard.jsx` | `sources` 배열을 받아 렌더링, 빈 배열이면 안내 문구 | 각 항목은 `border-b`로 구분 |

**원칙**: 컴포넌트는 폴더명 `components`(복수형)로 통일하고, 각 컴포넌트는 자신의 데이터만 책임집니다 (API 호출 로직은 `App.jsx`에만 존재).

---

## 4. 레이아웃 규칙

- **최대 너비**: `max-w-2xl mx-auto` — 대학생이 모바일/노트북에서 보기 편한 폭
- **페이지 여백**: `px-4 py-10`
- **카드 내부 여백**: `p-6`
- **컴포넌트 간 간격**: `space-y-4` (세로 나열), `gap-4` (플렉스/그리드)
- **모서리 둥글기**: `rounded-xl` (카드), `rounded-lg` (버튼·입력창)
- **그림자**: `shadow-sm` — 과하지 않게, 카드가 배경에서 살짝 떠 보이는 정도만
- **입력창/버튼 높이**: `px-3 py-2` 기준 통일

---

## 5. 금지 사항

- ❌ API Key를 화면에 표시하거나 `localStorage`/`sessionStorage`에 저장하지 않는다
- ❌ 다크 배경에 흰 텍스트를 사용하지 않는다 (가독성 우선, 라이트 테마 고정)
- ❌ 아이콘 없이 텍스트만 있는 버튼을 만들지 않는다 (버튼은 아이콘 + 텍스트 레이블 필수)
- ❌ 컬러 팔레트에 없는 임의의 색상(예: `purple-500`, `pink-400` 등)을 새로 도입하지 않는다
- ❌ 로딩 상태 없이 API 요청을 보내지 않는다 (`isLoading`으로 버튼 비활성화 + 로딩 문구 필수)
- ❌ 에러 발생 시 사용자에게 원인 없이 "오류 발생"으로만 표시하지 않는다 (가능한 한 구체적 안내 문구 사용)
- ❌ 폼 제출 전 클라이언트 측 최소 검증(빈 값 체크) 없이 API를 호출하지 않는다
