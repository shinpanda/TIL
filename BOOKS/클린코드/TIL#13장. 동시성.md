# 📝 TIL (2022.03.17)  
📖 오늘 읽은 범위 : 13장. 동시성
---   
> 😄 **책에서 기억하고 싶은 내용을 써보세요.**   

- 동시성은 결합(coupling)을 없애는 전략이다. 즉, 무엇(what)과 언제(when)를 분리하는 전략이다.
- 스레드가 하나인 프로그램은 무엇과 언제가 서로 밀접하다.
- 동시성과 관련된 미신과 오해
  - 동시성은 항상 성능을 높여준다?
    - 동시성은 때로 성능을 높여준다. 대기 시간이 아주 길어 여러 스레드가 프로세서를 공유할 수 있거나, 여러 프로세서가 동시에 처리할 독립적인 계산이 충분히 많은 경우에만 성능이 높아진다.
  - 동시성을 구현해도 설계는 변하지 않는다?
    - 단일 스레드 시스템과 다중 스레드 시스템은 설계가 판이하게 다르다. 일반적으로 무엇과 언제를 분리하면 시스템 구조가 크게 달라진다.
  - 웹 또는 EJB 컨테이너를 사용하면 동시성을 이해할 필요가 없다?
    - 실제로는 컨테이너가 어떻게 동작하는지, 어떻게 동시 수정, 데드락 등과 같은 문제를 피할 수 있는지를 알아야만 한다.
- 동시성과 관련된 타당한 생각
  - 동시성은 다소 부하를 유발한다.
    - 성능 측면에서 부하가 걸리며 코드도 더 짜야 한다.
  - 동시성은 복잡하다.
  - 일반적으로 동시성 버그는 재현하기 어렵다.
    - 그래서 진짜 결함으로 간주되지 않고 일회성 문제로 여겨 무시하기 쉽다.
  - 동시성을 구현하려면 흔히 근본적인 설계 전략을 재고해야 한다.
- #### 동시성 방어 원칙
  - 단일 책임 원칙(Single Responsibility Principle, SRP)
    - 주어진 메서드/클래스/컴포넌트를 변경할 이유가 하나여야 한다는 원칙.
    - 동시성은 복잡성 하나만으로도 분리할 이유가 충분하다.
    **- 동시성 관련 코드와 다른 코드는 분리해야 한다.**
    - 동시성 코드는 독자적인 개발, 변경, 조율 주기가 있다.
    - 동시성 코드에는 독자적인 난관이 있다. 다른 코드에서 겪는 난관과 다르며, 훨씬 어렵다.
    - 잘못 구현한 동시성 코드는 별의별 방식으로 실패한다.
  - 따름 정리(corollary) : 자료 범위를 제한하라.
    - 공유 객체를 사용하는 코드 내 임게영역(critical section)을 synchronized 키워드로 보호하라.
    - 공유 자료를 수정하는 위치가 많을 수록 다음 가능성도 커진다.
      - 보호할 임계영역을 빼먹는다. 그래서 공유 자료를 수정하는 모든 코드를 망가뜨린다.
      - 모든 임계영역을 올바로 보호했는지(DRY 위반) 확인하느라 똑같은 노력과 수고를 반복한다.
    **- 자료를 캡슐화(encapsulation)하라. 공유 자료를 최대한 줄여라. **
  - 따름 정리 : 자료 사본을 사용하라.
    - 객체를 복사해 읽기 전용으로 사용하는 방법이 가능하다. 각 스레드가 객체를 복사해 사용한 후 한 스레드가 해당 사본에서 결과를 가져오는 방법도 가능하다.
    - 복사 비용이 진짜 문제인지 실측해볼 필요가 있다. 하지만 사본으로 동기화를 피할 수 있다면 내부 잠금을 없애 절약한 수행 시간이 사본 생성과 가비지 컬렉션에 드는 부하를 상쇄할 가능성이 크다.
  - 따름 정리 : 스레드는 가능한 독립적으로 구현하라.
    - 각 스레드는 클라이언트 요청 하나를 처리한다.
    - 모든 정보는 비공유 출처에서 가져오며 로컬 변수에 저장한다.
    **- 독자적인 스레드로, 가능하면 다른 프로세서에서, 돌려도 괜찮도록 자료를 독립적인 단위로 분할하라.**
  - 라이브러리를 이해하라.
    - 스레드 환경에 안전한 컬렉션 사용
    - 서로 무관한 작업 수행 시 executor 프레임워크 사용
    - 가능하다면 스레드가 차단(blocking)되지 않는 방법 사용
    - 일부 클래스 라이브러리는 스레드에 안전되지 못함을 고려
  - 스레드 환경에 안전한 컬렉션
    - java.util.concurrent 패키지
      - ConcurrentHashMap은 거의 모든 상황에서 HashMap보다 빠르다.
    - 언어가 제공하는 클래스를 검토하라. 자바에서는 java.util.concurrent, java.util.concurrent.atomic, java.util.concurrent.lock를 익혀라.
  - 실행 모델을 이해하라.
    - 다중 스레드 애플리케이션을 분류하는 방식
      - 한정된 자원(Bound Resource) : 다중 스레드 환경에서 사용하는 자원. 크기나 숫자가 제한적. 데이터베이스 연결, 길이가 일정한 읽기/쓰기 버퍼 등이 예다.
      - 상호 배제(Mutual Exclusion) : 한 번에 한 스레드만 공유 자료나 공유 자원을 사용할 수 있는 경우
      - 기아(Starvation) : 한 스레드나 여러 스레드가 굉장히 오랫동안 혹은 영원히 자원을 기다린다. 예를 들어, 항상 짧은 스레드에게 우선순위를 준다면, 짧은 스레드가 지속적으로 이어질 경우, 긴 스레드가 기아 상태에 빠진다.
      - 데드락(Deadlock) : 여러 스레드가 서로가 끝나기를 기다린다. 모든 스레드가 각기 필요한 자원을 다른 스레드가 점유하는 바람에 어느 쪽도 더 이상 진행하지 못한다.
      - 라이브락(Livelock) : 락을 거는 단계에서 각 스레드가 서로를 방해한다. 스레드는 계속해서 진행하려 하지만, 공명(resonance)으로 인해, 굉장히 오랫동안 혹은 영원히 진행하지 못한다.
    - 다중 스레드 프로그램이 실행 모델
      - 생산자-소비자(Producer-Consumer)
        - 하나 이상 생산자 스레드가 정보를 생성해 버퍼(buffer)나 대기열(queue)에 넣는다. 하나 이상 소비자 스레드가 대기열에서 정보를 가져와 사용한다.
        - 생산자 스레드와 사용자 스레드가 사용하는 대기열은 한정된 자원이다.
        - 생산자 스레드는 대기열에 빈 공간이 있어야 정보를 채울 수 있으며, 소비자 스레드는 대기열에 정보가 있어야 가져온다.
        - 잘못하면 생산자 스레드와 소비자 스레드가 둘 다 진행 가능함에도 불구하고 동시에 서로에게서 시그널을 기다릴 가능성이 존재한다.
      - 읽기-쓰기(Readers-Writers)
        - 읽기 스레드를 위한 주된 정보원으로 공유 자원을 사용하지만, 쓰기 스레드가 이 공유 자원을 이따금 갱신
        - 처리율(throughput)이 문제의 핵심으로, 처리율을 강조하면 기아(starvation) 현상이 생기거나 오래된 정보가 쌓인다. 갱신을 허용하면 처리율에 영향을 미친다.
        - 읽기 스레드가 계속 이어져 쓰기 스레드가 기아 상태로 빠지지 않게 하며, 쓰기 스레드에게 우선권을 주어 쓰기 스레드가 계속 이어져 처리율이 떨어지지 않도록 균형을 잡는 해법이 필요하다.
      - 식사하는 철학자들(Dining Philosophers)
        - 기업 애플리케이션은 여러 프로세스가 자원을 얻으려 경쟁한다. 주의해서 설계하지 않으면 데드락, 라이브락, 처리율 저하, 효율성 저하 등을 겪는다.
      - 대다수 다중 스레드 문제는 위 세 범주 중 하나에 속한다. 각 알고리즘을 공부하고 각 해법을 직접 구현해보라.
    - 동기화하는 메서드 사이에 존재하는 의존성을 이해하라.
      - 자바 언어는 개별 메서드를 보호하는 synchronized라는 개념을 지원한다.
      - 공유 객체 하나에는 메서드 하나만 사용하라. 만약 공유 클래스 하나에 동기화된 메서드가 여럿이라면 구현이 올바른지 다시 한 번 확인하기 바란다.
      - 공유 객체 하나에 여러 메서드가 필요한 경우 다음 세가지 방법을 고려하라.
        - 클라이언트에서 잠금 - 클라이언트에서 첫 번째 메서드를 호출하기 전에 서버를 잠근다. 마지막 메서드를 호출할 때까지 잠금을 유지한다.
        - 서버에서 잠금 - 서버에다 "서버를 잠그고 모든 메서드를 호출한 후 잠금을 해제하는" 메서드를 구현한다. 클라이언트는 이 메서드를 호출한다.
        - 연결(Adapted) 서버 - 잠금을 수행하는 중간 단계를 생성한다. '서버에서 잠금' 방식과 유사하지만 원래 서버는 변경하지 않는다.
    - 동기화하는 부분을 작게 만들어라.
      - 같은 락으로 감싼 모든 코드 영역은 한 번에 한 스레드만 실행이 가능하다. 락은 스레드를 지연시키고 부하를 가중시킨다.
      - 여기저기서 synchronized 문을 남발하는 코드는 바람직하지 않다. 반면, 임계영역(critical section)은 반드시 보호해야 한다.
      - 임계 영역수를 최대한 줄여야 하지만, 이를 줄이겠다고 거대한 임계 영역을 만들어서는 안된다. 필요 이상으로 임계영역 크기를 키우면 스레드 간에 경쟁이 늘어나고 프로그램 성능이 떨어진다.
    - 올바른 종료 코드는 구현하기 어렵다.
      - 깔끔하게 종료하는 코드는 올바로 구현하기 어렵다. 가장 흔히 발생하는 문제가 데드락이다. 즉, 스레드가 절대 오지 않을 시그널을 기다린다.
      - 종료 코드를 개발 초기부터 고민하고 동작하게 초기부터 구현하라. 생각보다 오래 걸린다. 생각보다 어려우므로 이미 나온 알고리즘을 검토하라.
    - 스레드 코드 테스트하기
      - 같은 코드와 같은 자원을 사용하는 스레드가 둘 이상으로 늘어나면 상황은 급격하게 복잡해진다.
      - 문제를 노출하는 테스트 케이스를 작성하라. 프로그램 설정과 시스템 설정과 부하를 바꿔가며 자주 돌려라. 테스트가 실패하면 원인을 추적하라. 다시 돌렸더니 통과하더라는 이유로 그냥 넘어가면 절대로 안 된다.
    - 고려할 지침 사항
      - 말이 안 되는 실패는 잠정적인 스레드 문제로 취급하라.
        - 시스템 실패를 '일회성'이라 치부하지 마라.
        - '일회성' 문제를 계속 무시한다면 잘못된 코드 위에 코드가 계속 쌓인다.
      - 다중 스레드를 고려하지 않은 순차 코드부터 제대로 돌게 만들자.
        - 스레드 환경 밖에서 생기는 버그와 스레드 환경에서 생기는 버그를 동시에 디버깅하지 마라. 먼저 스레드 환경 밖에서 코드를 올바로 돌려라.
      - 다중 스레드를 쓰는 코드 부분을 다양한 환경에 쉽게 끼워 넣을 수 있도록 스레드 코드를 구현하라.
      - 다중 스레드를 쓰는 코드 부분을 상황에 맞춰 조정할 수 있게 작성하라.
      - 프로세서 수보다 많은 스레드를 돌려보라.
      - 다른 플랫폼에서 돌려보라.
      - 코드에 보조 코드(instrument)를 넣어 돌려라. 강제로 실패를 일으키게 해보라.
    - 말이 안 되는 실패는 잠정적인 스레드 문제로 취급하라
      - 다중 스레드 코드는 때때로 '말이 안 되는' 오류를 일으킨다.
      - 권장사항 : 시스템 실패를 '일회성'이라 치부하지 마라.
    - 다중 스레드를 고려하지 않은 순차 코드부터 제대로 돌게 만들자.
      - 권장사항 : 스데르 환경 밖에서 생기는 버그와 스레드 환경에서 생기는 버그를 동시에 디버깅하지 마라. 먼저 스레드 환경 밖에서 코드를 올바로 돌려라.
    - 다중 스레드를 쓰는 코드 부분을 다양한 환경에 끼워 넣을 수 있게 스레드 코드를 구현하라.
      - 실행 중 스레드 수를 바꿔본다.
      - 스레드 코드를 실제 환경이나 텍스트 환경에서 돌려본다.
      - 테스트 코드를 빨리, 천천히, 다양한 속도로 돌려본다.
      - 반복 테스트가 가능하도록 테스트 케이스를 작성한다.
      - 권장사항 : 다양한 설정에서 실행할 목적으로 다른 환경에 쉽게 끼워 넣을 수 있게 코드를 구현하라.
    - 다중 스레드를 쓰는 코드 부분을 상황에 맞게 조율할 수 있게 작성하라
      - 스레드 개수를 조율하기 쉽게 코드를 구현한다.
      - 프로그램이 돌아가는 도중에 스레드 개수를 변경하는 방법도 고려한다.
      - 프로그램 처리율과 효율에 따라 스스로 스레드 개수를 조율하는 코드도 고려한다.
    - 프로세서 수보다 많은 스레드를 돌려보라
      - 시스템이 스레드를 스와핑(swapping)할 때도 문제가 발생한다.
      - 스와핑을 일으키려면 프로세서 수보다 많은 스레드를 돌린다. 스와핑이 잦을수록 임계영역을 빼먹은 코드나 데드락을 일으키는 코드를 찾기 쉬워진다.
    - 다른 플랫폼에서 돌려보라
      - 다중 스레드 코드는 플랫폼에 따라 다르게 돌아간다. 
      - 자바 스레드 모델은 선점형(preemptive) 스레드 스케줄링을 보장하지 않는다.
      - 권장사항 : 처음부터 그리고 자주 모든 목표 플랫폼에서 코드를 돌려라.
    - 코드에 보조 코드(instrument)를 넣어 돌려라. 강제로 실패를 일으키게 해보라.
      - 스레드 버그가 산발적이고 우발적이고 재현이 어려운 이유는 코드가 실행되는 수천 가지 경로 중에 아주 소수만 실패하기 때문이다. 즉, 실패하는 경로가 실행될 확률은 극도로 저조하다.
      - 코드에 보조 코드를 추가하는 방법은 두 가지다.
        -  직접 구현하기
        -  자동화
      - 직접 구현하기
        - 코드에다 직접 wait(), sleep(), yield(), priority() 함수를 추가한다. 특별히 까다로운 코드를 테스트할 때 적합하다.
        ```java
          public synchronized String nextUrlOrNull() {
            if(hasNext()){
              String url = urlGenerator.next();
              Thread.yield(); // 테스트를 위해 추가되었다.
              updateHasNext();
              return url;
            }
            return null;
          }
        ```
        - yield()를 삽입하면 코드가 실행되는 경로가 바뀐다. 그래서 이전에 실패하지 않았던 코드가 실패할 가능성을 열어준다.
        - 이 방법에는 여러 가지 문제가 있다.
          - 보조 코드를 삽입할 적정 위치를 직접 찾아야 한다.
          - 어떤 함수를 어디서 호출해야 적당한지 어떻게 알까?
          - 배포 환경에 보조 코드를 그대로 남겨두면 프로그램 성능이 떨어진다.
          - 무작위적이다. 오류가 드러날지도 모르고 드러나지 않을지도 모른다. 사실상 드러나지 않을 확률이 더 높다.
        - 배포 환경이 아니라 테스트 환경에서 보조 코드를 실행할 방법이 필요하다. 실행할 때마다 설정을 바꿔줄 방법도 필요하다. 그래야 전체적으로 오류가 드러날 확률이 높아진다.
        - 확실히 스레드를 전혀 모르는 POJO와 스레드를 제어하는 클래스로 프로그램을 분할하면 보조 코드를 추가할 위치를 찾기가 쉬워진다. 게다가 여러 상황에서 sleep, yield 등으로 POJO를 호출하게 다양한 테스트 지그를 구현할 수도 있다.
  - 자동화
    - 코드를 흔드는(jiggle) 이유는 스레드를 매번 다른 순서로 실행하기 위해서다. 좋은 테스트 케이스와 흔들기 기법은 오류가 드러날 확률을 크게 높여준다.
  - 결론
    - 무엇보다 먼저, SRP(Single Responsibility Principle)를 준수한다. POJO를 사용해 스레드를 아는 코드와 스레드를 모르는 코드를 분리한다. 스레드 코드를 테스트할 때는 전적으로 스레드만 테스트한다. 즉, 스레드 코드는 최대한 집약되고 작아야 한다는 의미다.
    - 동시성 오류를 일으키는 잠정적인 원인을 철저히 이해한다.
    - 사용하는 라이브러리와 기본 알고리즘을 이해한다. 특정 라이브러리 기능이 기본 알고리즘과 유사한 어떤 문제를 어떻게 해결하는지 파악한다.
    - 보호할 코드 영역을 찾아내는 방법과 특정 코드 영역을 잠그는 방법을 이해한다.
    - 공유하는 객체 수와 범위를 최대한 줄인다. 
    - 클라이언트에게 공유 상태를 관리하는 책임을 떠넘기지 않는다.
    - 소위 일회성 문제는 대개 시스템에 부하가 걸릴 때나 아니면 뜬금없이 발생한다. 그러므로 스레드 코드는 많은 플랫폼에서 많은 설정으로 반복해서 계속 테스트해야 한다.
    - 테스트 용이성은 TDD(Test Driven Development) 3개 규칙을 따르면 자연히 얻어진다. 테스트 용이성은 또한 좀 더 넣은 설정 범위에서 코드를 수행하기 위해 필요한 기능을 제공하는 플러그인 수준을 의미한다.
    - 초반부터 보조 코드를 고려하라. 스레드 코드는 출시하기 전까지 최대한 오랫동안 돌려봐야 한다.  

> 🤔 **오늘 읽은 소감은? 떠오르는 생각을 가볍게 적어보세요**  

가장 잘 알아둬야 하는 부분인데, 뜻하지 않게 정리를 오랫동안 못했다 오늘에서야 드디어 정리를 했다.
클라이언트에게 공유 상태를 관리하는 책임을 떠넘기지 않는다..라는 건 뭘까? 오늘 다시 읽어보다 그 점에 꽂혔다.
동시성 문제는 꼭 익혀야 할 부분이니 계속 반복해서 읽어보자

> 🔎 **궁금한 내용이 있거나, 잘 이해되지 않는 내용이 있다면 적어보세요.**  
- 결합분리(decoupling) 전략
  - 모듈과의 연결고리를 분리
  - 모듈 사이의 연결고리(의존관계)를 인터페이스를 사용하여 두 모듈의 의존성을 감소하여 개발 및 유지보수가 용이하도록 처리하는 방법
- 응답 시간과 작업 처리량(throught) 개선
  - 응답 시간은 컴퓨터가 한 작업을 수행하는데 걸리는 시간(디스크 접근, 메모리 접근, 입출력 작업, 운영체제 오버헤드 및 CPU 시간)을 의미하고, 처리량은 단위 시간당 컴퓨터가 수행하는 작업량(완료하는 태스크의 수)을 의미한다.
  - 프로세서를 더 빠른 버전으로 교체하여 응답 시간을 단축시킨다.
  - 프로세서를 추가하여 처리량을 개선할 수 있다. 처리에 대한 요구가 처리량보다 커지면 일부는 큐에 넣어 기다리게 되면 처리량이 클수록 큐에서 기다리는 시간이 짧아지게 되며 응답시간이 개선되게 된다.
- JIT(Just-In-Time) 컴파일러가 바이트 코드를 처리하는 방식
  - HotSpot VM과 같이 메소드(함수) 단위로 JIT 컴파일을 하는 방식과, 그보다 더 작은 단위에서 프로그램 실행 흐름을 실시간으로 추적하며 컴파일할 코드를 탐색하는 Tracing JIT 방식으로 분류할 수 있다.
  - Tracing JIT은 실행 시점에만 알 수 있는 정보를 컴파일에 적극적으로 반영하기 때문에 정적 컴파일 방식보다 컴파일 속도가 더 빨라질 수도 있다.
  - 미리 컴파일된 코드를 실행하는 것이 아닌, 런타임에 동적으로 코드를 생성하여 실행한다는 특징 때문에 JIT 컴파일러는 잠재적으로 상당한 보안 문제를 가지고 있다. 특히 JIT 컴파일러 자체에 버그가 있는 경우 곧바로 보안취약점이 되는 경우가 많다.  
(출처 : https://namu.wiki/w/JIT#fn-4)
- 자바 메모리 모델이 원자로 간주하는 최소 단위
  - https://rightnowdo.tistory.com/entry/JAVA-concurrent-programming-Atomic%EC%9B%90%EC%9E%90%EC%84%B1
- 테스트 지그(jig) - https://blog.daum.net/bital/4135220
