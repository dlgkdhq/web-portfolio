import './App.css';

function App() {

  const balancEatSkills = ["HTML", "CSS", "JavaScript", "React", "Git"];
  const bizBoardSkills = ["Java", "Spring", "Mybatis", "JavaScript", "JSP", "OracleDB", "Tomcat", "Git", "Notion"];
  const oilmoneySkills = ["HTML", "CSS", "JavaScript", "React", "Java", "Spring", "Mybatis", "OracleDB", "Tomcat", "Git", "Notion"];

  return (
    <div className='pf-container'>
      <h1>• 이하은의 포트폴리오 •</h1>

      <div className='pf-contents'>
        <div>
          <video src='https://dlgkdhq.github.io/web-portfolio/videos/pf1.mp4' className='pf-video' controls muted></video>
        </div>
        <div className='pf-detail'>
          <h2>사용자 목표에 맞는 식단/운동 추천 및 개인 기록 서비스</h2>
          <ul className='pf-meta'>
            <li><span className='label'>일정</span><span className='value'>2025. 05. 28. ~ 2025. 06. 13.</span></li>
            <li><span className='label'>사용기술</span>
              <span className='tech-list'>
                {balancEatSkills.map((tech, index) => (
                  <span key={index} className='tech-item'>{tech}</span>
                ))}
              </span>
            </li>
            <li><span className='label'>참여인원</span><span className='value'>4명</span></li>
            <li><span className='label'>내용</span>
              <span className='value'>
                사용자의 목표에 맞춘 식단과 운동 콘텐츠를 추천하고, 개인의 건강 변화를 기록할 수 있는 웹 서비스입니다.
                추천 식단 구매 기능까지 통합하여, 건강 관리 경험을 처음부터 끝까지 편리하게 제공합니다.
              </span>
            </li>
            <li><span className='label'> Git 경로</span><span className='pf-git'><a href='https://github.com/dlgkdhq/Balanceat.git'>https://github.com/dlgkdhq/Balanceat.git</a></span></li>
          </ul>
        </div>

      </div>

      <div className='pf-contents'>
        <div>
          <video src='https://dlgkdhq.github.io/web-portfolio/videos/pf2.mp4' className='pf-video' controls muted></video>
        </div>
        <div className='pf-detail'>
          <h2>기업 스케줄 및 할 일 관리 서비스</h2>
          <ul className='pf-meta'>
            <li><span className='label'>일정</span><span className='value'>2025. 07. 28. ~ 2025. 08. 14.</span></li>
            <li><span className='label'>사용기술</span>
              <span className='tech-list'>
                {bizBoardSkills.map((tech, index) => (
                  <span key={index} className='tech-item'>{tech}</span>
                ))}
              </span>
            </li>
            <li><span className='label'>참여인원</span><span className='value'>5명</span></li>
            <li><span className='label'>내용</span>
              <span className='value'>
                소규모 기업 및 팀 단위 사용자를 위한 일정과 할 일을 한 눈에 관리할 수 있는 서비스입니다.
                캘린더 중심의 직관적인 UI와 역할 기반 권한 관리로, 팀 내 일정 혼선과 중복 작업을 최소화합니다.
              </span>
            </li>
            <li><span className='label'> Git 경로</span><span className='pf-git'><a href='https://github.com/dlgkdhq/BizBoard.git'>https://github.com/dlgkdhq/BizBoard.git</a></span></li>
          </ul>
        </div>
      </div>

      <div className='pf-contents'>
        <div>
          <video src='https://dlgkdhq.github.io/web-portfolio/videos/pf3.mp4' className='pf-video' controls muted></video>
        </div>
        <div className='pf-detail'>
          <h2>위치·차량 정보 기반 주유소·충전소 통합 경로 안내 서비스</h2>
          <ul className='pf-meta'>
            <li><span className='label'>일정</span><span className='value'>2025. 08. 21. ~ 2025. 09. 12.</span></li>
            <li><span className='label'>사용기술</span>
              <span className='tech-list'>
                {oilmoneySkills.map((tech, index) => (
                  <span key={index} className='tech-item'>{tech}</span>
                ))}
              </span>
            </li>
            <li><span className='label'>참여인원</span><span className='value'>4명</span></li>
            <li><span className='label'>내용</span>
              <span className='value'>
                전기차와 일반 차량 모두를 위한 주유소·충전소 통합 경로 안내 서비스입니다.<br></br>
                차량 등록 정보를 기반으로 맞춤형 주유소/충전소를 추천하며, 위치 기반 경로 안내로 편리성을 제공합니다.
              </span>
            </li>
            <li><span className='label'> Git 경로</span><span className='pf-git'><a href='https://github.com/dlgkdhq/oilmoney.git'>https://github.com/dlgkdhq/oilmoney.git</a></span></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
