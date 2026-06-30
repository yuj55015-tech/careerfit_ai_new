from fastapi import APIRouter

from typing import List

router = APIRouter()



# 목업 데이터: 3일차에 실제 CSV 데이터로 교체한다

MOCK_JOBS = [
    {
        "id": 1,
        "company": "네이버클라우드",
        "title": "데이터 분석가",
        "required_skills": ["Python", "SQL", "Pandas"],
        "preferred_skills": ["Tableau", "통계분석"],
        "description": "서비스 이용 데이터를 분석하여 사용자 행동 패턴과 주요 지표를 도출합니다. 데이터 기반 의사결정을 지원하기 위해 대시보드와 분석 리포트를 작성합니다.",
        "deadline": "2026-08-31"
    },
    {
        "id": 2,
        "company": "카카오엔터프라이즈",
        "title": "AI 서비스 기획 데이터 분석 인턴",
        "required_skills": ["Python", "SQL", "머신러닝"],
        "preferred_skills": ["A/B 테스트", "데이터 시각화"],
        "description": "AI 서비스의 사용자 로그와 실험 데이터를 분석하여 서비스 개선 방향을 제안합니다. 기획팀과 협업해 데이터 기반 기능 개선 아이디어를 도출합니다.",
        "deadline": "2026-08-31"
    },
    {
        "id": 3,
        "company": "토스",
        "title": "비즈니스 데이터 분석가",
        "required_skills": ["SQL", "Python", "통계"],
        "preferred_skills": ["Looker", "문제정의"],
        "description": "금융 서비스 데이터를 활용해 핵심 비즈니스 지표를 분석합니다. 통계적 사고를 바탕으로 사용자 전환율, 리텐션, 서비스 성과를 해석하고 개선안을 제안합니다.",
        "deadline": "2026-08-31"
    }
]



@router.get("/jobs", tags=["Jobs"])

def get_jobs():

    """

    취업 공고 목록을 반환하는 엔드포인트.

    현재는 목업 데이터를 반환하며, 3일차에 실제 데이터로 교체한다.

    """

    return {

        "count": len(MOCK_JOBS),

        "jobs": MOCK_JOBS

    }



@router.get("/jobs/{job_id}", tags=["Jobs"])

def get_job_by_id(job_id: int):

    """

    특정 공고의 상세 정보를 반환한다.

    """

    for job in MOCK_JOBS:

        if job["id"] == job_id:

            return job

    # 찾지 못한 경우

    from fastapi import HTTPException

    raise HTTPException(status_code=404, detail=f"공고 ID {job_id}를 찾을 수 없습니다.")