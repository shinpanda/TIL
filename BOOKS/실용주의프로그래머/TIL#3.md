## 📝 TIL (2022.03.19)
## DAY 3
📖 오늘 읽은 범위 : 2장.실용주의 접근법

 > 😄 **책에서 기억하고 싶은 내용을 써보세요.**
 - ### 중복의 해악
  - 시스템을 통들어 어떤 지식을 중복하지 말라
  - #### DRY 원칙
    - Don't Repeat Yourself : 반복하지 마라
    - 모든 지식은 시스템 내에서 단일하고, 애매하지 않고, 정말로 믿을만한 표현 양식을 가져 한다.
  - 어떻게 중복이 생기는가?
    - 강요된(impose) 중복 : 개발자들은 다른 선택이 없다고 느낀다. 환경이 중복을 요구하는 것처럼 보인다.
      - 프로젝트 표준이 중복된 정보가 기록된 문서를 요구하기도 하고, 혹은 코드에 중복 정보가 생기는 문서를 요구하기도 한다. 
      - 여러 플랫폼을 지원해야 하는 경우, 각각에 대해 프로그래밍 언어, 라이브러리, 개발 환경이 필요하고 여기서 공유된 정의와 프로시저들이 중복하게 된다.
      - 프로그래밍 언어 자체가 정보가 중복되는 어떤 구조를 요구하기도 한다.
      - 하지만 많은 경우, 각각의 지식을 한 곳에 두면서 DRY 원칙을 따르고, 동시에 우리의 삶을 더 편하게 만드는 길이 존재한다.
        - 정보의 다양한 표현양식.
          - 동일한 정보가 다른 형태로 표현되어야 할 때.
          - 소프트웨어가 빌드될 때마다 간단한 코드 생성기를 사용해 공동의 메타데이터 표현에서 여러 개의 언어에 걸쳐 있는 구조를 만들어낼 수 있다.
          - 클래스 정의를 온라인 데이터베이스 스키마에서 생성하거나 혹은 애초에 스키마를 만들 때에 사용되었던 메타데이터에서 생성할 수도 있다.
        - 코드내의 문서화.
          - DRY 원칙은 낮은 차원의 지식은 그것이 속하는 코드에 놔두고, 주석은 다른 높은 차원의 설명을 위해 아껴두라고 말한다.
          그러지 않으면 지식을 중복하게 되며, 변경할 때마다 매번 코드와 주석 모두를 바꾸어야 한다.
          - 주석은 필연적으로 낡게 될 것이고, 믿을 수 없는 주석은 주석이 전혀 없는 것보다 더 심각한 문제를 만들어 낸다.
        - 문서화와 코드.
          - 문서와 코드 모두는 동일 지식에 대한 표현이다.
          - 테스트가 정확하게 명세를 반영하는 것을 보장하기 위해, 팀은 문서 자체에서 테스트가 자동 생성되도록 했다. 클라이언트가 명세를 수정했을 때 테스트 슈트는 자동으로 바뀌었다.
          클라이언트에게 그 과정이 믿을만 하다는 것을 확인시킨 다음에는 인수 테스트(acceptance tests)를 생성하는 것은 보통 몇 초 정도밖에 걸리지 않았다.
        - 언어에 관한 문제
          - 많은 언어가 소스코드에 상당한 양의 중복을 강요한다. 이것은 언어가 모듈의 인터페이스와 그 구현을 분리하는 경우에 자주 생긴다.
          - 익스포트(exported) 변수, 함수, 클래스의 이름과 타입 정보가 중복된다.
          - 함수 혹은 클래스 헤더 주석을 두 개 파일에 걸쳐 중복할 아무런 이유가 없다.
          헤더 파일에는 인터페이스에 대한 사항을 기록하고, 구현 파일에는 그 코드의 사용자가 알 필요가 없는 상세한 것들을 기록하라.
    - 부주의한 중복 : 개발자들은 자신들이 정보를 중복하고 있다는 것을 깨닫지 못한다.
      - 때때로 중복은 설계 실수의 결과로 나타나기도 한다.
      - 가능한 곳에서는 언제나 객체의 속성을 읽고 쓸 수 있는 액세스 함수를 사용하라. 그러면 캐싱과 같은 기능을 나중에 추가하기가 더 쉬워질 것이다.
    - 참을성 없는 중복 : 중복이 쉬워 보이기 때문에 개발자들이 게을러져서 중복을 하게 된다.
      - 참을성 없는 중복은 발견하기도 쉽고 다루기도 쉬운 형태지만, 나중의 고통을 피하기 위해서는 훈련이 필요하고, 미연에 시간을 투자할 의지가 있어야 한다.
    - 개발자간의 중복 : 한 팀에 있는(혹은 다른 팀에 있는) 여러 사람들이 동일한 정보를 중복한다.
      - 한 프로젝트에서 일하는 서로 다른 개발자 사이에서 발생한다.
      - 전체 기능 집합이 부주의하게 중복될 수 있고, 그런 중복은 수 년동안 발견되지 않을 수 있으며, 이는 결국 유지보수 문제로 귀결될 것이다.
      - 높은 차원의 해법으로, 깨끗한 설계와 강력하고 기술적인 프로젝트 리더, 그리고 그 설계 내에서 책임의 분배가 제대로 이해되도록 하는 것. 이런 것들로 개발자 간의 중복 문제를 다루어라.
      - 공통의 문제를 다루기 위한 토론장을 만들어라. 한 사람의 팀원을 프로젝트 사서가 되도록 임명하라. 그의 일은 지식 교환을 도와주는 것이다.
      소스 트리의 한 가운데에 유틸리티 루틴과 스크립트들이 저장될 수 있는 장소를 마련하라. 그리고 의례히 비공식적으로 혹은 코드 리뷰시 다른 사람의 소스코드와 문서를 읽도록 하라.
      다른 사람의 것들을 기웃거리는 게 아니고, 거기서 배우는 것이다. 그리고 기억하라. 접근은 상호적이다.
      - 재사용하기 쉽게 만들라.
      - 조성해야 할 환경이란 뭔가를 직접 만드는 것보다 기존의 것을 찾아내고, 또 재사용하기 쉬운 환경이다. 만약 그게 쉽지 않다면 사람들은 하지 않을 것이다.
      그리고 만약 재사용에 실패한다면 지식 중복의 위험을 각오해야 한다.
 - `직교성(Orthogonality)`- 하나의 지식을 여러 개의 시스템 컴포넌트에 쪼개 놓지 말라.
  - 그래프의 축과 같이 두 직선이 직각으로 만나는 경우 직교한다고 말한다.
  - 컴퓨팅에서 직교성은 일종의 독립성(independence)나 결합도 줄이기(decoupling)를 의미한다.
  - 하나가 바뀌어도 나머지에 어떤 영도 주지 않으면 서로 직교한다고 할 수 있다.
  - 직교성의 장점
    - 비직교적인 시스템은 본질적으로 변화와 조정을 하기가 복잡하다. 시스템의 컴포넌트들이 고도로 상호의존적인 경우, 특정 국지적 부분만 수정하는 방법이란 없다.
    - 관련 없는 것들 간에 서로 영향이 없도록 하라.
    - **생산성 향상**
      - 개발 시간과 테스트 시간이 줄어든다.
      - 상대적으로 작고, 자족적인 컴포넌트를 작성하는 것이 하나의 커다란 코드 덩어리를 만드는 것보다 쉽다.
      - 간단한 컴포넌트들은 설계하고, 코딩하고, 단위 테스트하고, 그리고는 잊어버릴 수 있다. 
      - 재사용을 촉진한다.
      - 컴포넌트들에 명확하고 잘 정의된 책임이 할당되어 있다면 애초의 구현자들이 미처 생각하지 못했던 방식으로 새로운 컴포넌트와 결합할 수 있다.
    - **리스크 감소**
      - 감연된 코드는 격리된다. 그 부분만 도려내고 새로운 코드로 이식할 수 있다.
      - 시스템이 잘 깨어지지 않는다.
      - 해당 컴포넌트들에 대해 테스트를 설계하고 실행하기 훨씬 쉬어, 더 많은 테스트가 가능하다.
      - 써드파티 컴포넌트로 연결되는 인터페이스들이 전체 개발의 작은 부분에 한정되어 특정 벤더나 제품, 플랫폼에 덜 종속될 것이다.
  - 직교적인 설계를 테스트하는 하는 손쉬운 방법이 있다. 컴포넌트들을 나누었을 때 다음과 같이 스스로에게 물어보라.  
  '특정 기능에 대한 요구사항을 극적으로 변경했을 경우, 몇 개의 모듈이 영향을 받는가?' 직교적인 시스템에서는 답이 '하나'여야 한다.
  - 직교성에 대한 흥미로운 변형은 애스펙트 지향 프로그래밍(AOP, Aspect-Oriented Programming)이다.
  - 코딩에서 직교성을 유지하기 위한 기법
    - 코드의 결합도를 줄여라.
      - 불필요한 어떤 것도 다른 모듈에 보여주지 않으며, 다른 모듈의 구현에 의존하지 않는 코드를 작성하라.
      - 객체의 상태를 바꿀 필요가 있다면, 객체 스스로가 그러한 일을 수행하게 만들라.
    - 전역(global) 데이터를 피하라.
      - 코드가 전역 데이터를 참조할 때마다, 코드는 해당 데이터를 공유하는 다른 컴포넌트와 묶이게 된다.
      - 싱글튼 패턴(singleton pattern)은 특정 클래스의 객체가 단 하나의 인스턴스만을 갖도록 보장해주지만 이를 전역 데이터의 일종으로 남용한다. 싱글튼은 불필요한 링크를 유도하므로 주의를 기울여라.
    - 유사한 함수를 피하라.
      - 시작과 끝에서는 공통 코드를 공유하지만 중간의 알고리즘이 다를 것이다. 이를 스트래티지 패턴(strategy pattern)을 사용하여 더 나은 구현을 할 수 없는 지 고려해보기 바란다.
  - 기회가 있을 때마다 코드의 구조와 직교성을 향상시키기 위해 노력하라. 이러한 프로세스를 리팩터링(refactoring)이라 부른다.
  - 소스코드 관리 시스템을 사용한다면, 버그를 수정하고 테스트를 마친 뒤 버그 수정에 대한 태그를 붙여라.
  - 직교성은 DRY 원리와도 밀접하다. DRY 원리는  시스템 내부의 중복을 최소화시키고, 직교성은 시스템 컴포넌트 간의 상호의존도를 줄인다.
 - `가역성(Reversibility)` - 변화화는 환경에서 프로젝트를 분리하는 방법.
  - 최종 결정이란 없다.
  - 특정 벤더 제품에 대한 의존도 등은 잘 정의하고 추상화한 인터페이스를 통해 감출 수 있다.
  - 요구사항을 메타데이터에 넣고, 필요한 수행문을 코드에 넣을 때 애스펙트나 펄 등을 이용하여 메커니즘을 자동화시켜라. 그리고 어떤 메커니즘을 이용하든 이를 되돌릴 수 있도록 하라.
  무언가 자동으로 추가할 수 있다면, 역시 자동으로 빼낼 수도 있다.
- `예광탄` - 요구사항을 모으고 설계를 테스트하고 코드를 구현하는 것을 동시에 가능케 하는 개발
  - 예광탄은 탄창의 일반 탄환들 사이에 일정한 간격으로 끼어있다. 예광탄이 발사되면 그 안에 든 인 성분이 발화하여 총알을 맞은 것과 총 사이에 빛의 궤적을 남긴다. 만약 예광탄이 목표물을 맞힌다면 일반 탄환도 마찬가지로 맞힐 것이다.
  - 예광탄이 효과가 있는 까닭은 일반 탄환과 동일한 환경과 제약 조건에서 발사되고 날아가기 때문이다. 탄환이 목표물에 도달하는 시간이 짧기 때문에, 기관총 사수는 즉각적인 반응을 얻을 수 있다.
  - 우리는 요구사항으로부터 최종 시스템의 일부 측면에까지 빨리, 눈에 보이게, 반복적으로 도달하게 해줄 무언가를 찾아야 한다.
  - 예광탄 코드에도 사용 코드와 마찬가지로 모든 에러 검사, 구조화, 문서화, 자기 검사가 포함된다. 단지 예광탄 코드에는 아직 완전한 기능이 들어 있지 않을 뿐이다.
  - 장점
    - 사용자들은 뭔가 작동되는 것을 일찍부터 보게 된다.
    - 개발자들은 들어가서 일할 수 있는 구조를 얻는다.
    - 통합 작업을 수행할 기반이 생긴다.
    - 보여줄 것이 생긴다.
    - 진전 상황에 대해 더 정확하게 감을 잡을 수 있다.
  - 예광탄 코드는 기능은 별로 없지만 완결된 코드이며, 최종 시스템 골격의 일부를 이룬다. 프로토타입은 나중에 버릴 수 있는 코드를 만드는 것으로 예광탄이 하나라도 발사되기 전에 먼저 일어나는 정찰과 정보 수집으로 생각하면 되겠다.
- `프로토 타입과 포스트잇`
  - 위험 요소를 분석하고 노출시키며 이를 매우 저렴한 비용으로 바로잡을 기회를 얻는 것이다.
  - 프로토타입은 반드시 코드로 작성해야 할 필요는 없다. 포스트잇은 작업흐름과 애플리케이션 로직과 같은 동적인 것들을 프로토타이핑해 볼 수 있는 훌륭한 도구다.
  - 사용자 인터페이스는 화이트보드에 그려 보거나, 페인트 프로그램, 인터페이스 빌더 등을 이용해 기능은 구현하지 않고 인터페이스만을 그려보는 방법으로 프로토타입을 만들 수 있다.
  - 프로토타입은 제한된 몇 가지 질문에 답할 목적으로 설계되기 때문에 실제 제품보다 훨씬 적은 비용으로 빠르게 개발할 수 있다.
  - 만약 세부사항을 포기할 수 없는 환경에 처해있다면, 실제로 프로토타입을 만들고 있는 것인지에 대해 스스로에게 물어보라. 아마도 이런 경우에는 예광탄 스타일의 개발이 더 적절할 것이다.
  - 프로토타입의 대상
   - 위험을 수반하는 모든 것. 또한, 이전에 해본 적이 없는 것. 최종 시스템에 매우 중요한 것 등이 프로토타입의 대상이 된다.
   - 증명되지 않았거나, 의심이 가는 것, 심적으로 편하지 않읂 것 모두가 프로토타이핑의 대상이 될 수 있다.
   - 아키텍처
   - 기존 시스템에 추가할 새로운 기능
   - 외부 데이터의 구조 혹은 내용
   - 써드파티 도구나 컴포넌트
   - 성능 문제
   - 사용자 인터페이스 설계
  - 프로토파이핑은 학습 경헙이며, 프로토타입의 가치는 **생성된 코드에 있는 것이 아니라 이를 통해 배우게 되는 교훈에 있다**. 이것이 프로토타이핑의 진정한 핵심이다.
  - 프로토타입을 만들 때 무시해도 좋은 세부사항
    - 정확성(correctness) - 적절히 가짜(dummy) 데이터를 사용할 수 있다.
    - 완전성(completeness) - 프로토타입은 어쩌면 미리 선정한 입력 데이터와 한 가지 메뉴 항목에서만 작동하면 되기 때문에 제한된 기능만을 제공하기도 한다.
    - 안정성(robustness) - 에러 검사는 불완전할 수도 있고, 떄론 완전히 무시될 수도 있다. 미리 정의된 방법대로 실행시키지 않는다면 와장창 망가지고 불꽃놀이를 보여주면서 타버릴 수도 있지만 괜찮다.
    - 스타일(style) - 프로토타입 코드는 주석이나 문서를 많이 만들지 않아도 된다. 프로토타입을 통한 경험의 결과로 문서를 많이 만들어 낼 수도 있겠지만, 프로토타입 자체에는 많은 문서를 많이 만들어 넣지 않아도 된다.
  - 아키텍처 프로토타이핑
    - 프로토타입에서 기대하는 것은 전체적으로 시스템이 어떻게 동작할지에 대한 감을 잡는 것이다.
    - 아키텍처 프로토타입에서 규명할 만한 사항
      - 주요 컴포넌트의 책임이 잘 정의되었고 적절한가?
      - 주요 컴포넌트 간의 협력관계가 잘 정의되었는가?
      - 결합도는 최소화되었는가?
      - 잠재적 중복을 찾아낼 수 있는가?
      - 인터페이스 정의와 제약 사항은 수용할만한가?
      - 각 모듈이 실행 중에 필요로 하는 데이터에 접근할 수 있는 경로를 갖고 있는가? 모듈은 데이터를 필요로 할 때 데이터에 접근할 수 있는가?
  - 어떻게 프로토타입을 사용하지 않을 것인가?
    - 코드로 만들 때는 시작하기 전 폐기처분할 코드를 작성하고 있다는 사실을 이해시켜야 한다.
    - 코드는 폐기할 것이고, 불완전하며 완성할 수 없다는 사실을 분명히 주지시켜야 한다.
    - 여러분이 작업하는 환경이나 문화에서 프로토타입 코드의 목적이 잘 못 해석될 가능성이 크다고 느낀다면, 예광탄 접근 방식을 취하는 게 나을 것이다. 향후 개발에서 사용할 수 있는 프레임워크를 얻을 수 있기 때문이다.
- `도메인 언어(Domain Language)`
  - 언어의 한계가 곧 자기 세계의 한계다 - 루트비히 비트겐슈타인
  - 사용자들이 정리가 잘 된 진술을 많이 해준다면, 여러분은 그들이 원하는 내용을 정확히 표현하는 그 에플리케이션 도메인에 맞추어진 소형 언어(mini-language)를 만들 수 있다.
  - 적당한 곳에 적절한 지원만 있다면, 애플리케이션 도메인에 훨씬 가깝게 프로그래밍할 수 있다. 그들의 도메인에 더 가깝게 일할 수 있는 도구를 여러분 스스로에게 제공하라는 것이다.
  - 문제 도메인에 가깝게 프로그래밍하라.
  - 소형 언어를 구현하기
    - 파싱하기 쉬운 라인중심(line-oriented) 형식의 언어로 만드는 것이다.
  - 데이터 언어와 명령형 언어
    - 데이터 언어 - 애플리케이션이 사용할 어떤 형식의 데이터 구조를 만든다. 이런 언어는 환경설정 정보를 표현하기 위해 쓰이는 경우가 많다.
    - 명령형 언어 - 언어는 실제로 실행되며, 문장, 제어 구조체(control construct) 등등을 가질 수 있다.
    - 프로그램의 유지보수를 쉽게 하기 위해서도 스스로 명령형 언어를 만들어 사용할 수 있다.
  - 독립 언어와 내장 언어
    - 반드시 애플리케이션에 직접 사용되어야만 소형 언어가 유용한 것은 아니다.
    - 컴파일하거나, 읽어들이거나, 그렇지 않을 경우 프로그램 자체가 사용하기 위한 산출물을 만들기 위해 명세 언어(specification language)를 사용하기도 한다.
  - 대부분의 애플리케이션이 예상 수명보다 더 오래간다는 사실에 비추어 볼 때, 현재의 고통을 참고 더 복잡하지만 가독성 좋은 언어를 채택하는 편이 더 좋을 것이다. 최초의 노력은 지원과 유지보수 비용의 절감을 통해 몇 배로 보상받게 될 것이다.
- `추정(Estimating)`
  - 추정을 통해 놀람을 피하라.
  - 기간을 추정할 때 다음과 같은 단위를 사용하라
    |  기간 | 추정의 단위  |
    | ------------ | ------------ |
    |  1~15일 | 일 |
    |  3~8주 | 주 |
    | 8~30주 | 달 |
    | 30주 이상 | 추정치를 말하기 전에 다시 한번 생각해 보라.  |
  - 모든 추정치는 문제의 모델에 기반한다.
  - 항상 좋은 답을 알려주는 기본적인 추정 기술은 그 일을 해본 사람에게 물어보는 것이다.
  - 무엇을 묻고 있는지를 이해하자.
    - 정확도만이 아니라 도메인의 범위에 대해 감을 잡고 있어야 한다.
    - 추정을하기 전에 미리 생각하는 습관을 기르는 것이 좋다.
  - 시스템의 모델을 만들어보라
    - 클라이언트가 요청한 것이 무엇인지 이해한 후에는 대략적이고, 꾸밈없는 모델을 만들어보라.
  - 모델을 컴포넌트로 나누어라.
    - 각 컴포넌트가 전체 모델에 어떻게 기여하는지에 영향을 미치는 매개 변수를 갖고 있다는 것을 알게 될 것이다. 이 단계에서 각 매개 변수를 규명하면 된다.
  - 각 매개 변수에 값을 주어라.
    - 결과에 큰 영향을 미치는 매개 변수가 무엇인지 규명하고, 이 매개 변수의 값을 최대한 정확히 산출해내는 것이다.
    - 중요 매개 변수를 계산하는 데 취한 방법은 나름 근거가 있어야 한다. 현재 시스템에서 일어나고 있는 실제 트랜잭션 도달 비율을 측정해 보거나, 측정을 해볼 수 있는 실제 트랜잭션 도달 비율을 측정해 보거나, 측정을 해볼 수 있는 비슷한 시스템을 찾아보아야 할 것이다.
  - 답을 계산하라.
    - 중요 매개 변수들의 값을 변경시켜 가면서 여러 번 계산을 해보고, 이 가운데 어떤 것이 모델과 잘 들어맞는지 찾아내라.
  - 추정치를 기록하는 용기
    - 계산한 추정치를 기록해 놓고, 이 값이 실제 결과에 얼마나 가까운지 평가해 보라.
    - 추정치가 잘못되었다면 왜 추측과 실제 값이 달라졌는지 원인을 찾아야 한다.
    - 실제 문제와 맞지 않는 매개 변수를 선택했을 수도 있다. 아니면 모델 자체가 잘못되었을 수도 있다. 원인이 무엇이든, 시간을 들여 규명하라.
  - 프로젝트 일정 추정하기
    - 같은 단계를 반복하는 점증적 개발(incremental development)
      - 요구사항 체크하기
      - 위험 분석하기
      - 설계, 구현, 통합
      - 사용자와 함께 검증하기
    - 코드와 함께 일정도 반복하며 조정하라.
  
 

 > 🤔 **오늘 읽은 소감은? 떠오르는 생각을 가볍게 적어보세요**
 예광탄 코드라는게 잘 이해가 가지 않았다. 개발 서버를 말하는 건가? 
 추상적인 표현들이 많은 거 같고 와닿지 않는다.. 클린 코드보다 조금 더 읽히지 않는 것 같다.
 
 > 🔎 **궁금한 내용이 있거나, 잘 이해되지 않는 내용이 있다면 적어보세요.**
 - 객체 영속 방식(object persistence scheme)가 투명하다.
  - 객체를 오랜 기간 저장, 사용하기 위한 방식.
