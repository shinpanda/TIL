## 📝 TIL (2022.03.24)
## DAY 6
📖 오늘 읽은 범위 : 4장.실용주의 편집증

> 😄 **책에서 기억하고 싶은 내용을 써보세요.**
- 완벽한 소프트웨어는 만들 수 없다.
- ### 계약에 의한 설계
  - #### DBC
    - 정확한 프로그램이란 무엇인가? 스스로 자신이 하는 일이라고 주장하는 것보다 많거나 적지도 않게 딱 그 만큼만 하는 프로그램을 말한다.
    이 주장을 문서화하고 검증하는 것이 계약에 의한 설계(Design By Contract, DBC)의 핵심이다.
    - 선행조건(precondition) : 루틴의 요구사항. 선행조건이 위반된 경우 루틴이 호출되어서는 안 된다. 제대로 된 데이터를 전달하는 것은 호출하는 쪽의 책임이다.
    - 후행조건(postcondition) : 루틴이 완료되었을 때 세상의 상태. 무한 반복은 허용되지 않는다.
    - 클래스 불변식(class invariant) : 루틴이 종료하고 호출자로 재ㅔ어권이 반환되는 때에는 불변식이 참이 되어야 한다.
    - 단정문(assertion)은 해당 메서드가 접근할 수 있는 모든 객체의 상태를 질의할 수 있지만 그 질의가 부작용을 낳지 않도록 주의하라.
    - 루틴과 그 루틴의 잠재적 호출자 간의 계약
      - 만약 호출자가 루틴의 모든 선행조건을 충족한다면, 해당 루틴은 종료시 모든 후행조건과 불변식이 참이 될 것을 보즈앻야 한다.
    - 계약에 따른 설계를 하라.
    - `게으른lazy` 코드 : 시작하기 전에 자신이 수용할 것에 대해서는 엄격하게 하고, 내어줄 것에 대해서는 최소한도를 약속하는 것이다.
  - #### DBC 구현
    - DBC를 사용하는 최고의 장점은 요구사항과 보증의 문제를 전면으로 내세운다는 것이다.
    입력 도메인 범위가 무엇인지, 경계 조건이 무엇인지, 루틴이 뭘 전달한다고 약속하는지 하는 것들을 설계 시기에 나열하는 것만으로도 더 나은 소프트웨어를 작성하는 데에 엄청난 도움이 된다.
    - DBC는 설계 기법이다.
    - **의미론적 불변식** : 어떤 것의 바로 그 의미의 중심이 되어야 하며, 일시적인 정책(좀 더 동적인 비즈니스 법칙)에 영향을 받으면 안 된다.
- ### 죽은 프로그램은 거짓말을 하지 않는다.
  - 일찍 작동을 멈추게 하라.
  - 망치지 말고 멈추라.
    - 자바 언어와 라이브러리는 런타임 시스템에서 뭔가 예상하지 못한 것이 발생하면 RuntimeException을 던진다. 만약 이 예외가 잡히지(catch) 않으면 프로그램의 최상위 수준까지 스며 나올 것이고, 결국 스택트레이스를 출력하며 프로그램을 멈춰버릴 것이다.
    - 방금 불가능한 뭔가가 발생했다는 것을 코드가 발견한다면, 프로그램은 더 이상 유효하지 않다고 할 수 있다. 이 시점 이후로 하는 일은 모두 수상 쩍은 게 된다. 되도록 빨리 종료해야 할 일이다.
    - 일반적으로 죽은 프로그램이 입히는 피해는 절름발이 프로그램이 끼치는 것보다 훨씬 덜한 법이다.  
- ### 단정적 프로그래밍
  - 단정문을 사용해서 불가능한 상황을 예방하라.
- ### 언제 예외를 사용할까
  - 우리는 예외가 프로그램의 정상 흐름의 일부로 사용되는 일은 거의 없어야 한다고 믿는다. 예외는 의외의 상황을 위해 남겨두어야 한다.
  - 예외는 예외적인 문제에 사용하라.
  - 예외가 있다는 것은 즉 컨트롤의 이동이 즉각적이고 로컬하지 않다는 것을 말한다. 일종의 연쇄 goto 같은 것이다.
  - 예외를 정상적인 처리 과정의 일부로 사용하는 프로그램은 고전적인 스파게티 코드의 가독성 문제와 관리성 문제를 전부 떠안게 된다. 이런 프로그램은 캡슐화 역시 깨뜨리며, 예외 처리를 통해 루틴과 그 호출자들 사이의 결합도가 높아져 버린다.
- ### 리소스 사용의 균형
  - 시작한 것은 끝내라.
  - 중첩 할당
    - 리소스를 할당한 순서의 반대로 해제하라. 이렇게 해야 한 리소스가 다른 리소스를 참조하는 경우에도 리소스를 골아로 만들지 않는다.
    - 코드의 여러 곳에서 동일한 리소스 집합을 할당하는 경우, 할당 순서를 언제나 같게 하라. 교착(deadlock) 가능성이 줄어들 것이다.
  - 리소스 사용의 균형을 잡을 수 없는 경우
    - 최상위 구조 자신이 자기 안에 들어있는 하위 구조들의 할당을 해제할 책임이 있다. 하위 구조들은 또다시 재귀적으로 자기 안에 들어있는 자료들을 해제할 책임이 있고, 이런 식으로 진행된다.
    - 최상위 구조에서 그냥 할당이 해제된다. 그 안에서 참조하던 (다른 곳에서 참조하지 않는) 구조들은 모두 연결이 끊어져 고아가 된다.
    - 최상위 구조는 하나라도 하위 구조를 가지고 있을 경우 자기의 할당 해제를 거부한다.  

> 🤔 **오늘 읽은 소감은? 떠오르는 생각을 가볍게 적어보세요**  
예외를 어떻게 던져야 할까 요새 고민하던 사항이다. 책을 읽기 전 예외를 함부로 사용하면 안된다는 내용의 영상을 봐서 더 그런 거 같다. 어떻게 던져야 예외를 잘 사용하는 것일까? 고민이 된다.


> 🔎 **궁금한 내용이 있거나, 잘 이해되지 않는 내용이 있다면 적어보세요.**
