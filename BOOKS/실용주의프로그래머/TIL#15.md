## 📝 TIL (2022.04.05)
## Day 19
📖 오늘 읽은 범위 : 8장. 실용주의 프로젝트
---
 > 😄 **책에서 기억하고 싶은 내용을 써보세요.**
- 기본적인 룰 몇가지를 정립하고 거기에 맞게 프로젝트의 각 부분을 위임할 필요가 있다.
### 실용주의 팀
- #### 깨진 창문을 없애라
  - 품질은 팀의 이슈다. 만약 가장 부지런한 개발자라 해도 품질에 무심한 팀에 배치된다면 귀찮은 문제를 고치는 그의 열정은 줄어들 것이다.
  - 팀 전체가 깨진 창문(아무도 고치려고 하지 않는 사소한 결점imperfection)을 용납하지 않아야 한다. 팀은 상품의 품질에 책임을 져야만 한다.
  - 몇몇 팀 방법론에는 품질 관리 담당자가 있어 상품의 품질에 대한 책임을 팀에게서 위임 받는다. 정말 웃기는 일이다. 품질은 팀원 '전체'가 개인적으로 기여할 때만 보장되기 때문이다.
- #### 삶은 개구리
  - 모든 사람이 적극적으로 환경 변화를 감시해야 한다.
  - 수석 온도 감시자를 선임해야 할지도 모른다. 그로 하여금 범위scope의 확장, 시간 척도time scale의 감소, 추가 기능, 새로운 환경 등 무엇이건 간에 애초 합의사항에 있지 않았던 것들을 항상 점검하도록 하라. 새 요구사항에 수치를 보유하라.
- #### 소통하라!
  - 팀은 나머지 세상과 명확히 의사소통해야 할 필요가 있는 존재다.
  - 바깥의 사람들에게 무뚝뚝하고 과묵해 보이는 프로젝트 팀이야말로 최악이다.
- #### 반복하지 마라!
  - 프로젝트가 한 사람의 사서가 감당하기에는 너무 클 경우(혹은 아무도 그 역할을 맡으려고 하지 않을 때), 작업의 다양한 기능적 측면의 핵심 사안별로 사람을 임명하라.
  - 질의응답을 주고 받고 이를 저장 관리할 때는 그룹웨어 시스템과 유즈넷 뉴스그룹이 갖는 가치를 잊지 말라.
- #### 직교성
  - 팀을 기능 중심으로 조직하라.
  - 각 팀은 최종 시스템의 특정한 기능 측면에 대해 책임지도록 한다. 팀이 개개인의 강점 위에 스스로 내부를 조직하게 하라.
  - 기능이 꼭 최종 사용자 유스 케이스를 일컫는 것은 아니다. 도움말 서브시스템과 마찬가지로 데이터베이스 접근 레이어도 중요하다.
  - 응집력 있고, 자족적self-contained인 사람들의 팀을 원한다.
  - 팀이 잘못 조직되었음을 경고해 주는 신호. -> 두 개의 서브팀이 동일한 모듈이나 클래스에 대해 작업하는 것이 바로 고전적인 예다.
  - 프로젝트에는 최소한 '우두머리head'가 둘이 필요하다. 하나는 기술을 담당하는 수석, 나머지 하나는 관리를 담당하는 수석.  
기술 수석은 개발 철학과 스타일을 정하며 팀에 책임을 할당하고, 사람들 사이의 피할 수 없는 '토론'을 중재한다. 기술 수석은 지속적으로 큰 그림을 보고, 팀 사이의 불필요한 중복을 찾아 전체 노력의 직교성을 늘이려고 노력한다.  
관리 수석, 혹은 프로젝트 매니저는 각 팀이 필요로 하는 자원을 계획schedule하고, 진척도를 모니터하고, 그에 대해 보고하며, 비즈니스 가치의 관점에서 우선순위를 결정하는 데에 도움을 준다. 관리 수석은 팀이 바깥 세상과 대화하는 외교관 역할을 한다.
- #### 자동화
  - 일관성과 정확성을 보장하는 훌륭한 방법은 팀이 하는 모든 일을 자동화하는 것이다.
- #### 덧칠을 언제 멈출지 알아라
  - 팀은 개인들로 이루어지며, 각 팀원이 자신의 방식대로 빛나게 해 주어라. 그들을 지우너하기에, 그리고 프로젝트가 요구사항에 맞게 이루어지기에 딱 좋을 만큼의 구조를 제공하라.

### 유비쿼터스 자동화
- 빌드와 릴리스 과정이건, 코드 리뷰 서류 작업이건, 혹은 프로젝트에서 거듭 발생하는 어떤 종류의 작업이건 간에 그것은 모두 자동화되어야 한다.
- #### 전자동
  - 수작업 절차를 사용하지 말라.
- #### 빌드 자동화
  - 빌드는 비어있는 디렉터리 하나를 (그리고 알려진 컴파일 환경도) 가지고 프로젝트를 밑바닥에서부터 만드는 과정으로, 무엇이건 여러분이 생산해 내고 싶은 것을 최종 선적품으로 생산한다.
- #### 최종 빌드
  - 최종 빌드에는 저장소를 잠그고(lock), 릴리스 번호를 태그로 붙이는 작업이 필요할 수 있을 것이며, 최적화와 디버그 플래그가 적절히 세팅되는 것 등 기타 여러 가지가 필요할 수 있다.
- #### 자동화된 관리
  - 소스코드와 문서 외 내용에 의거해 자동으로 절차들을 처리해주는 스크립트를 돌리려 한다.
  - 우리의 목표는 자동화, 무인화 되었으며, 내용 주도(content-driven)인 작업흐름을 유지하는 것이다.
- #### 웹사이트 생성
  - 코드에서 추출된 문서나 요구사항 분석, 설계 문서, 그림, 차트, 그래프 등 모두가 정기적으로 프로젝트 내에서 의사소통을 하기 위한 내부 웹에 올라가야 한다.
우리는 이런 문서들이 자동화된 야밤의 빌드 일부분으로 혹은 소스코드 체크인 과정의 일부로 올려지길 원한다.
  - 웹 콘텐트(content)는 저장고의 정보에서 자동으로 생성되어 사람의 개입 없이 웹에 올라와야 한다. 이는 실로 DRY 원칙의 또 다른 적용이다.
  - 야밤의 빌드에서 생성된 정보는 모두 개발 웹사이트에서 접근할 수 있어야 한다. 빌드 자체의 결과(ex. 컴파일러 경고, 에러, 현재 상태를 포함한 한 쪽 분량의 요약 결과 등), 회귀 테스트, 퍼포먼스 통게, 코딩과 관련된 수치를 포함하여 어떤 종류의 통계적 분석이건 모두.

### 가차 없는 테스트
- 일찍 테스트하고, 자주 테스트하라. 자동으로 테스트하라.
- 코드를 작성하자마자 테스트해야 한다.
- 모든 테스트가 통과하기 전엔 코딩이 다 된 게 아니다.
- 코드가 모든 가능한 테스트를 통과하기 전까지는 누구에게건 사용가능하다고 주장할 수 없다는 것이다.
- #### 무엇을 테스트할지
  - 단위 테스트
    - 하나의 모듈을 테스트.
    - 모든 모듈이 어떻게 시스템 전체를 통틀어 제대로 사용되고 상호작용하는지 테스트해야 할 요가 있다.
  - 통합 테스트
    - 프로젝트를 구성하는 주요 서브시스템이 다른 부분과 제대로 작동하는지 보여준다.
    - 전체 서브시스템이 계약을 제대로 진키는지 테스트하는 것뿐이다.
  - 유효성 평가 validation와 검증 verification
    - 최종 사용자의 접근 방식에 대해, 그리고 그것이 개발자 테스트 데이터와 어떻게 다른지에 대해 관심을 기울여라.
  - 자원 고갈, 에러, 그리고 복구
    - 실세계에서 프로그램은 무한한 자우너을 보장받지 못한다.
    - 코드는 담을 포함한 몇 가지 제한 사항에 맞닥뜨릴 것이ㅏㄷ.
      - 메모리
      - 디스크 공간
      - CPU 대역폭
      - 벽시계 시간(wall-clock time)
      - 디스크 대역폭
      - 네트워크 대역폭
      - 칼라 팔레트
      - 비디오 해상도
  - 성능 performance 테스트
    - 성능 테스트, 스트레스 테스트, 혹은 부하가 걸린 상태에서의 테스트.
    - 초당 예상 사용자 및 접속 혹은 트랜잭션 숫자를 염두에 두고 실세계 조건에서 성능 요구사항들을 만족하는지 자문해 보라.
  - 사용편의성usability 테스트
    - 실제 환경의 조건 하에서 실제 사용자들이 시행하는 테스트
    - 사용편의성 테스트는 보정할 시간이 있을 때에 되도록 일찍 시행해야 한다.
- #### 어떻게 테스트할까
  - 회귀 테스트
    - 새로운 코드를 개발하면서 이전의 것을 잃지 않았다는 것을 확신시켜 주는 회귀 테스트로써 실행할 수 있다.
    - 성능, 계약contact, 유효성 등을 검증하기 위해 회귀 테스트를 실행한다.
  - 테스트 데이터
    - 실세계 데이터 : 전형적인 사용자 자료
    - 합성synthetic 데이터 : 어떤 통계적 조건하에서 인공적으로 생성된 자료
  - GUI 시스템 구동
  - 테스트를 테스트하기
    - 파괴자를 써서 테스트를 테스트하라.
    - 파괴자의 역할은 소스 트리의 카피를 별도로 만들어 취한 다음, 고의로 버그를 심고 테스트가 잡아낼지 검증하는 것이다.
  - 철저히 테스트하기
    - 우연히 코드의 모든 라인이 실행될지라도, 그게 전부가 아니다. 정말로 중요한 것은 프로그램이 갖는 상태state의 개수다. 상태는 코드 라인들과 동등하지 않다.
    - 코드 커버리지보다 상태 커버리지를 테스트하라.
- #### 언제 테스트할까
  - 실제 제품에 들어갈 모든 코드는 나오자마자 테스트해야 한다.
  - 테스트는 대부분 자동화 되어야한다.
- #### 그물 조이기
  - 현존하는 테스트의 그물을 빠져 나가는 버그가 있으면, 다음번에는 그걸 잡아낼 수 있도록 새 테스트를 추가해야 한다.
  - 버그는 한 번만 잡아라.
  - 해당 버그를 확인할 수 있게 자동화 테스트들을 수정해야 한다.

### 결국은 모두 글쓰기
- 프로젝트에서 생상되는 문서에는 소스코드, 주석, 설계와 테스트 문서 등이 포함된 내부 문서, 사용자 매뉴얼 같이 외부 세계로 출간되거나 출하되는 모든 것이 포함된 외부 문서가 있다.
- 모든 문서는 코드의 거울이다.
- 문서가 애초부터 전체의 일부가 되게 하고, 나중에 집어 넣으려고 하지 말라.
- #### 코드 내의 주석
  - 소스코드에 주석을 다는 것은, 예컨대 공학적인 트레이드오프나 어떤 결정의 이유, 어떤 대안을 버렸는지 등 다른 곳에서 문서화할 수 없는, 바로 프로젝트에서 잘 빠져 나가는 부분들을 문서화하기 위한 완벽한 기회가 된다.
  - 의미 없는 이름보다 더 고약한 것은 오해를 불러일으키는 이름이다.

### 위대한 유산
- 현실적으로 프로젝트의 성공은 사용자들의 기대를 얼마나 잘 충족하는가에 따라 측정된다.
- 사용자의 기대를 부드럽게 넘어서라. 

### 오만과 편견
- 자신의 작품에 서명하라.

 > 🤔 **오늘 읽은 소감은? 떠오르는 생각을 가볍게 적어보세요**  
드디어 다 읽었다. 나는 이전 판을 읽어서 그런가 현재 20주년으로 나온 책과 조금 다른 내용들이 많기도 했지만, 현재의 상황에 대입해서 한번 더 생각해보는 계기가 되지 않았나 싶다.

 > 🔎 **궁금한 내용이 있거나, 잘 이해되지 않는 내용이 있다면 적어보세요.**
